<?php
// Don't allow direct access to the theme
if(!defined('DB_NAME')) {
  exit('Direct template access is not allowed');
}

get_header(); ?>

  <div id="content-main" class="main" role="main">

  <?php if ( is_front_page() && ($paged < 1) ) :
    /* Set up a custom loop for the three most recent featured posts */
    $featured = new WP_Query( array('posts_per_page' => 3, 'meta_key' => '_fc_featuredpost', 'meta_value' => 1) );
    if( $featured->have_posts() ) : ?>
    <section class="featured-posts">
      <h2><?php _e('Featured', 'onemozilla'); ?></h2>
      <ul class="hfeed">
    <?php while($featured->have_posts()): $featured->the_post(); ?>
        <li id="feature-<?php the_ID(); ?>" class="hentry feature">
          <h3 class="entry-title entry-summary">
            <a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permanent link to &ldquo;%s&rdquo;', 'onemozilla' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark">
            <?php if (has_post_thumbnail()) : ?>
              <?php the_post_thumbnail(array(150,150), array('alt' => "", 'title' => "")); ?>
            <?php else : ?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/featured.png" alt="" width="150" height="150" class="wp-post-image">
            <?php endif; ?>
              <?php the_title(); ?>
            </a>
          </h3>
        </li>
    <?php endwhile; ?>
      </ul>
    </section>
    <?php else: endif; ?>
  <?php endif; ?>

  <?php if ( have_posts() ) : ?>

    <?php /* Start the Loop */ ?>
    <?php while ( have_posts() ) : the_post(); ?>

      <?php get_template_part( 'content', get_post_format() ); ?>

    <?php endwhile; ?>

    <?php if (fc_show_posts_nav()) : ?>
    <nav class="nav-paging">
      <ul role="navigation">
        <?php if ( $paged < $wp_query->max_num_pages ) : ?><li class="prev"><?php next_posts_link(__('Older posts','onemozilla')); ?></li><?php endif; ?>
        <?php if ( $paged > 1 ) : ?><li class="next"><?php previous_posts_link(__('Newer posts','onemozilla')); ?></li><?php endif; ?>
      </ul>
    </nav>
    <?php endif; ?>

  <?php else : ?>

    <article id="post-0" class="post no-results not-found">
      <header class="entry-header">
        <h1 class="entry-title"><?php _e( 'Nothing Found', 'onemozilla' ); ?></h1>
      </header><!-- .entry-header -->

      <div class="entry-content">
        <p><?php _e( 'Sorry, we couldn&#8217;t find any results for the requested archive. Perhaps try searching?', 'onemozilla' ); ?></p>
        <?php get_search_form(); ?>
      </div><!-- .entry-content -->
    </article><!-- #post-0 -->

  <?php endif; ?>

  </div><!-- #content-main -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
