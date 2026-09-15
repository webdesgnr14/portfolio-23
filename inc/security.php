<?php
/**
 * Security-related functions for the WordPress site.
 *
 * @file
 *
 * @package Portfolio23
 */

/**
 * Adds security headers to the WordPress site.
 *
 * This includes the Content-Security-Policy, X-Frame-Options, and X-Content-Type-Options headers.
 */
function portfolio23_security_headers() {
	if ( headers_sent() ) {
		return; }

	$csp_policy_config = array(
		'default-src' => array(
			"'self'",
		),
		'script-src'  => array(
			"'self'",
			"'unsafe-inline'",
			"'unsafe-eval'",
			'blob:',
			'*.wp.com',
			'localhost:*',
		),
		'style-src'   => array(
			"'self'",
			"'unsafe-inline'",
			'cdn.jsdelivr.net',
			'fonts.googleapis.com',
			'*.wp.com',
		),
		'img-src'     => array(
			"'self'",
			'data:',
			'*.wp.com',
			'*.gravatar.com',
			's.w.org',
		),
		'font-src'    => array(
			"'self'",
			'data:',
			'*.wp.com',
			'fonts.googleapis.com',
			'fonts.gstatic.com',
			'localhost:*',
		),
		'connect-src' => array(
			"'self'",
			'*.wp.com',
			'cdn.jsdelivr.net',
			'*.gravatar.com',
			'ws://localhost:*',
		),
	);

	// Set the Content-Security-Policy header.
	$csp_header = array();

	foreach ( $csp_policy_config as $directive => $sources ) {
		$csp_header[] = $directive . ' ' . implode( ' ', $sources );
	}

	header( 'Content-Security-Policy: ' . implode( '; ', $csp_header ) );

	// Optional: Add other security headers.
	header( 'X-Frame-Options: SAMEORIGIN' );
	header( 'X-Content-Type-Options: nosniff' );
}

add_action( 'send_headers', 'portfolio23_security_headers', 99 );
