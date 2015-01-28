<?php
// Don't allow direct access to the theme
if(!defined('DB_NAME')) {
  exit('Direct template access is not allowed');
}

get_header(); ?>

  <div id="content-main" class="main" role="main">

  <?php if ( have_posts() ) : ?>

    <?php /* Start the Loop */ ?>
    <?php while ( have_posts() ) : the_post(); ?>

      <section id="intro">
        <?php the_content(); ?>
      </section>

  </div><!-- #content-main -->

    </main><!-- #content -->
</div>

      <section id="wide">

        <div id="wide-container"><?php the_field('call_to_action'); ?></div>
      </section>

      <section id="action">
        <div id="inner">
          <?php the_field('take_action_header'); ?>
          <div class="col">
            <?php the_field('take_action_col_1'); ?>
          </div>
          <div class="col">
            <?php the_field('take_action_col_2'); ?>
          </div>
        </div>
      </section>

    <?php endwhile; ?>


    <?php endif; ?>

</div><!-- /#page -->

<?php get_footer(); ?>
