<?php

//Theme Supports
add_theme_support('post-thumbnails');
add_theme_support('custom-logo', array(
  'width' => 77,
  'height' => 65,
  'flex-height' => true,
  'flex-width' => true
));
add_theme_support('title-tag');

//Add Image Sizes
add_image_size( 'projects-thumb', 527, 360, true );

//Disable image scaling
add_filter('big_image_size_threshold', '__return_false');

//Remove scripts/css
function portfolio_twenty_three_remove_styles() {
  wp_dequeue_style('wp-block-library');
  wp_dequeue_style('mediaelement');
  wp_dequeue_style('wp-mediaelement');
  wp_dequeue_style('classic-theme-styles');
  wp_dequeue_style('bodhi-svgs-attachment');
  wp_dequeue_style('jetpack_css');
  wp_dequeue_style('global-styles');
}

add_action('wp_print_styles', 'portfolio_twenty_three_remove_styles');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
add_filter('jetpack_sharing_counts', '__return_false', 99);
add_filter('jetpack_implode_frontend_css', '__return_false', 99);

function portfolio_twenty_three_version($file_uri) {
	return filemtime($file_uri);
}

function portfolio_twenty_three_scripts() {
  $version = portfolio_twenty_three_version(get_theme_file_path('/build/appbundle.js'));

  wp_enqueue_script('themeJS', get_template_directory_uri() . '/build/appbundle.js', ["jquery"], $version, true);
  wp_enqueue_style('appCSS', get_template_directory_uri() . '/build/app.css', [], $version, 'all');

  //jQuery
  wp_enqueue_script('jquery');
  wp_enqueue_script('jquery-core');
  wp_enqueue_script('jquery-migrate');
  wp_scripts()->add_data( 'jquery', 'group', 1 );
  wp_scripts()->add_data( 'jquery-core', 'group', 1 );
  wp_scripts()->add_data( 'jquery-migrate', 'group', 1 );
}

add_action('wp_enqueue_scripts', 'portfolio_twenty_three_scripts');
add_action('wp_footer', 'print_emoji_detection_script');
add_action('wp_print_styles', 'print_emoji_styles');

//Register Menus
if(function_exists('register_nav_menus')){
  register_nav_menus(
    array('primary-nav' => __("Primary Nav"))
  );
}

//Allowed Block Types
function portfolio_twenty_three_allowed_blocks($allowed_blocks) {
  return array (
    'core/block', //Allow Core Reuseable blocks
  );
}

add_filter('allowed_block_types_all', 'portfolio_twenty_three_allowed_blocks');

//Register API Routes
function portfolio_twenty_three_primary_menu_api() {
  return wp_get_nav_menu_items('Primary Nav');
}

function portfolio_twenty_three_options_api() {
  $options = get_fields("options", "options");

  if(!empty($options)) {
    return $options;
  }

  return null;
}

add_action('rest_api_init', function(){
  register_rest_route('wp/v2', 'primary-nav', array(
    'method' => 'GET',
    'callback' => 'portfolio_twenty_three_primary_menu_api',
    'permission_callback' => '__return_true',
  ));

  register_rest_route('wp/v2', 'options', array(
    'method' => 'GET',
    'callback' => 'portfolio_twenty_three_options_api',
    'permission_callback' => function() {
      return is_user_logged_in();
    }
  ));
});

//Add Projects Post Type
function portfolio_twenty_three_custom_post_project() {
  add_rewrite_tag('%project_id%', '(.+)');

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
    'menu_name'          => 'Projects'
  );

  $args = array(
    'labels'        => $labels,
    'description'   => 'Custom post type for projects.',
    'public'        => true,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments', 'custom-fields' ),
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
    'show_in_rest' => true,
    'rewrite' => array('slug' => 'project'),
    'menu_icon' => 'dashicons-format-gallery',
  );

  register_post_type( 'project', $args ); 
}
add_action( 'init', 'portfolio_twenty_three_custom_post_project', 0);

function portfolio_twenty_three_rewrite_projects_permalink($permalink, $post, $leavename) {
  if (is_object($post) && 'project' === $post->post_type) {
    $post_id = $post->ID;
    $permalink = add_query_arg('project_id', $post_id, $permalink);
  }

  return $permalink;
}

add_filter('post_type_link', 'portfolio_twenty_three_rewrite_projects_permalink', 10, 3);
add_filter('post_link', 'portfolio_twenty_three_rewrite_projects_permalink', 10, 3);

function reflush_rules() {
  global $wp_rewrite;
  $wp_rewrite->flush_rules();
}

add_action('after_switch_theme', 'reflush_rules');

if(function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title'    => 'Theme General Settings',
    'menu_title'    => 'Theme Settings',
    'menu_slug'     => 'theme-general-settings',
  ));
}