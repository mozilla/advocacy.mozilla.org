<?php get_header(); ?>

  <div id="content-main" class="main" role="main">
    <?php while ( have_posts() ) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header class="entry-header">
          <h1 class="entry-title"><?php the_title(); ?></h1>
          <div class="entry-meta">
           <p class="attach-meta">
            <?php
              $metadata = wp_get_attachment_metadata();
              printf( __( 'Published <time class="published" title="%1$s" datetime="%1$s">%2$s</time> at <a href="%3$s" title="Link to full-size image">%4$s &times; %5$s</a>', 'onemozilla' ),
                esc_attr( get_the_time('Y-m-d\TH:i:sP') ),
                get_the_date(get_option('date_format')),
                esc_url( wp_get_attachment_url() ),
                $metadata['width'],
                $metadata['height']
              );
            ?>
            </p>
            <?php edit_post_link( __( 'Edit Attachment', 'onemozilla' ), '<p class="edit">', '</p>' ); ?>
          </div>
        </header>

        <div class="entry-content">
          <figure class="entry-attachment">
          <?php
            $attachment_size = apply_filters( 'onemozilla_attachment_size', 712 );
            echo wp_get_attachment_image( $post->ID, array( $attachment_size, 1024 ) ); // filterable image width with 1024px limit for image height.
          ?>

          <?php if ( ! empty( $post->post_excerpt ) ) : ?>
            <figcaption class="entry-caption">
              <?php the_excerpt(); ?>
            </figcaption>
          <?php endif; ?>
          </figure>

          <?php the_content(); ?>
          <?php wp_link_pages( array( 'before' => '<div class="page-link"><span>' . __( 'Pages:', 'onemozilla' ) . '</span>', 'after' => '</div>' ) ); ?>

        </div><!-- .entry-content -->

      </article><!-- #post -->

      <?php endwhile; // end of the loop. ?>

    </div><!-- #content-main -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
