<?php $theme_options = onemozilla_get_theme_options(); ?>


<?php if ( is_active_sidebar( 'footer' ) ) : ?>
  <?php if ( !is_page("thank-you") and !is_page("coming-soon") ) : ?>
    <footer id="widget-footer">
    	<div class="wrap">
          <?php dynamic_sidebar( 'footer' ); ?>
    	</div>
    </footer>
  <?php endif; ?>
<?php endif; ?>

<footer id="site-info" role="contentinfo">
  <div class="wrap">
    <p id="foot-logo">
      <a class="top" href="#page"><?php _e('Return to top', 'onemozilla'); ?></a>
      <a class="logo" href="http://mozilla.org" rel="external">Mozilla</a>
    </p>

    <p id="colophon">
      <?php printf(__('Except where otherwise <a href="%1s" rel="external">noted</a>, content on this site is licensed under the <a href="%2s" rel="external license">Creative Commons Attribution Share-Alike License v3.0</a> or any later version.', 'onemozilla'), esc_attr('http://www.mozilla.org/en-US/about/legal.html#site'), esc_attr('http://creativecommons.org/licenses/by-sa/3.0/') ); ?>
    </p>

    <nav id="nav-meta">
      <ul role="navigation">
        <li><a href="https://www.mozilla.org/contact/" rel="external"><?php _e('Contact Us', 'onemozilla'); ?></a></li>
        <li><a href="https://www.mozilla.org/en-US/privacy/" rel="external"><?php _e('Privacy Policy', 'onemozilla'); ?></a></li>
        <li><a href="https://www.mozilla.org/en-US/about/legal.html" rel="external"><?php _e('Legal Notices', 'onemozilla'); ?></a></li>
        <li><a href="https://www.mozilla.org/en-US/legal/fraud-report/index.html" rel="external"><?php _e('Report Trademark Abuse', 'onemozilla'); ?></a></li>
        <li><a href="https://github.com/mozilla/advocacy.mozilla.org" rel="external"><?php _e('Theme Code ', 'onemozilla'); ?></a></li>
        <li><a href="https://sendto.mozilla.org/page/contribute/Give-Now?&source=mofoadvocacy_site" rel="external" class="red">Donate</a></li>
      </ul>
    </nav>
  </div>
</footer>

<script src="https://www.mozilla.org/tabzilla/media/js/tabzilla.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/ui.js"></script>

<?php wp_footer(); ?>

</body>
</html>
