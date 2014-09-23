<?php get_header(); ?>

<div id="content-main" class="main" role="main">

  <article class="page not-found">
    <header class="entry-header">
      <h1 class="entry-title"><?php _e( 'Well, this is embarrassing…', 'onemozilla' ); ?></h1>
    </header>
    <div class="entry-content">
      <h2><?php _e( 'We hate to say it, but we couldn’t find the page or file you’re looking for.', 'onemozilla' ); ?></h2>
      <p><?php _e( 'If you typed in the address, try double-checking the spelling.', 'onemozilla' ); ?></p>
      <p><?php _e( 'If you followed a link from somewhere, please let us know at <em>webmaster at mozilla dot com</em>. Be sure to tell us where you came from and what you were looking for, and we’ll do our best to fix it.', 'onemozilla' ); ?></p>
    </div>
  </article>

</div><!-- #content-main -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
