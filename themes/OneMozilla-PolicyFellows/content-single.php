<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
    <h1 class="entry-title"><?php the_title(); ?></h1>

    <?php if ( get_option('onemozilla_hide_authors') != 1 ) : ?>
      <address class="vcard"><cite class="author fn"><a class="url" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) ?>" title="<?php printf( esc_attr__( 'See all %1$s posts by %2$s', 'onemozilla'), get_the_author_posts(), get_the_author() ); ?>"><?php esc_html(the_author()); ?> <?php echo get_avatar(get_the_author_meta('user_email'), 24) ?></a></cite></address>
    <?php endif; ?>

    <?php $comment_count = get_comments_number($post->ID);
    if ( comments_open() || pings_open() || ($comment_count > 0) ) : ?>
      <p class="entry-comments"><a href="<?php comments_link() ?>" title="<?php if($comment_count > 0) { printf(_n( '1 response', '%d responses', $comment_count, 'onemozilla'), $comment_count); } else { _e('No responses yet'); } ?>"><?php if ($comment_count > 999) : comments_number('0','1','1000+'); else : comments_number('0','1','%'); endif; ?></a></p>
    <?php endif; ?>

    <?php if ( 'post' == get_post_type() ) : ?>
      <p class="entry-posted">
        <time class="published" title="<?php the_time('Y-m-d\TH:i:sP'); ?>" datetime="<?php the_time('Y-m-d\TH:i:sP'); ?>">
          <a class="posted-month" href="<?php echo get_month_link(get_the_time('Y'), get_the_time('m')); ?>" title="<?php printf( __( 'See all posts from %s', 'onemozilla' ), get_the_time('F, Y') ); ?>"><?php strftime(the_time('M')); ?></a>
          <span class="posted-date"><?php the_time('j'); ?></span>
          <a class="posted-year" href="<?php echo get_year_link(get_the_time('Y'), get_the_time('y')); ?>" title="<?php printf( __( 'See all posts from %s', 'onemozilla' ), get_the_time('Y') ); ?>"><?php the_time('Y'); ?></a>
        </time>
      </p>
    <?php endif; ?>

    <?php if ( get_option('onemozilla_share_posts') == 1 ) : ?>
      <div class="share">
        <div class="socialshare" data-type="small-bubbles"></div>
      </div>
    <?php endif; ?>
    <?php edit_post_link( __( 'Edit Post', 'onemozilla' ), '<p class="edit">', '</p>' ); ?>
  </header><!-- .entry-header -->

  <div class="entry-content">  
    <?php if (has_post_thumbnail()) { the_post_thumbnail('thumbnail', array('alt' => "", 'title' => "")); } ?>
    <?php the_content(); ?>
    <?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'onemozilla' ) . '</span>', 'after' => '</div>' ) ); ?>
  </div><!-- .entry-content -->

  <footer class="entry-meta">
  <?php if ( 'post' == get_post_type() ) : // Hide category and tag text for pages on Search ?>
    <?php if (has_tag()) : ?>
      <p class="meta"><b><?php _e('Tags','onemozilla'); ?>:</b> <?php $tags_list = the_tags('',', ',''); ?></p>
    <?php endif; ?>
      <p class="meta"><b><?php _e('Categories','onemozilla'); ?>:</b> <?php the_category(', ') ?></p>
  <?php endif; ?>
  </footer><!-- .entry-meta -->
</article><!-- #post -->
