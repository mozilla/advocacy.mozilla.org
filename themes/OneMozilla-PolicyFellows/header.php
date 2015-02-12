<?php $theme_options = onemozilla_get_theme_options(); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> id="mozilla-blog">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- For sharing & search engines -->
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://advocacy.mozilla.org/wp-content/uploads/2014/09/logo-og.png" />
  <meta property="og:image:width" content="1400" />
  <meta property="og:image:height" content="1400" />
  <meta property="og:site_name" content="<?php bloginfo('name'); ?>">
  <meta property="og:determiner" content="" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:title" content="Mozilla's Policy & Advocacy Program - <?php if (is_singular()) : single_post_title(); else : bloginfo('name'); endif; ?>">
  <meta property="og:url" content="<?php if (is_singular()) : the_permalink(); else : bloginfo('url'); endif; ?>">
  <meta property="description" content="We are building a global movement to protect the free and open Web." />
  <meta property="og:description" content="We are building a global movement to protect the free and open Web.">
  <!-- <meta property="og:description" content="<?php fc_meta_desc(); ?>"> -->
  <link rel="canonical" href="https://advocacy.mozilla.org" />
  <!-- /sharing -->

<?php if (is_singular() && has_post_thumbnail()) : ?>
  <?php $thumb = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'thumbnail' ); ?>
  <meta property="og:image" content="<?php echo $thumb['0']; ?>">
<?php elseif (get_header_image()) : ?>
  <meta property="og:image" content="<?php echo get_header_image(); ?>">
<?php endif; ?>

  <meta name="title" content="<?php if (is_singular()) : single_post_title(); echo ' | '; endif; bloginfo('name'); ?>">
  <meta name="description" content="<?php fc_meta_desc(); ?>">

  <meta name="Rating" content="General">
  <!--[if IE]>
  <meta name="MSSmartTagsPreventParsing" content="true">
  <meta http-equiv="imagetoolbar" content="no">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <script src="<?php bloginfo('stylesheet_directory'); ?>/js/html5.js"></script>
  <![endif]-->

  <link rel="copyright" href="#colophon">
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="shortcut icon" type="image/ico" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
  <?php wp_head(); ?>
  <?php if ( get_option('onemozilla_share_posts') == 1 ) : ?>
  <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/css/socialshare.css">
  <?php endif; ?>
  <link rel="stylesheet" type="text/css" media="screen,projection" href="<?php bloginfo('stylesheet_url'); ?>">
  <link rel="stylesheet" href="//code.cdn.mozilla.net/fonts/fira.css">
  <link rel="stylesheet" type="text/css" media="all" href="https://www.mozilla.org/tabzilla/media/css/tabzilla.css">
  <link rel="stylesheet" type="text/css" media="print" href="<?php echo get_template_directory_uri(); ?>/css/print.css">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
  <!--[if lte IE 7]><link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/css/ie7.css"><![endif]-->
  <link href='//fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'>
  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>">
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
  <script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.validate.min.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-49796218-9', 'auto');
    ga('send', 'pageview');

  </script>
  <title><?php
    if ( is_single() ) { single_post_title(); echo ' | '; bloginfo('name'); }
    elseif ( is_home() || is_front_page() ) { bloginfo('name'); if (get_bloginfo('description','display')) { echo ' | '. get_bloginfo('description','display'); } fc_page_number(); }
    elseif ( is_page() ) { single_post_title(''); echo ' | '; bloginfo('name'); }
    elseif ( is_search() ) { printf( __('Search results for “%s”', 'onemozilla'), esc_html( $s ) ); fc_page_number(); echo ' | '; bloginfo('name'); }
    elseif ( is_day() ) { $post = $posts[0]; printf(__('Posts from %s', 'onemozilla'), get_the_date()); echo ' | '; bloginfo('name'); fc_page_number(); }
    elseif ( is_month() ) { $post = $posts[0]; printf(__('Posts from %s', 'onemozilla'), get_the_date('F, Y')); echo ' | '; bloginfo('name'); fc_page_number(); }
    elseif ( is_year() ) { $post = $posts[0]; printf(__('Posts from %s', 'onemozilla'), get_the_date('Y')); echo ' | '; bloginfo('name'); fc_page_number(); }
    elseif ( is_404() ) { _e('Not Found', 'onemozilla'); echo ' | '; bloginfo('name'); }
    else { wp_title(''); echo ' | '; bloginfo('name'); fc_page_number(); }
  ?></title>

  <?php if ( is_singular() && get_option( 'thread_comments' ) ) { wp_enqueue_script( 'comment-reply' ); } ?>
  <script>
$(document).ready(function(){
  $("#navtoggle").click(function(){
    $("#mobilenav").toggle(500);
  });
});
</script>
</head>

<body <?php body_class($theme_options[color_scheme]); ?>>
<div id="page"><div class="wrap">
  <?php if ( !is_page("coming-soon") ) : ?>
    <nav id="nav-access">
      <ul role="navigation">
        <li><a href="#content-main" tabindex="1"><?php _e( 'Skip to main content', 'onemozilla' ); ?></a></li>
        <li><a href="#content-sub" tabindex="2"><?php _e( 'Skip to sidebar', 'onemozilla' ); ?></a></li>
      <?php if ( is_active_widget( false, false, 'search', true ) || ( !is_active_sidebar('sidebar') ) ) : ?>
        <li><a href="#search" tabindex="3"><?php _e( 'Skip to blog search', 'onemozilla' ); ?></a></li>
      <?php endif; ?>
      </ul>
    </nav>

    <?php get_template_part( 'masthead' ); ?>

    <div id="nav-primary-sub">
    </div>

    <div id="mobile-nav-container">
    	<a href="#" id="navtoggle"><i class="fa fa-bars"></i></a>
  	  <div id="mobilenav"><?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => 'nav', 'container_id' => 'nav-primary', 'fallback_cb' => 'false', ) ); ?>
  	  </div>
    </div>
  <?php endif; ?>
  <main id="content">
