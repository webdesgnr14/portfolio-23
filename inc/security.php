<?php

function portfolio23_security_headers() {
  if (headers_sent()) { return; }

  // Define your Content Security Policy here
  $csp_policy_config = [
    "default-src" => [ 
      "'self'",
    ],
    "script-src" => [ 
      "'self'",  
      "'unsafe-inline'", 
      "'unsafe-eval'", 
      "blob:",
      "*.wp.com",
    ],
    "style-src" => [ 
      "'self'", 
      "'unsafe-inline'",
      "cdn.jsdelivr.net",
      "fonts.googleapis.com",
      "*.wp.com",
    ],
    "img-src" => [ 
      "'self'", 
      "data:", 
      "*.wp.com",
      '*.gravatar.com',
      's.w.org',
    ],
    "font-src" => [ 
      "'self'",
      "data:",
      "*.wp.com",
      "fonts.googleapis.com",
      "fonts.gstatic.com",
    ],
    "connect-src" => [ 
      "'self'",
      "*.wp.com",
      "cdn.jsdelivr.net",
      '*.gravatar.com',
    ],
  ];
  
  // Set the Content-Security-Policy header
  $csp_header = [];

  foreach ( $csp_policy_config as $directive => $sources ) {
    $csp_header[] = $directive . ' ' . implode( ' ', $sources );
  }

  header( "Content-Security-Policy: " . implode( '; ', $csp_header ) );

  // Optional: Add other security headers
  header( "X-Frame-Options: SAMEORIGIN" );
  header( "X-Content-Type-Options: nosniff" );
}

add_action( 'send_headers', 'portfolio23_security_headers', 99 );