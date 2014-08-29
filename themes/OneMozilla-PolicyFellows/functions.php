<?php
if ( ! function_exists( 'onemozilla_setup' ) ):
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * To override onemozilla_setup() in a child theme, add your own onemozilla_setup to your child theme's
 * functions.php file.
 *
 * @uses load_theme_textdomain() For translation/localization support.
 * @uses add_editor_style() To style the visual editor.
 * @uses add_theme_support() To add support for post thumbnails.
 * @uses register_nav_menus() To add support for navigation menus.
 * @uses add_custom_background() To add support for a custom background.
 * @uses add_custom_image_header() To add support for a custom header.
 * @uses register_default_headers() To register the default custom header images provided with the theme.
 * @uses set_post_thumbnail_size() To set a custom post thumbnail size.
 *
 */
function onemozilla_setup() {

  /* Make the theme available for translation.
   * Translations can be added to the /languages/ directory.
   */
  load_theme_textdomain( 'onemozilla', get_template_directory() . '/languages' );

  $locale = get_locale();
  $locale_file = get_template_directory() . "/languages/$locale.php";
  if ( is_readable( $locale_file ) )
    require_once( $locale_file );

  // Load up our theme options page and related code.
  require( get_template_directory() . '/inc/theme-options.php' );

  // This theme uses wp_nav_menu() in one location.
  register_nav_menu( 'primary', __( 'Primary Menu', 'onemozilla' ) );

  // This theme uses Featured Images (also known as post thumbnails)
  add_theme_support( 'post-thumbnails' );

  // Set default image sizes
  update_option('thumbnail_size_w', 160);
  update_option('thumbnail_size_h', 160);
  update_option('medium_size_w', 252);
  update_option('medium_size_h', 0);
  update_option('large_size_w', 600);
  update_option('large_size_h', 0);

  // The height and width of your custom header.
  // Add a filter to onemozilla_header_image_width and onemozilla_header_image_height to change these values.
  define( 'HEADER_IMAGE_WIDTH', apply_filters( 'onemozilla_header_image_width', 340 ) );
  define( 'HEADER_IMAGE_HEIGHT', apply_filters( 'onemozilla_header_image_height', 240 ) );

  // Add a way for the custom header to be styled in the admin panel that controls
  // custom headers. See onemozilla_admin_header_style(), below.
  add_custom_image_header( 'onemozilla_header_style', 'onemozilla_admin_header_style', 'onemozilla_admin_header_image' );

  // Disable the header text and color options
  define( 'NO_HEADER_TEXT', true );

  // ... and thus ends the changeable header business.

  // Default custom headers packaged with the theme. %s is a placeholder for the theme template directory URI.
  register_default_headers( array(
    'firefox' => array(
      'url' => '%s/img/headers/firefox.png',
      'thumbnail_url' => '%s/img/headers/firefox-thumbnail.png',
      /* L10N: header image description */
      'description' => __( 'Firefox Logo', 'onemozilla' )
    )
   )
  );

  // We've moved the share_posts and hide_authors out of theme options but we'll bring over those settings (if they exist)
  $options = get_option( 'onemozilla_theme_options' );

  // Stash the values in variables
  $color_scheme = $options['color_scheme'];
  $share_posts = $options['share_posts'];
  $hide_authors = $options['hide_author'];

  if ( $options['share_posts'] && (get_option('onemozilla_share_posts') == null) ) {
    update_option('onemozilla_share_posts', $share_posts);
  }
  if ( $options['hide_author'] && (get_option('onemozilla_hide_authors') == null) ) {
    update_option('onemozilla_hide_authors', $hide_authors);
  }
  // Remove the old values from theme_options, we're only keeping the color scheme (if set)
  if ( $options['color_scheme'] ) {
    update_option('onemozilla_theme_options', array('color_scheme' => $color_scheme));
  }
  else {
    update_option('onemozilla_theme_options', array('color_scheme' => 'stone'));
  }

}
endif; // onemozilla_setup

/*********
 * Tell WordPress to run onemozilla_setup() when the 'after_setup_theme' hook is run.
 */
add_action( 'after_setup_theme', 'onemozilla_setup' );

/*********
 * Register and define the Social Sharing and Hide Authors settings
 */
function onemozilla_admin_init(){
  register_setting(
    'reading',
    'onemozilla_share_posts'
  );
  add_settings_field(
    'share_posts',
    __( 'Social sharing', 'onemozilla' ),
    'onemozilla_settings_field_share_posts',
    'reading',
    'default'
  );

  register_setting(
    'reading',
    'onemozilla_hide_authors'
  );
  add_settings_field(
    'hide_authors',
    __( 'Hide post authors', 'onemozilla' ),
    'onemozilla_settings_field_hide_authors',
    'reading',
    'default'
  );
}
add_action('admin_init', 'onemozilla_admin_init');

/**
 * Renders the Add Sharing setting field.
 */
function onemozilla_settings_field_share_posts() { ?>
	<div class="layout share-posts">
	<label>
		<input type="checkbox" id="onemozilla_share_posts" name="onemozilla_share_posts" value="1" <?php checked( '1', get_option('onemozilla_share_posts') ); ?> />
		<span>
			<?php _e('Add social sharing buttons to posts and pages', 'onemozilla'); ?>
		</span>
		<p class="description"><?php _e('Adds buttons for Facebook, Twitter, and Google+.', 'onemozilla' ); ?></p>
	</label>
	</div>
	<?php
}

/**
 * Renders the Show Author setting field.
 */
function onemozilla_settings_field_hide_authors() { ?>
	<div class="layout hide-authors">
	<label>
		<input type="checkbox" name="onemozilla_hide_authors" value="1" <?php checked( '1', get_option('onemozilla_hide_authors') ); ?> />
		<span>
			<?php _e('Hide post authors', 'onemozilla'); ?>
		</span>
		<p class="description"><?php _e('This removes the author byline and author bio from individual posts.', 'onemozilla' ); ?></p>
	</label>
	</div>
	<?php
}


/*********
 * Adds classes to the array of post classes. We'll use these as style hooks for post headers.
 */
function onemozilla_post_classes( $classes ) {
  $comment_count = get_comments_number($post->ID);

  if ( get_option('onemozilla_hide_authors') != 1 ) {
    $classes[] = 'show-author';
  }
  elseif ( get_option('onemozilla_hide_authors') == 1 ) {
    $classes[] = 'no-author';
  }
  if ( comments_open($post->ID) || pings_open($post->ID) || ($comment_count > 0) ) {
    $classes[] = 'show-comments';
  }
  elseif ( !comments_open($post->ID) && !pings_open($post->ID) && ($comment_count == 0) ) {
    $classes[] = 'no-comments';
  }
  if ( get_option('onemozilla_share_posts') == 1 ) {
    $classes[] = 'show-sharing';
  }
  return $classes;
}
add_filter( 'post_class', 'onemozilla_post_classes' );


/*********
* Use auto-excerpts for meta description if hand-crafted exerpt is missing
*/
function fc_meta_desc() {
  $post_desc_length  = 25; // auto-excerpt length in number of words

  global $cat, $cache_categories, $wp_query, $wp_version;
  if(is_single() || is_page()) {
    $post = $wp_query->post;
    $post_custom = get_post_custom($post->ID);

    if(!empty($post->post_excerpt)) {
      $text = $post->post_excerpt;
    } else {
      $text = $post->post_content;
    }
    $text = str_replace(array("\r\n", "\r", "\n", "  "), " ", $text);
    $text = str_replace(array("\""), "", $text);
    $text = trim(strip_tags($text));
    $text = explode(' ', $text);
    if(count($text) > $post_desc_length) {
      $l = $post_desc_length;
      $ellipsis = '...';
    } else {
      $l = count($text);
      $ellipsis = '';
    }
    $description = '';
    for ($i=0; $i<$l; $i++)
      $description .= $text[$i] . ' ';

    $description .= $ellipsis;
  }
  elseif(is_category()) {
    $category = $wp_query->get_queried_object();
    if (!empty($category->category_description)) {
      $description = trim(strip_tags($category->category_description));
    } else {
      $description = single_cat_title('Articles posted in ');
    }
  }
  else {
    $description = trim(strip_tags(get_bloginfo('description')));
  }

  if($description) {
    echo $description;
  }
}

/*********
* Disable the embedded styles when using [gallery] shortcode
*/
add_filter( 'use_default_gallery_style', '__return_false' );

/*********
* Disable comments on Pages by default
*
* This is a hack. WP doesn't currently make it possible to enable comments
* by default for Posts while disabling them for Pages; it's either comments on
* all or comments on none. But in most cases authors will prefer to turn off
* comments for Pages. This just unchecks those checkboxes automatically so authors
* don't need to remember. Comments can still be enabled for Pages on an individual
* basis.
*/
function fc_page_comments_off() {
  if(isset($_REQUEST['post_type'])) {
    if ( $_REQUEST['post_type'] == "page" ) {
      echo '<script>
          if (document.post) {
            var opt_comment = document.post.comment_status;
            var opt_ping = document.post.ping_status;
            if (the_comment && the_ping) {
              the_comment.checked = false;
              the_ping.checked = false;
            }
          }
      </script>';
    }
  }
}
add_action ( 'admin_footer', 'fc_page_comments_off' );

/*********
* Prints the page number currently being browsed, with a pipe before it.
* Used in header.php to add the page number to the <title>.
*/
if ( ! function_exists( 'fc_page_number' ) ) :
function fc_page_number() {
  global $paged; // Contains page number.
  if ( $paged >= 2 )
    echo ' | ' . sprintf( __( 'Page %s' , 'wordpress' ), $paged );
}
endif;

/*********
* Allow uploading some additional MIME types
*/
function fc_add_mimes( $mimes=array() ) {
  $mimes['webm'] = 'video/webm';
  $mimes['ogv'] = 'video/ogg';
  $mimes['mp4'] = 'video/mp4';
  $mimes['m4v'] = 'video/mp4';
  $mimes['flv'] = 'video/x-flv';
  return $mimes;
}
add_filter('upload_mimes', 'fc_add_mimes');

/*********
* Load various JavaScripts
*/
function onemozilla_load_scripts() {
  // Load the default jQuery
  wp_enqueue_script('jquery');

  // Register and load the socialsharing script
  wp_register_script( 'socialshare', get_template_directory_uri() . '/js/socialshare.min.js' );
  if ( (get_option('onemozilla_share_posts') == 1) && is_singular() ) {
    wp_enqueue_script( 'socialshare' );
  }

  // Load the threaded comment reply script
  if ( get_option('thread_comments') && is_singular() ) {
    wp_enqueue_script( 'comment-reply' );
  }

  // Check required fields on comment form
  wp_register_script( 'checkcomments', get_template_directory_uri() . '/js/fc-checkcomment.js' );
  if ( get_option('require_name_email') && is_singular() ) {
    wp_enqueue_script('checkcomments');
  }
}
add_action( 'wp_enqueue_scripts', 'onemozilla_load_scripts' );

/*********
* Remove WP version from head (helps us evade spammers/hackers)
*/
remove_action('wp_head', 'wp_generator');

/*********
* Catch spambots with a honeypot field in the comment form.
* It's hidden from view with CSS so most humans will leave it blank, but robots will kindly fill it in to alert us to their presence.
* The field has an innucuous name -- 'age' in this case -- likely to be autofilled by a robot.
*/
function fc_honeypot( array $data ){
  if( !isset($_POST['comment']) && !isset($_POST['content'])) { die("No Direct Access"); }  // Make sure the form has actually been submitted

  if($_POST['age']) {  // If the Honeypot field has been filled in
    $message = _e('Sorry, you appear to be a spamming robot because you filled in the hidden spam trap field. To show you are not a spammer, submit your comment again and leave the field blank.', 'onemozilla');
    $title = 'Spam Prevention';
    $args = array('response' => 200);
    wp_die( $message, $title, $args );
    exit(0);
  } else {
	   return $data;
	}
}
add_filter('preprocess_comment','fc_honeypot');

/*********
 * Removes the default styles that are packaged with the Recent Comments widget.
 */
function onemozilla_remove_recent_comments_style() {
	add_filter( 'show_recent_comments_widget_style', '__return_false' );
}
add_action( 'widgets_init', 'onemozilla_remove_recent_comments_style' );

/*********
* Customize the password protected form
*/
function fc_password_form() {
  global $post;
  $label = 'pwbox-'.(empty($post->ID) ? rand() : $post->ID);
  $output = '<form class="pwform" action="' . get_option('siteurl') . '/wp-pass.php" method="post">
            <p>'.__("This post is password protected. To view it, please enter the password.", "onemozilla").'</p>
            <ol><li><label for="'.$label.'">'.__("Password", "onemozilla").'</label><input name="post_password" id="'.$label.'" type="password" size="20" /></li><li><button type="submit" name="Submit">'.esc_attr__("Submit").'</button></li></ol>
            </form>';
return $output;
}
add_filter('the_password_form', 'fc_password_form');

if ( ! function_exists( 'onemozilla_header_style' ) ) :
/**
 * Styles the header image on the blog
 */
function onemozilla_header_style() {
  if (get_header_image()) :
?>
  <style type="text/css">
    #masthead { background-image: url(<?php header_image(); ?>); }
  </style>
<?php
  endif;
}
endif; // onemozilla_header_style

if ( ! function_exists( 'onemozilla_admin_header_style' ) ) :
/**
 * Styles the header image displayed on the Appearance > Header admin panel.
 * Referenced via add_custom_image_header() in onemozilla_setup().
 */
function onemozilla_admin_header_style() {
if (function_exists('onemozilla_get_theme_options')) { // fail gracefully if we can't get theme options
  $options = onemozilla_get_theme_options(); // get the theme options
}
$header_image = get_header_image();
?>
  <style type="text/css">
  @import url(<?php echo get_template_directory_uri() . '/colors/'.$options['color_scheme'].'/'.$options['color_scheme'].'-header-preview.css'; ?>);
  #header-preview .header {
    background: url("<?php echo esc_url( $header_image ); ?>") right top no-repeat;
  }
  </style>
<?php
}
endif; // onemozilla_admin_header_style


if ( ! function_exists( 'onemozilla_admin_header_image' ) ) :
/**
 * Custom header image markup displayed on the Appearance > Header admin panel.
 * Referenced via add_custom_image_header() in onemozilla_setup().
 */
function onemozilla_admin_header_image() { ?>
  <div id="header-preview">
   <div class="header">
    <h1 id="site-title"><?php bloginfo( 'name' ); ?></h1>
    <h2 id="site-description"><?php bloginfo( 'description' ); ?></h2>
    <span id="faux-tabzilla">Mozilla</span>
   </div>
  </div>
<?php }
endif; // onemozilla_admin_header_image

/**
 * Enable featured posts
 */
function fc_featured_meta_box($post){
  $featured = get_post_meta($post->ID, '_fc_featuredpost', true);
  ?>
  <label class="selectit" for="fc_featuredpost">
  <input type="checkbox" name="_fc_featuredpost" id="fc_featuredpost" value="1" <?php if ($featured) { ?>checked<?php } ?> />
  <?php _e('Make this a featured post?', 'onemozilla'); ?></label>
<?php
}

function register_fc_featuredpost(){
  add_meta_box('meta-featured-post', __('Featured Post'), 'fc_featured_meta_box', 'post', 'side', 'low');
}
add_action('admin_init', 'register_fc_featuredpost', 1);

function save_fc_featuredpost() {
  global $post;
  update_post_meta($post->ID, "_fc_featuredpost", $_POST["_fc_featuredpost"]);
}
add_action('save_post', 'save_fc_featuredpost');


/**
 * Enable a few more buttons in the visual editor
 */
function add_more_buttons($buttons) {
 $buttons[] = 'hr';
 $buttons[] = 'del';
 $buttons[] = 'sub';
 $buttons[] = 'sup';
 $buttons[] = 'cleanup';
 return $buttons;
}
add_filter("mce_buttons_3", "add_more_buttons");


/**
 * Sets the post excerpt length to 40 words.
 *
 * To override this length in a child theme, remove the filter and add your own
 * function tied to the excerpt_length filter hook.
 */
function onemozilla_excerpt_length( $length ) {
  return 40;
}
add_filter( 'excerpt_length', 'onemozilla_excerpt_length' );


/**
 * Returns a "Continue Reading" link for excerpts
 */
function onemozilla_continue_reading_link() {
  return ' <a class="go" href="'. esc_url( get_permalink() ) . '">' . __( 'Continue reading', 'onemozilla' ) . '</a>';
}


/**
 * Replaces "[...]" (appended to automatically generated excerpts) with an ellipsis and onemozilla_continue_reading_link().
 *
 * To override this in a child theme, remove the filter and add your own
 * function tied to the excerpt_more filter hook.
 */
function onemozilla_auto_excerpt_more( $more ) {
  return ' &hellip;' . onemozilla_continue_reading_link();
}
add_filter( 'excerpt_more', 'onemozilla_auto_excerpt_more' );


/**
 * Adds a pretty "Continue Reading" link to custom post excerpts.
 *
 * To override this link in a child theme, remove the filter and add your own
 * function tied to the get_the_excerpt filter hook.
 */
function onemozilla_custom_excerpt_more( $output ) {
  if ( has_excerpt() && ! is_attachment() ) {
    $output .= onemozilla_continue_reading_link();
  }
  return $output;
}
add_filter( 'get_the_excerpt', 'onemozilla_custom_excerpt_more' );


/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 */
function onemozilla_page_menu_args( $args ) {
  $args['show_home'] = true;
  return $args;
}
add_filter( 'wp_page_menu_args', 'onemozilla_page_menu_args' );


/**
 * Register the widgetized sidebar.
 */
function onemozilla_widgets_init() {

  register_sidebar( array(
    'name' => __( 'Sidebar', 'onemozilla' ),
    'id' => 'sidebar',
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget' => "</aside>",
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ) );

  register_sidebar( array(
    'name' => __( 'Footer', 'onemozilla' ),
    'id' => 'footer',
    'before_widget' => '<div class="footer-widget">',
    'after_widget' => '</div>',
    'before_title' => '<h3 class="widget-title">',
    'after_title' => '</h3>',
  ) );

}
add_action( 'widgets_init', 'onemozilla_widgets_init' );


/**********
* Determine if the page is paged and should show posts navigation
*/
function fc_show_posts_nav() {
 global $wp_query;
 return ($wp_query->max_num_pages > 1) ? TRUE : FALSE;
}

/*********
* Determine if a previous post exists (i.e. that this isn't the first one)
*
* @param bool $in_same_cat Optional. Whether link should be in same category.
* @param string $excluded_categories Optional. Excluded categories IDs.
*/
function fc_previous_post($in_same_cat = false, $excluded_categories = '') {
  if ( is_attachment() )
    $post = & get_post($GLOBALS['post']->post_parent);
  else
    $post = get_previous_post($in_same_cat, $excluded_categories);
  if ( !$post )
    return false;
  else
    return true;
}

/*********
* Determine if a next post exists (i.e. that this isn't the last post)
*
* @param bool $in_same_cat Optional. Whether link should be in same category.
* @param string $excluded_categories Optional. Excluded categories IDs.
*/
function fc_next_post($in_same_cat = false, $excluded_categories = '') {
  if ( is_attachment() )
    $post = & get_post($GLOBALS['post']->post_parent);
  else
    $post = get_next_post($in_same_cat, $excluded_categories);
  if ( !$post )
    return false;
  else
    return true;
}

/*********
* Customize the login screen
*/
function fc_custom_login() {
  echo '<link rel="stylesheet" type="text/css" href="' . get_bloginfo('template_directory') . '/css/login.css">';
}
add_action('login_head', 'fc_custom_login');


/*********
* Style the visual editor to match the theme styles
* onemozilla_get_theme_options() is defined in /inc/theme-options.php
* If you add new color schemes, remember to include an editor style sheet!
* Otherwise this will return a 404 and you'll only get default styling.
*/
function fc_editor_style($url) {
  if ( !empty($url) ) {
    $url .= ',';
  }
  if (function_exists('onemozilla_get_theme_options')) { // fail gracefully if we can't get theme options
    $options = onemozilla_get_theme_options(); // get the theme options
  }

  if ($options['color_scheme']) { // if we have a color scheme, use its editor stylesheet
    $url .= trailingslashit( get_template_directory_uri() ) . 'colors/'.$options['color_scheme'].'/'.$options['color_scheme'].'-editor-style.css';
  }
  else { // fall back to the default
    $url .= trailingslashit( get_template_directory_uri() ) . 'colors/stone/stone-editor-style.css';
  }
  return $url;
}
add_filter('mce_css', 'fc_editor_style');


/*********
* Comment Template
*/
if ( ! function_exists( 'onemozilla_comment' ) ) :
function onemozilla_comment($comment, $args, $depth) {
  $GLOBALS['comment'] = $comment;
  $comment_type = get_comment_type();
  $date_format = get_option("date_format");
  $time_format = get_option("time_format");
?>

 <li id="comment-<?php comment_ID(); ?>" <?php comment_class('hentry'); ?>>
  <?php if ( $comment_type == 'trackback' ) : ?>
    <h3 class="entry-title"><?php _e( 'Trackback from ', 'onemozilla' ); ?> <cite><?php esc_html(comment_author_link()); ?></cite>
      <?php /* L10N: Trackback headings read "Trackback from <Site> on <Date> at <Time>:" */ ?>
      <span class="comment-meta"><?php _e('on', 'onemozilla'); ?>
      <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>" rel="bookmark" title=" <?php _e('Permanent link to this comment by ','onemozilla'); comment_author(); ?>">
      <time class="published" datetime="<?php comment_date('Y-m-d'); ?>" title="<?php comment_date('Y-m-d'); ?>">
      <?php /* L10N: Trackback headings read "Trackback from <Site> on <Date> at <Time>:" */ ?>
      <?php printf( __('%1$s at %2$s','onemozilla'), get_comment_date($date_format), get_comment_time($time_format) ); ?></time></a>:</span></time></a>:</span>
    </h3>
  <?php elseif ( $comment_type == 'pingback' ) : ?>
    <h3 class="entry-title"><?php _e( 'Pingback from ', 'onemozilla' ); ?> <cite><?php esc_html(comment_author_link()); ?></cite>
      <?php /* L10N: Pingback headings read "Pingback from <Site> on <Date> at <Time>:" */ ?>
      <span class="comment-meta"><?php _e('on', 'onemozilla'); ?>
      <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>" rel="bookmark" title="<?php _e('Permanent link to this comment by ','onemozilla'); comment_author(); ?>">
      <time class="published" datetime="<?php comment_date('Y-m-d'); ?>" title="<?php comment_date('Y-m-d'); ?>">
      <?php /* L10N: Pingback headings read "Pingback from <Site> on <Date> at <Time>:" */ ?>
      <?php printf( __('%1$s at %2$s','onemozilla'), get_comment_date($date_format), get_comment_time($time_format) ); ?></time></a>:</span></time></a>:</span>
    </h3>
  <?php else : ?>
    <?php if ( ( $comment->comment_author_url != "http://" ) && ( $comment->comment_author_url != "" ) ) : // if author has a link ?>
     <h3 class="entry-title vcard">
       <a href="<?php comment_author_url(); ?>" class="url" rel="nofollow external" title="<?php esc_html(comment_author_url()); ?>">
         <cite class="author fn"><?php esc_html(comment_author()); ?></cite>
         <?php if (function_exists('get_avatar')) : echo ('<span class="photo">'.get_avatar( $comment, 48 ).'</span>'); endif; ?>
       </a>
       <span class="comment-meta">
       <?php /* L10N: Comment headings read "<Name> wrote on <Date> at <Time>:" */ ?>
       <?php _e('wrote on', 'onemozilla'); ?>
        <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>" rel="bookmark" title="<?php _e('Permanent link to this comment by ','onemozilla'); comment_author(); ?>">
        <time class="published" datetime="<?php comment_date('Y-m-d'); ?>" title="<?php comment_date('Y-m-d'); ?>">
        <?php /* L10N: Comment headings read "<Name> wrote on <Date> at <Time>:" */ ?>
        <?php printf( __('%1$s at %2$s','onemozilla'), get_comment_date($date_format), get_comment_time($time_format) ); ?></time></a>:</span></time></a>:</span>
     </h3>
    <?php else : // author has no link ?>
      <h3 class="entry-title vcard">
        <cite class="author fn"><?php esc_html(comment_author()); ?></cite>
        <?php if (function_exists('get_avatar')) : echo ('<span class="photo">'.get_avatar( $comment, 48 ).'</span>'); endif; ?>
        <span class="comment-meta"><?php _e('wrote on', 'onemozilla'); ?>
        <a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>" rel="bookmark" title="<?php _e('Permanent link to this comment by ','onemozilla'); comment_author(); ?>">
        <time class="published" datetime="<?php comment_date('Y-m-d'); ?>" title="<?php comment_date('Y-m-d'); ?>">
        <?php /* L10N: Comment headings read "<Name> wrote on <Date> at <Time>:" */ ?>
        <?php printf( __('%1$s at %2$s','onemozilla'), get_comment_date($date_format), get_comment_time($time_format) ); ?></time></a>:</span>
      </h3>
    <?php endif; ?>
  <?php endif; ?>

    <?php if ($comment->comment_approved == '0') : ?>
      <p class="mod"><strong><?php _e('Your comment is awaiting moderation.', 'onemozilla'); ?></strong></p>
    <?php endif; ?>

    <blockquote class="entry-content">
      <?php esc_html(comment_text()); ?>
    </blockquote>

  <?php if ( (get_option('thread_comments') == true) || (current_user_can('edit_post', $comment->comment_post_ID)) ) : ?>
    <p class="comment-util"><?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?> <?php if ( current_user_can('edit_post', $comment->comment_post_ID) ) : ?><span class="edit"><?php edit_comment_link(__('Edit Comment','onemozilla'),'',''); ?></span><?php endif; ?></p>
  <?php endif; ?>
<?php
} /* end onemozilla_comment */
endif;

/*********
* Featured posts widget for sidebar
*/
class moz_widget_featuredPosts extends WP_Widget {
  function widget($args,$instance) {
    $args['title'] = $instance['title'];
    moz_featuredPosts($args);
  }

  function moz_widget_featuredPosts() {
    $widget_options = array(
      'description'=>__('This widget shows the three most recent featured posts.')
    );
    $this->WP_Widget('moz_widget_featuredPosts','Featured Posts',$widget_options);
  }

  function update($new_instance, $old_instance) {
    return $new_instance;
  }

  function form($instance) {
    $title = esc_attr($instance['title']);
  ?>
  <p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'wordpress'); ?> <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo $title; ?>" /></label></p>
  <?php
  }
}

function moz_featuredPosts($args) {
  $title = $args['title'];
  if ( !is_front_page() ) :
    /* Set up a custom loop for the three most recent featured posts */
    $featured = new WP_Query( array('posts_per_page' => 3, 'meta_key' => '_fc_featuredpost', 'meta_value' => 1) );
    if( $featured->have_posts() ) : ?>
    <aside class="widget featured-posts">
    <?php if ($title) : ?>
      <h3 class="widget-title"><?php echo $title; ?></h3>
    <?php endif; ?>
      <ul class="hfeed">
    <?php while($featured->have_posts()): $featured->the_post(); ?>
        <li id="feature-<?php the_ID(); ?>" class="hentry feature">
          <h4 class="entry-title entry-summary">
            <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permanent link to “%s”', 'onemozilla' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">
              <span class="feature-img">
              <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail(array(115,115), array('alt' => "", 'title' => "")); ?>
              <?php else : ?>
                <img src="<?php echo get_template_directory_uri(); ?>/img/featured.png" alt="" width="115" height="115" class="wp-post-image">
              <?php endif; ?>
              </span>
              <?php the_title(); ?>
            </a>
          </h4>
        </li>
    <?php endwhile; ?>
      </ul>
    </aside>
<?php else: endif;
  endif;
}

function featuredposts_widget_init() {
  register_widget("moz_widget_featuredPosts");
}
add_action("widgets_init","featuredposts_widget_init");

//Page Slug Body Class
function add_slug_body_class( $classes ) {
global $post;
if ( isset( $post ) ) {
$classes[] = $post->post_type . '-' . $post->post_name;
}
return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );

?>
