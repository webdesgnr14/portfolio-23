<?php
/**
 * Add a WordPress REST API endpoint to proxy external requests with secure credentials. 
 */

add_action(
    'rest_api_init', function () {
        register_rest_route(
            'proxy/v1', '/fetch/', [
            'methods'  => 'GET',
            'callback' => function ($request) {
                $url = sanitize_text_field($request->get_param('url'));
                // Allow requests to this host or to relative /wp-json URLs (for local/prod use)
                $allowed_hosts = ['sheriserogers.com', 'localhost', '127.0.0.1', 'www.sherise-online-portfolio.local'];
                $parsed = parse_url($url);
                // If the URL is relative and starts with /wp-json, allow it
                if ((isset($parsed['host']) && !in_array($parsed['host'], $allowed_hosts, true)) 
                    && strpos($url, '/wp-json/') !== 0 // allow relative REST API paths
                ) {
                    return new WP_Error('forbidden_host', 'Not allowed.', ['status' => 403]);
                }

                $username = getenv('USERNAME');
                $password = getenv('PASSWORD');

                if (!$username || !$password) {
                    return new WP_Error('missing_creds', 'Credentials not set on server', ['status' => 500]);
                }
                $creds = base64_encode("$username:$password");

                $remote = wp_remote_get(
                    $url, [
                    'headers' => [
                    'Authorization' => 'Basic ' . $creds,
                    'Content-Type' => 'application/json'
                    ]
                    ]
                );

                if (is_wp_error($remote)) {
                    return new WP_Error('fetch_failed', $remote->get_error_message(), ['status' => 500]);
                }

                $body = wp_remote_retrieve_body($remote);
                $code = wp_remote_retrieve_response_code($remote);

                return rest_ensure_response(
                    [
                    'data' => json_decode($body, true),
                    'status' => $code
                    ]
                );
            },
            'permission_callback' => '__return_true'
            ] 
        );
    }
);
