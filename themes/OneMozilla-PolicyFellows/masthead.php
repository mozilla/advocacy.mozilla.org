  <header id="masthead" role="banner" <?php if (get_header_image()) : ?>class="image"<?php endif; ?>>
    <hgroup>
    <?php if ( (is_front_page()) && ($paged < 1) ) : ?>
      <h1 id="site-title"><img src="<?php echo get_template_directory_uri(); ?>/img/mozilla-advocacy-w.png" /><!-- <?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>--></h1>
    <?php else : ?>
      <h1 id="site-title"><a href="<?php echo esc_url( home_url('/') ); ?>" rel="home" title="<?php _e('Go to the front page', 'onemozilla'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/mozilla-advocacy.png" /></a><!-- <a href="<?php echo esc_url( home_url('/') ); ?>" rel="home" title="<?php _e('Go to the front page', 'onemozilla'); ?>"><?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>--></a></h1>
    <?php endif; ?>
    <?php if (get_bloginfo('description','display')) : ?>
      <h2 id="site-description"><?php echo esc_attr( get_bloginfo('description', 'display') ); ?></h2>
    <?php endif; ?>
    </hgroup>
    <a href="http://www.mozilla.org/" id="tabzilla">Mozilla</a>
  </header><!-- #masthead -->
