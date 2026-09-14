<?php
/**
 * Add a WordPress REST API endpoint to proxy external requests with secure credentials.
 *
 * @file
 *
 * @package Portfolio23
 */

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'proxy/v1',
			'/fetch/',
			array(
				'methods'             => 'GET',
				'callback'            => function ( $request ) {
					$url = esc_url_raw( $request->get_param( 'url' ) );
					// Allow requests to this host or to relative /wp-json URLs (for local/prod use).
					$allowed_hosts = array(
						'sheriserogers.com',
						'localhost',
						'127.0.0.1',
						'www.sherise-online-portfolio.local',
					);
					$parsed        = wp_parse_url( $url );
					$path          = isset( $parsed['path'] ) ? $parsed['path'] : $url;

					$host_allowed = ! isset( $parsed['host'] ) || in_array( $parsed['host'], $allowed_hosts, true );
					// Regardless of host, only ever allow this credentialed proxy to reach
					// our own REST API - never an arbitrary path (wp-admin, xmlrpc.php, etc.).
					$path_allowed = strpos( $path, '/wp-json/' ) === 0;

					if ( ! $host_allowed || ! $path_allowed ) {
						return new WP_Error(
							'forbidden_host',
							'Not allowed.',
							array( 'status' => 403 )
						);
					}

					$username = getenv( 'PROXY_USERNAME' );
					$password = getenv( 'PROXY_PASSWORD' );

					if ( ! $username || ! $password ) {
						error_log( 'Proxy missing creds: username or password is not set on server!' ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- intentional server-side ops logging, no secrets included
						return new WP_Error(
							'missing_creds',
							'Credentials not set on server!',
							array(
								'status'     => 500,
								'statusText' => 'Credentials not set on server!',
							)
						);
					}

					$creds = base64_encode( "$username:$password" ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode -- HTTP Basic Auth requires base64 per RFC 7617, not used for obfuscation

					$remote = wp_remote_get(
						$url,
						array(
							'headers' => array(
								'Authorization' => 'Basic ' . $creds,
								'Content-Type'  => 'application/json',
							),
						)
					);

					if ( is_wp_error( $remote ) ) {
						// Log the failure, never the credentials or response body.
						error_log( 'Proxy WP_Error requesting ' . $url . ': ' . $remote->get_error_message() ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log -- intentional server-side ops logging, no secrets included
						return new WP_Error( 'fetch_failed', $remote->get_error_message(), array( 'status' => 500 ) );
					}

					$body = wp_remote_retrieve_body( $remote );
					$code = wp_remote_retrieve_response_code( $remote );

					$decoded_body = json_decode( $body, true );
					return rest_ensure_response(
						array(
							'data'     => $decoded_body,
							'body_raw' => $body,
							'status'   => $code,
						)
					);
				},
				// This proxy attaches privileged credentials to every request it makes,
				// so it must never be reachable by anonymous or unprivileged visitors -
				// that would let anyone use it to read anything the proxy account can
				// read, regardless of any permission check on the target endpoint.
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);
	}
);
