  <header id="masthead" role="banner" <?php if (get_header_image()) : ?>class="image"<?php endif; ?>>
    <a href="http://www.mozilla.org/" id="tabzilla">Mozilla</a>
    <?php wp_nav_menu( array( 'theme_location' => 'primary', 'container' => 'nav', 'container_id' => 'nav-primary', 'container_class' => 'nav-full', 'fallback_cb' => 'false', ) ); ?>
    <hgroup>
    <h1 id="site-title"><a href="<?php echo esc_url( home_url('/') ); ?>" rel="home" title="<?php _e('Go to the front page', 'onemozilla'); ?>"><img src="<?php echo get_template_directory_uri(); ?>/img/mozilla-advocacy-w.png" /></a><!-- <a href="<?php echo esc_url( home_url('/') ); ?>" rel="home" title="<?php _e('Go to the front page', 'onemozilla'); ?>"><?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>--></a></h1>
    <?php if (get_bloginfo('description','display')) : ?>
      <h2 id="site-description"><?php echo esc_attr( get_bloginfo('description', 'display') ); ?></h2>
    <?php endif; ?>
    </hgroup>
  </header><!-- #masthead -->
