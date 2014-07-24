<?php get_header(); ?>

    <div id="content-main" class="main" role="main">

      <?php while ( have_posts() ) : the_post(); ?>

        <?php get_template_part( 'content', 'page' ); ?>

        <?php comments_template( '', true ); ?>

      <?php endwhile; // end of the loop. ?>

    </div><!-- #content-main -->

  </main><!-- #content -->
</div></div><!-- /.wrap /#page -->
<?php get_footer(); ?>
