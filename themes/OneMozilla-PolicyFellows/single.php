<?php get_header(); ?>

  <div id="content-main" class="main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>

      <?php get_template_part( 'content', 'single' ); ?>

      <?php comments_template( '', true ); ?>

    <?php endwhile; // end of the loop. ?>

  </div><!-- #content-main -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
