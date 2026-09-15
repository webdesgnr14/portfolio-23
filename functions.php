<?php
/**
 * Portfolio 2023 functions and definitions
 *
 * @file
 *
 * @package Portfolio23
 * @author Sherise Rogers
 * @version 1.0
 */

require_once get_template_directory() . '/inc/security.php';

// Add Theme Supports.
add_theme_support( 'post-thumbnails' );
add_theme_support(
	'custom-logo',
	array(
		'width'       => 77,
		'height'      => 65,
		'flex-height' => true,
		'flex-width'  => true,
	)
);
add_theme_support( 'title-tag' );

// Add Image Sizes.
add_image_size( 'projects-thumb', 527, 360, true );

// Disable image scaling.
add_filter( 'big_image_size_threshold', '__return_false' );

/**
 * Remove unnecessary styles and scripts.
 *
 * @return void
 */
function portfolio_twenty_three_remove_styles() {
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'mediaelement' );
	wp_dequeue_style( 'wp-mediaelement' );
	wp_dequeue_style( 'classic-theme-styles' );
	wp_dequeue_style( 'bodhi-svgs-attachment' );
	wp_dequeue_style( 'jetpack_css' );
	wp_dequeue_style( 'global-styles' );
}

add_action( 'wp_print_styles', 'portfolio_twenty_three_remove_styles' );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
add_filter( 'jetpack_sharing_counts', '__return_false', 99 );
add_filter( 'jetpack_implode_frontend_css', '__return_false', 99 );

/**
 * Get the file modification time for cache busting.
 *
 * @param string $file_uri The URI of the file.
 * @return int The file modification time.
 */
function portfolio_twenty_three_version( $file_uri ) {
	return filemtime( $file_uri );
}

add_action( 'wp_footer', 'print_emoji_detection_script' );
add_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Enqueue theme scripts and styles.
 *
 * @return bool True if Vite is running, false otherwise.
 */
function is_vite_running() {
  // phpcs:disable WordPress.WP.AlternativeFunctions.curl_curl_init
	// phpcs:disable WordPress.WP.AlternativeFunctions.curl_curl_setopt
	// phpcs:disable WordPress.WP.AlternativeFunctions.curl_curl_exec
	// phpcs:disable WordPress.WP.AlternativeFunctions.curl_curl_errno
	$ch = curl_init( 'http://localhost:5173' );
	curl_setopt( $ch, CURLOPT_NOBODY, true );
	curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT_MS, 200 );
	curl_exec( $ch );
	$running = curl_errno( $ch ) === 0;
	// curl_close() is a no-op as of PHP 8.0 - curl handles are objects now
	// and no longer need to be manually closed.
	return $running;
  // phpcs:enable WordPress.WP.AlternativeFunctions.curl_curl_init
  // phpcs:enable WordPress.WP.AlternativeFunctions.curl_curl_setopt
  // phpcs:enable WordPress.WP.AlternativeFunctions.curl_curl_exec
  // phpcs:enable WordPress.WP.AlternativeFunctions.curl_curl_errno
}

/**
 * Enqueue theme scripts and styles.
 */
function portfolio_twenty_three_scripts() {
	if ( is_vite_running() ) {
    // phpcs:disable WordPress.WP.EnqueuedResourceParameters.MissingVersion
		wp_enqueue_script( 'vite-refresh', get_template_directory_uri() . '/js/vite-refresh.js', array(), null, true );
		wp_enqueue_script( 'vite-client', 'http://localhost:5173/@vite/client', array(), null, true );
		wp_enqueue_script( 'appBundle', 'http://localhost:5173/src/index.js', array(), null, true );
    // phpcs:enable WordPress.WP.EnqueuedResourceParameters.MissingVersion
	} else {
		$manifest_path = get_theme_file_path( '/build/.vite/manifest.json' );
		$version       = portfolio_twenty_three_version( get_template_directory() . '/build/appbundle.js' );

		if ( file_exists( $manifest_path ) ) {
      // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			$manifest = json_decode( file_get_contents( $manifest_path ), true );

			$js_file = $manifest['src/index.js']['file'];
			wp_enqueue_script( 'appBundle', get_theme_file_uri( '/build/' . $js_file ), array(), $version, true );
			wp_enqueue_style( 'appCSS', get_theme_file_uri( '/build/app.css' ), array(), $version, 'all' );
		}
	}
}
add_action( 'wp_enqueue_scripts', 'portfolio_twenty_three_scripts' );

/**
 * Add type="module" attribute to Vite scripts.
 *
 * @param string $tag The script tag.
 * @param string $handle The script handle.
 * @param string $src The script source URL.
 * @return string The modified script tag.
 */
function add_module_type_attribute( $tag, $handle, $src ) {
	if ( in_array( $handle, array( 'vite-client', 'vite-refresh', 'appBundle' ), true ) ) {
    // phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedScript
		return '<script type="module" src="' . esc_url( $src ) . '"></script>';
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'add_module_type_attribute', 10, 3 );

/**
 * Register the primary navigation menu for the theme.
 */
if ( function_exists( 'register_nav_menus' ) ) {
	register_nav_menus(
		array( 'primary-nav' => __( 'Primary Nav' ) )
	);
}

/**
 * Filter the allowed block types in the editor.
 *
 * @param array $allowed_blocks The currently allowed block types.
 * @return array The modified list of allowed block types.
 */
function portfolio_twenty_three_allowed_blocks( $allowed_blocks ) {
	$allowed_blocks[] = 'core/block'; // Allow Core Reuseable blocks.
	return $allowed_blocks;
}

add_filter( 'allowed_block_types_all', 'portfolio_twenty_three_allowed_blocks' );

/**
 * Register custom API routes for the theme.
 */
function portfolio_twenty_three_primary_menu_api() {
	return wp_get_nav_menu_items( 'Primary Nav' );
}

/**
 * Returns the full ACF options page. Gated to logged-in requests.
 */
function portfolio_twenty_three_options_api() {
	$options = get_fields( 'options', 'options' );

	if ( ! empty( $options ) ) {
		return $options;
	}

	return null;
}

/**
 * Return only the public-safe EmailJS settings the contact form needs
 * to call EmailJS directly from the browser.
 *
 * Deliberately omits emailjs.private_key: EmailJS's Private Key is used
 * for server-side / strict-mode requests and must never be shipped to
 * client-side code. The contact form should use emailjs.user_id (the
 * Public Key) instead.
 */
function portfolio_twenty_three_contact_settings_api() {
	$emailjs = get_field( 'emailjs', 'options' );

	if ( empty( $emailjs ) ) {
		return null;
	}

	return array(
		'emailjs' => array(
			'service_id'  => $emailjs['service_id'] ?? '',
			'template_id' => $emailjs['template_id'] ?? '',
			'user_id'     => $emailjs['user_id'] ?? '',
		),
	);
}

add_action(
	'rest_api_init',
	function () {
		register_rest_route(
			'wp/v2',
			'primary-nav',
			array(
				'method'              => 'GET',
				'callback'            => 'portfolio_twenty_three_primary_menu_api',
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			'wp/v2',
			'options',
			array(
				'method'              => 'GET',
				'callback'            => 'portfolio_twenty_three_options_api',
				'permission_callback' => function () {
					return is_user_logged_in();
				},
			)
		);

		register_rest_route(
			'wp/v2',
			'contact-settings',
			array(
				'method'              => 'GET',
				'callback'            => 'portfolio_twenty_three_contact_settings_api',
				'permission_callback' => '__return_true',
			)
		);
	}
);

/**
 * Register the custom post type for projects.
 */
function portfolio_twenty_three_custom_post_project() {
	add_rewrite_tag( '%project_id%', '(.+)' );

	$labels = array(
		'name'               => _x( 'Projects', 'post type general name' ),
		'singular_name'      => _x( 'Project', 'post type singular name' ),
		'add_new'            => _x( 'Add New', 'book' ),
		'add_new_item'       => __( 'Add New Project' ),
		'edit_item'          => __( 'Edit Project' ),
		'new_item'           => __( 'New Project' ),
		'all_items'          => __( 'All Projects' ),
		'view_item'          => __( 'View Project' ),
		'search_items'       => __( 'Search Projects' ),
		'not_found'          => __( 'No projects found' ),
		'not_found_in_trash' => __( 'No projects found in the Trash' ),
		'parent_item_colon'  => __( 'Parent Project:' ),
		'menu_name'          => 'Projects',
	);

	$args = array(
		'labels'              => $labels,
		'description'         => 'Custom post type for projects.',
		'public'              => true,
		'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields' ),
		'hierarchical'        => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => false,
		'publicly_queryable'  => true,
		'capability_type'     => 'page',
		'show_in_rest'        => true,
		'rewrite'             => array( 'slug' => 'project' ),
		'menu_icon'           => 'dashicons-format-gallery',
	);

	register_post_type( 'project', $args );
}
add_action( 'init', 'portfolio_twenty_three_custom_post_project', 0 );

/**
 * Rewrite the permalink for project custom post type to include the project_id query parameter.
 *
 * @param string  $permalink The original permalink.
 * @param WP_Post $post The post object.
 * @param bool    $leavename Whether to keep the post name.
 * @return string The modified permalink with the project_id query parameter.
 */
function portfolio_twenty_three_rewrite_projects_permalink( $permalink, $post, $leavename ) { // phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed -- required to match the post_type_link/post_link filter signature
	if ( is_object( $post ) && 'project' === $post->post_type ) {
		$post_id   = $post->ID;
		$permalink = add_query_arg( 'project_id', $post_id, $permalink );
	}

	return $permalink;
}

add_filter( 'post_type_link', 'portfolio_twenty_three_rewrite_projects_permalink', 10, 3 );
add_filter( 'post_link', 'portfolio_twenty_three_rewrite_projects_permalink', 10, 3 );

/**
 * Flush rewrite rules on theme switch.
 */
function reflush_rules() {
	global $wp_rewrite;
	$wp_rewrite->flush_rules();
}

add_action( 'after_switch_theme', 'reflush_rules' );

/**
 * Register ACF options page for theme settings.
 */
function portfolio_twenty_three_acf_options_page() {
	if ( function_exists( 'acf_add_options_page' ) ) {
		acf_add_options_page(
			array(
				'page_title' => 'Theme General Settings',
				'menu_title' => 'Theme Settings',
				'menu_slug'  => 'theme-general-settings',
			)
		);
	}
}
add_action( 'init', 'portfolio_twenty_three_acf_options_page' );
