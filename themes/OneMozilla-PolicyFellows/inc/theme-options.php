<?php
/**
 * Properly enqueue styles and scripts for our theme options page.
 * This function is attached to the admin_enqueue_scripts action hook.
 */
function onemozilla_admin_enqueue_scripts( $hook_suffix ) {
  wp_enqueue_style( 'onemozilla-theme-options', get_template_directory_uri() . '/inc/theme-options.css', false, '2012-03-06' );
}
add_action( 'admin_print_styles-appearance_page_theme_options', 'onemozilla_admin_enqueue_scripts' );

/**
 * Register the form setting for our onemozilla_options array.
 *
 * This function is attached to the admin_init action hook.
 *
 * This call to register_setting() registers a validation callback, onemozilla_theme_options_validate(),
 * which is used when the option is saved, to ensure that our option values are complete, properly
 * formatted, and safe.
 *
 * We also use this function to add our theme option if it doesn't already exist.
 */
function onemozilla_theme_options_init() {

  // If we have no options in the database, let's add them now.
  if ( false === onemozilla_get_theme_options() )
    add_option( 'onemozilla_theme_options', onemozilla_get_default_theme_options() );

  register_setting(
    'onemozilla_options',       // Options group, see settings_fields() call in onemozilla_theme_options_render_page()
    'onemozilla_theme_options', // Database option, see onemozilla_get_theme_options()
    'onemozilla_theme_options_validate' // The sanitization callback, see onemozilla_theme_options_validate()
  );

  // Register our settings field group
  add_settings_section(
    'general', // Unique identifier for the settings section
    '', // Section title (we don't want one)
    '__return_false', // Section callback (we don't want anything)
    'theme_options' // Menu slug, used to uniquely identify the page; see onemozilla_theme_options_add_page()
  );

  // Register our individual settings fields
  add_settings_field(
    'color_scheme',  // Unique identifier for the field for this section
    __( 'Color Scheme', 'onemozilla' ), // Setting field label
    'onemozilla_settings_field_color_scheme', // Function that renders the settings field
    'theme_options', // Menu slug, used to uniquely identify the page; see onemozilla_theme_options_add_page()
    'general' // Settings section. Same as the first argument in the add_settings_section() above
  );

}
add_action( 'admin_init', 'onemozilla_theme_options_init' );

/**
 * Change the capability required to save the 'onemozilla_options' options group.
 *
 * @see onemozilla_theme_options_init() First parameter to register_setting() is the name of the options group.
 * @see onemozilla_theme_options_add_page() The edit_theme_options capability is used for viewing the page.
 *
 * By default, the options groups for all registered settings require the manage_options capability.
 * This filter is required to change our theme options page to edit_theme_options instead.
 * By default, only administrators have either of these capabilities, but the desire here is
 * to allow for finer-grained control for roles and users.
 *
 * @param string $capability The capability used for the page, which is manage_options by default.
 * @return string The capability to actually use.
 */
function onemozilla_option_page_capability( $capability ) {
  return 'edit_theme_options';
}
add_filter( 'option_page_capability_onemozilla_options', 'onemozilla_option_page_capability' );

/**
 * Add our theme options page to the admin menu, including some help documentation.
 * This function is attached to the admin_menu action hook.
 */
function onemozilla_theme_options_add_page() {
  $theme_page = add_theme_page(
    __( 'Theme Options', 'onemozilla' ),   // Name of page
    __( 'Theme Options', 'onemozilla' ),   // Label in menu
    'edit_theme_options',                  // Capability required
    'theme_options',                       // Menu slug, used to uniquely identify the page
    'onemozilla_theme_options_render_page' // Function that renders the options page
  );

  if ( ! $theme_page )
    return;

  add_action( "load-$theme_page", 'onemozilla_theme_options_help' );
}
add_action( 'admin_menu', 'onemozilla_theme_options_add_page' );

function onemozilla_theme_options_help() {

  $help = '<p>' . __( 'Some themes provide customization options that are grouped together on a Theme Options screen. If you change themes, options may change or disappear, as they are theme-specific. Your current theme, One Mozilla, provides the following Theme Options:', 'onemozilla' ) . '</p>' .
      '<ol>' .
        '<li>' . __( '<strong>Color Scheme</strong>: You can choose from a few different color schemes: “Sand” (orange-tan background) is suitable for most Mozilla blogs. “Sky” (light blue/gray background) suitable for Firefox-related blogs. “Obsidian” is a light-on-dark scheme. “Stone” is the default scheme, a light, neutral gray.' , 'onemozilla' ) . '</li>' .
      '</ol>' .
      '<p>' . __( 'Remember to click “Save Changes” to save any changes you have made to the theme options.', 'onemozilla' ) . '</p>';

  $sidebar = '<p><strong>' . __( 'For more information:', 'onemozilla' ) . '</strong></p>' .
    '<p>' . __( '<a href="http://codex.wordpress.org/Appearance_Theme_Options_Screen" target="_blank">Documentation on Theme Options</a>', 'onemozilla' ) . '</p>' .
    '<p>' . __( '<a href="http://wordpress.org/support/" target="_blank">Support Forums</a>', 'onemozilla' ) . '</p>';

  $screen = get_current_screen();

  if ( method_exists( $screen, 'add_help_tab' ) ) {
    // WordPress 3.3
    $screen->add_help_tab( array(
      'title' => __( 'Overview', 'onemozilla' ),
      'id' => 'theme-options-help',
      'content' => $help,
      )
    );

    $screen->set_help_sidebar( $sidebar );
  } else {
    // WordPress 3.2
    add_contextual_help( $screen, $help . $sidebar );
  }
}

/**
 * Returns the default options for One Mozilla.
 */
function onemozilla_get_default_theme_options() {
  $default_theme_options = array(
    'color_scheme' => 'stone'
  );
  return apply_filters( 'onemozilla_default_theme_options', $default_theme_options );
}

/**
 * Returns an array of color schemes registered for One Mozilla.
 */
function onemozilla_color_schemes() {
  $color_scheme_options = array(
    'stone' => array(
      'value' => 'stone',
      'label' => __( 'Stone', 'onemozilla' ),
      'thumbnail' => get_template_directory_uri() . '/colors/stone/stone.jpg',
    ),
    'sand' => array(
      'value' => 'sand',
      'label' => __( 'Sand', 'onemozilla' ),
      'thumbnail' => get_template_directory_uri() . '/colors/sand/sand.jpg',
    ),
    'sky' => array(
      'value' => 'sky',
      'label' => __( 'Sky', 'onemozilla' ),
      'thumbnail' => get_template_directory_uri() . '/colors/sky/sky.jpg',
    ),
    'obsidian' => array(
      'value' => 'obsidian',
      'label' => __( 'Obsidian', 'onemozilla' ),
      'thumbnail' => get_template_directory_uri() . '/colors/obsidian/obsidian.jpg',
    ),
  );

  return apply_filters( 'onemozilla_color_schemes', $color_scheme_options );
}


/**
 * Returns the options array for One Mozilla.
 */
function onemozilla_get_theme_options() {
  return get_option( 'onemozilla_theme_options', onemozilla_get_default_theme_options() );
}

/**
 * Renders the Color Scheme setting field.
 */
function onemozilla_settings_field_color_scheme() {
  $options = onemozilla_get_theme_options();
  foreach ( onemozilla_color_schemes() as $scheme ) {
  ?>
  <div class="layout image-radio-option color-scheme">
  <label class="description">
    <input type="radio" name="onemozilla_theme_options[color_scheme]" value="<?php echo esc_attr( $scheme['value'] ); ?>" <?php checked( $options['color_scheme'], $scheme['value'] ); ?> />
    <span>
      <img src="<?php echo esc_url( $scheme['thumbnail'] ); ?>" width="140" height="140" alt="">
      <?php echo esc_attr( $scheme['label'] ); ?>
    </span>
  </label>
  </div>
  <?php
  }
}

/**
 * Returns the options array for One Mozilla.
 */
function onemozilla_theme_options_render_page() {
  ?>
  <div class="wrap">
    <?php screen_icon(); ?>
    <h2><?php printf( __( '%s Theme Options', 'onemozilla' ), get_current_theme() ); ?></h2>
    <?php settings_errors(); ?>

    <form method="post" action="options.php">
      <?php
        settings_fields( 'onemozilla_options' );
        do_settings_sections( 'theme_options' );
        submit_button();
      ?>
    </form>
  </div>
  <?php
}

/**
 * Sanitize and validate form input. Accepts an array, return a sanitized array.
 */
function onemozilla_theme_options_validate( $input ) {
  $output = $defaults = onemozilla_get_default_theme_options();

  // Color scheme must be in our array of color scheme options
  if ( isset( $input['color_scheme'] ) && array_key_exists( $input['color_scheme'], onemozilla_color_schemes() ) )
    $output['color_scheme'] = $input['color_scheme'];

  return apply_filters( 'onemozilla_theme_options_validate', $output, $input, $defaults );
}

/**
 * Enqueue the styles for the current color scheme.
 */
function onemozilla_enqueue_color_scheme() {
  $options = onemozilla_get_theme_options();
  $color_scheme = $options['color_scheme'];

  if ( 'sand' == $color_scheme )
    wp_enqueue_style( 'sand', get_template_directory_uri() . '/colors/sand/sand.css', array(), null );

  if ( 'sky' == $color_scheme )
    wp_enqueue_style( 'sky', get_template_directory_uri() . '/colors/sky/sky.css', array(), null );

  if ( 'stone' == $color_scheme )
    wp_enqueue_style( 'stone', get_template_directory_uri() . '/colors/stone/stone.css', array(), null );

  if ( 'obsidian' == $color_scheme )
    wp_enqueue_style( 'obsidian', get_template_directory_uri() . '/colors/obsidian/obsidian.css', array(), null );

  do_action( 'onemozilla_enqueue_color_scheme', $color_scheme );
}
add_action( 'wp_enqueue_scripts', 'onemozilla_enqueue_color_scheme' );

