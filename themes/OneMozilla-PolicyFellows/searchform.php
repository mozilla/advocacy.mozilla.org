<form id="search" class="fm-search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <fieldset>
    <p><input type="search" value="<?php the_search_query(); ?>" name="s" id="s"></p>
  </fieldset>
</form>
