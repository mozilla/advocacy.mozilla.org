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
    
	    <section id="cta">
	  		<?php the_field('call_to_action'); ?>
	  		<!-- <div id="button"><a href="<?php the_field('application_url'); ?>" class="button"><?php the_field('apply_now'); ?></a></div> -->
	  	</section>
	  	
  </div><!-- #content-main -->
  
    </main><!-- #content -->
</div></div><!-- /.wrap /#page -->

	  	<section id="wide">

		  	<div><?php the_content(); ?></div>
		      <aside>
		      	<?php the_field('aside'); ?>
		      </aside>
      
	  	</section>

    <?php endwhile; ?>


    <?php endif; ?>



<?php get_footer(); ?>
