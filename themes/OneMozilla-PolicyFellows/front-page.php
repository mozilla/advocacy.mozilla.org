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

		  	<div><?php the_field('call_to_action'); ?></div>
	  	</section>

	  	<section id="action">
	  		<div id="inner">
		  		<div class="col">
		  			<?php the_field('take_action'); ?>
		  		</div>
		  		<div class="col">
		  			<img src="<?php echo get_template_directory_uri(); ?>/img/haveaheart.jpg" />
		  		</div>
	  		</div>
	  	</section>

    <?php endwhile; ?>


    <?php endif; ?>

</div><!-- /#page -->

<?php get_footer(); ?>
