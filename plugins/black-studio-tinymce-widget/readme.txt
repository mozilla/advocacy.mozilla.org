=== Black Studio TinyMCE Widget ===
Contributors: marcochiesi, thedarkmist
Donate link: http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/
Tags: wysiwyg, widget, tinymce, editor, image, media, rich text, rich text editor, visual editor, wysiwyg editor, tinymce editor, widget editor, html editor, wysiwyg widget, html widget, editor widget, text widget, rich text widget, enhanced text widget, tinymce widget, visual widget, image widget, media widget
Requires at least: 3.1
Tested up to: 4.1
Stable tag: 2.2.3
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl.html

The visual editor widget for Wordpress.

== Description ==

This plugin adds a new `Visual Editor` widget type that allows you to insert rich text and media objects in your sidebars with no hassle. The default WordPress text widget lacks of functionalities and it requires HTML knowledge, this plugin was born to overcome these limitations. With Black Studio TinyMCE Widget you will be able to edit your widgets in a WYSIWYG manner using the native WordPress TinyMCE editor, just like you do in posts and pages. And if you are a developer you may still switch back and forth from Visual to HTML mode.

= Features =

* Add rich text widgets to your sidebars and edit them using visual editor
* Switch between Visual mode and HTML mode (including Quicktags toolbar)
* Insert images/videos from WordPress Media Library
* Insert links to existing WordPress pages/posts or external resources
* Support for fullscreen editing mode
* Support for widgets accessibility mode
* Support for WordPress networks (multi-site)
* Support for WPML (multi-language)
* Live preview in theme customizer
* Available in 20+ languages

= Links =

* [Plugin's web page](http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/)
* [FAQ](https://wordpress.org/plugins/black-studio-tinymce-widget/faq/)
* [Support forum](https://wordpress.org/support/plugin/black-studio-tinymce-widget)
* [Follow us on Twitter](https://twitter.com/blackstudioita)

= Get involved =

* Developers can contribute to the source code on our [GitHub repository](https://github.com/black-studio/black-studio-tinymce-widget).
* Translators can contribute through [Transifex](https://www.transifex.com/projects/p/black-studio-tinymce-widget/).
* Users can contribute by leaving a 5 stars [review](https://wordpress.org/support/view/plugin-reviews/black-studio-tinymce-widget#postform) or making a [donation](http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/).

== Installation ==

This section describes how to install and use the plugin.

1. Install automatically through the `Plugins` menu and `Add New` button (or upload the entire `black-studio-tinymce-widget` folder to the `/wp-content/plugins/` directory)
2. Activate the plugin
3. Go to `Appearance` => `Widgets`
4. Drag and drop the `Visual Editor` widget to the desired sidebar (or, if using Accesibility mode, click the `Add` link)
5. Fill in title and (rich) text

== Screenshots ==

1. Black Studio TinyMCE Widget in Visual mode
2. Black Studio TinyMCE Widget in HTML mode
3. Black Studio TinyMCE Widget combined with WP Edit plugin

== Frequently Asked Questions ==

= Troubleshooting =

If you are experiencing issues with the plugin please read entirely these FAQ before posting a new topic in our [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget). Most of the times issues are caused by incompatibility with other plugins or themes, which may prevent our plugin from working as expected. In order to troubleshoot issues please complete the following steps:

1. First, ensure you have understood the purpose of the plugin. What this plugin does is to give you the ability to use the WordPress visual editor (TinyMCE) in widgets as you do in posts and pages, but it doesn't alter the editor behavior itself or its functionalities. So if you are experiencing issues with the editor even when editing posts or pages, they're definitely not related to our plugin (unless you're using some additional plugins that provides widgets support for pages, i.e. Page Builder).
2. Ensure that you are running the latest versions of both WordPress and the plugin.
3. Search in our [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget) for threads with similar issues.
4. Disable all other plugins and check if the problem is fixed. In that case enable the other plugins one by one and figure out which one is causing the issue. Please see [Conflict Diagnosis Guide for WordPress plugins](https://rtcamp.com/rtmedia/docs/troubleshooting/conflict-diagnosis-guide-wordpress-plugins/) for further info.
5. If the problem persists even with all other plugins disabled, try to switch to a WordPress default theme (i.e. Twenty Fourteen) and check if that fixes the issue.

If you found a conflict with a plugin or theme, or if your problem is still present after the steps above, open a topic in the [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget) and provide the following information:

* Detailed description of the problem, including the steps to reproduce it
* Error messages, if any, in particular in [browser's javascript console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers)
* Browser and Operating System in use
* Plugin version in use
* WordPress version in use
* WordPress theme in use
* WordPress default language in use, if other than english
* WordPress plugins causing conflicts, if any
* A link to a screenshot, if it can be useful to understand the problem
* A link to your website, if it can be useful to show the problem

= Can't find it in my available widgets =

Since version 1.3.1 the name of the widget changed from `Black Studio TinyMCE Widget` to `Visual Editor` to enhance user friendliness. `Black Studio TinyMCE Widget` is still the name of the plugin, but it was a bit too long and not very intuitive for inexperienced users. You may find references to the old name in articles and videos on the web, so don't panic if you don't see the `Black Studio TinyMCE Widget` in your available widgets, just look for `Visual Editor`. Note: if you are using WordPress in a language other than english you may have a corresponding name translated in your language.

= Widgets disappeared after migrating or changing the site URL =

When dealing with a WordPress site URL change it is necessary to face the serialized fields issue: data may become corrupted if using a simple search/replace (see the [Codex](http://codex.wordpress.org/Moving_WordPress#When_Your_Domain_Name_or_URLs_Change) for further info). This is not an issue specifically related to our plugin, but it affects all the parts (plugins, themes and WordPress core files too) that use serialized data archiviation. When changing the site URL, the recommended way is to use the [Search and Replace for WordPress Databases Script](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/), as suggested by the Codex.

= How to translate widgets using WPML =

The current version of `Black Studio TinyMCE Widget` plugin works together with the `WPML String translation` plugin. To translate a widget created with `Black Studio TinyMCE Widget` plugin you have to create it on the widgets panel and then go to `WPML` => `String translation` and translate the title and text from there (unfortunately the translation textarea has not the visual editor).
Note: If you installed WPML after the creation of the widgets, just re-save them and they will appear on the String translation list.

= How to embed video and other contents =

WordPress has a nice [autoembed feature](http://codex.wordpress.org/Embeds) that allows you to embed videos and other stuff in an easy way, by just putting the URL in the content area. This is also possible for widgets created with this plugin.
If you are using a version of WordPress prior to 4.0 or a version of Black Studio TinyMCE Widget prior to 2.0, for best results it is recommended to put the URL inside an `[embed]` shortcode. Example: 
`[embed]http://www.youtube.com/watch?v=XXXXXXXXXXX[/embed]`
Ensure that the URL has not an hyperlink on it.
Alternatively, if you don't want to use `[embed]` shortcode, ensure that the URL is not surrounded by a `<p>` tag.

= How to customize widget appearance =

The appearance of widgets in the frontend depends on both CSS and HTML. This plugin does not insert any additional CSS to your website frontend, so if you need to customize the styling you'll have to do at theme level, or you have to insert explicitely insert `<style>` in your widget using the the Text / HTML mode (this option is not recommended though).
As for the HTML, most of the markup is controlled by WordPress and by the theme.
The HTML output of a widget includes the following parts:
`
[before_widget]
	[before_title]
		[title]
	[after_title]
	[before_text]
		[text]
	[after_text]
[after_widget]
`
which can be customized as following:

* The `[title]` and `[text]` are the values that you insert in Widgets administration panel.
* The markup  of `[before_widget]`, `[after_widget]`, `[before_title]`, `[after_title]` is usually defined by your theme when registering a sidebar with the [`register_sidebar`](http://codex.wordpress.org/Function_Reference/register_sidebar) function. 
* The `[before_text]` and `[after_text]` are the only piece of HTML markup added by the plugin. The default markup is the same as native WordPress text widgets to ensure visual compatibility with styles created for text widgets: `<div class="textwidget"> [text] </div>`. You may customize the markup using the `black_studio_tinymce_before_text` and `black_studio_tinymce_after_text` filter hooks. They both take two parameters, the first is the default text and the second is the widget instance. See examples below.

Example 1: Custom markup for `[before_text]` and `[after_text]`
`
add_filter( 'black_studio_tinymce_before_text', 'my_widget_before_text', 10, 2 );
function my_widget_before_text( $before_text, $instance ) {
	return '<div class="mytextwidget">';
}
add_filter( 'black_studio_tinymce_after_text', 'my_widget_after_text', 10, 2 );
function my_widget_after_text( $after_text, $instance ) {
	return '</div>';
}
`

Example 2: Totally remove markup for `[before_text]` and `[after_text]`
`
add_filter( 'black_studio_tinymce_before_text', '__return_empty_string' );
add_filter( 'black_studio_tinymce_after_text', '__return_empty_string' );
`

There's also an additional hook, that you may use to specify to not display widgets if their content is empty:
`
add_filter( 'black_studio_tinymce_hide_empty', '__return_true' );
`

= How to customize widget contents (using hooks) =

You may alter widget title and text via code using the `widget_title` and `widget_text` filter hooks (see [Codex](http://codex.wordpress.org/Plugin_API/Filter_Reference#Widgets) for details).
The plugin also internally uses `widget_text` filter to apply specific features:

* [icl_t](http://wpml.org/documentation/support/translation-for-texts-by-other-plugins-and-themes/) (priority 2): applies WPML translation (called only if WPML is activated on the site).
* [autoembed](http://codex.wordpress.org/Embeds) (priority 4): converts embed urls to relevant embed codes.
* [convert_smilies](http://codex.wordpress.org/Function_Reference/convert_smilies) (priority 6): converts text equivalent of smilies to images.
* [wpautop](http://codex.wordpress.org/Function_Reference/wpautop) (priority 8): applies paragraphs automatically (if the relevant option is selected).
* [do_shortcode](http://codex.wordpress.org/Function_Reference/do_shortcode) (priority 10): processes the shortcodes.

If for any reason you need to remove the filters above, you may use the following code snippet (or a custom version of it):

`
add_action( 'init', 'remove_bstw_widget_text_filters' );
function remove_bstw_widget_text_filters() {
    if ( function_exists( 'bstw' ) ) {
        remove_filter( 'widget_text', array( bstw()->compatibility()->plugins(), 'wpml_widget_text' ), 2 );
        remove_filter( 'widget_text', array( bstw()->text_filters(), 'autoembed' ), 4 );
        remove_filter( 'widget_text', array( bstw()->text_filters(), 'convert_smilies' ), 6 );
        remove_filter( 'widget_text', array( bstw()->text_filters(), 'wpautop' ), 8 );
        remove_filter( 'widget_text', array( bstw()->text_filters(), 'do_shortcode' ), 10 );
    }
}
`

= Plugin's data location and cleanup =

Plugin's data is stored in serialized format inside a record in the `wp_options` table having `option_name` = `'widget_black-studio-tinymce'`. Data storage is handled by WordPress and not directly by the plugin itslef. The widgets data is intentionally kept in the datatbase upon plugin deactivation / deletion to avoid content loss. If you want to totally remove the plugin including its data, just remove that record after plugin removal.

== Changelog ==

= 2.2.3 (2015-02-17) =
* Fixed bug on reordering gallery images
* Added czech and lithuanian translations (courtesy of WP-Translation.org team on Transifex)

= 2.2.2 (2014-12-24) =
* Fixed bug on visual/text mode not being saved in WordPress 4.1
* Updated German and French translations
* Added support for [Composer](https://getcomposer.org) dependency manager (courtesy of [@cfoellmann](https://github.com/cfoellmann))

= 2.2.1 (2014-11-18) =
* Fixed paragraph formatting bug on saving
* Fixed real-time update bug in Theme Customizer
* Enhanced editor initialization
* Simplified internal integration with Page Builder
* Simplified internal initialization for accessibility mode
* Minor changes for coding standard compliance

= 2.2.0 (2014-11-18) =
* Added filter to hide empty widgets
* Added workaround for WordPress Core bug #28403
* Enhanced compatibility for widgets created with 1.x plugin versions
* Enhanced compatibility for editor instances used by other plugins
* Fixed bug on line breaks being stripped in text mode
* Updated translations

= 2.1.6 (2014-10-23) =
* Fixed bug on line breaks being changed on editor load
* Improved TinyMCE editor stuff loading

= 2.1.5 (2014-10-21) =
* Fixed bug when saving in text mode

= 2.1.4 (2014-10-19) =
* Fixed compatibility issue on TinyMCE initialization filtering
* Fixed z-index issue when both thickbox and media dialog windows were used (i.e. using Hover Effects Pack plugin)

= 2.1.3 (2014-10-18) =
* Added ability to disable automatic addition of paragraphs when editing (i.e. using TinyMCE Advanced plugin option)
* Enhanced real time rendering in theme customizer
* Fixed compatibility issue with Page Builder related to comment reply in admin
* Fixed compatibility issue with Styles plugin related to plugins_loaded hook

= 2.1.2 (2014-10-13) =
* Hotfix for fullscreen mode when using Page Builder

= 2.1.1 (2014-10-13) =
* Hotfix for CSS compatibility with Page Builder 

= 2.1.0 (2014-10-13) =
* Added option to automatically add paragraphs
* Added admin pointer to help new users identify the widget
* Added loading overlay when saving widget
* Added check for multiple instances of the plugin
* Fixed issue related to multiple line breaks not being saved
* Fixed issues with RTL locales
* Enhanced compatibility for widgets created with 1.x versions of the plugin
* Updated documentation about widget customization

= 2.0.4 (2014-10-07) =
* Changed widget_text filters order to ensure better compatibility

= 2.0.3 (2014-10-07) =
* Removed wp_kses_post filter on widget text to ensure better compatibility

= 2.0.2 (2014-10-06) =
* Hotfix for Contact Form 7 compatibility

= 2.0.1 (2014-10-06) =
* Hotfix for widget_text hook compatibility

= 2.0.0 (2014-10-06) =
* Total refactoring of plugin's source code
* Enhanced integration with TinyMCE editor for better compatibility with other plugins
* Added support for QuickTags toolbar in HTML mode
* Added support for mobile devices (responsive width in widgets administration page)
* Added project to [GitHub](https://github.com/black-studio/black-studio-tinymce-widget)
* Added project to [Transifex](https://www.transifex.com/projects/p/black-studio-tinymce-widget/) translation platform
* Added many new translations thanks to [WP-Translation.org](http://wp-translations.org/) team
* Added several filter and action hooks
* Improved code quality and security thanks to [Scrutinizer](https://scrutinizer-ci.com/g/black-studio/black-studio-tinymce-widget/) service
* Improved development workflow thanks to [Grunt](http://gruntjs.com/)
* Improved performance and user experience
* A huge Thanks to [@cfoellmann](https://github.com/cfoellmann) for his precious support and contributions

= 1.4.8 (2014-09-13) =
* Fixed bug on image captions on WordPress 4.0 (part 2)

= 1.4.7 (2014-09-11) =
* Fixed bug on image captions on WordPress 4.0

= 1.4.6 (2014-07-25) =
* Bugfix on widget display

= 1.4.5 (2014-07-25) =
* Fixed compatibility issue with Page Builder + WPML String Translation

= 1.4.4 (2014-07-16) =
* Fixed z-index compatibility issue with Shortcodes Ultimate plugin

= 1.4.3 (2014-07-13) =
* Added filter hooks to modify the markup before and after the widget text
* Fixed z-index issue in fullscreen mode
* Added widget icon for theme customizer
* Updated danish translation
* Updated FAQ and readme.txt

= 1.4.2 (2014-07-07) =
* Added support for `wp_enqueue_editor` hook
* Added compatibility with Advanced Image Styles plugin
* Added danish translation (Contributor: Mikkel Rommelhoff)

= 1.4.1 (2014-06-12) =
* Enhanced HTML source code formatting

= 1.4 (2014-06-12) =
* HTML and CSS optimization by using WordPress native editor markup and styles
* Adoption of WordPress JS minification conventions (`.min` suffix)
* Integration with WordPress SCRIPT_DEBUG constant for javascript debugging purposes
* Enhanced compatibility with 3rd party media buttons provider (i.e. Shortcodes Ultimate)
* Enhanced plugin internal version handling
* Duplicated widget IDs detection
* Added Rate link
* Added compatibility with WordPress Language packs
* Added ukrainian translation (Contributor: Michael Yunat [getvoip.com](http://getvoip.com/blog))
* Fixed notice on theme_advanced_buttons1 parameter
* Fixed z-index issue with WordPress 3.9 admin menu on small screens

= 1.3.3 (2014-04-04) =
* Fixed visualization bug upon widget saving
* Enhanced support WordPress 3.9 Theme Customizer (live edit)

= 1.3.2 (2014-04-03) =
* Fixed compatibility issue with WordPress 3.9 Beta 3
* Added support for WordPress 3.9 Theme Customizer
* Added swedish translation (Contributor: macsolve)
* Updated installation documentation
* Updated FAQ

= 1.3.1 (2014-03-06) =
* Renamed the widget to `Visual Editor` for better user friendliness
* Fixed compatibility issue with FirmaSite Theme Enhancer plugin

= 1.3.0 (2014-01-29) =
* Added support for smilies conversion (based on the general WordPress option)
* Updated styling to match the new default WordPress editor appearence
* Refactoring of PHP and JS code to be compliant to WordPress coding standard
* Fixed compatibility issue with WordPress 3.9 alpha and TinyMCE 4.0
* Fixed compatibility issue with Jetpack / After the Deadline plugin
* Fixed editor behavior on widget title clicks
* Fixed CSS issue affecting Firefox on WordPress 3.8
* Added finnish translation (Contributor: Timo Leiniö)
* Better handling of More tag button
* Included JS dev version

= 1.2.0 (2013-05-04) =
* Fixed issue with WordPress widgets accessibility mode
* Fixed compatibility issue with WPML plugin generating an error in debug mode
* Fixed compatibility issue with WP Page Widget plugin
* Added slovak translation (Contributor: Branco Radenovich - [WebHostingGeeks.com](http://webhostinggeeks.com/user-reviews/))
* Tested compatibility with Worpdress 3.6 beta

= 1.1.1 (2012-12-31) =
* Fixed editor issue when dragging widgets from a sidebar to another

= 1.1.0 (2012-11-15) =
* Compatibility fixes for upcoming WordPress 3.5
* Added support for the new WordPress media library dialog
* Enhanced javascript event handling using jquery .on(...) method

= 1.0.0 (2012-10-19) =
* Added full image options when adding content from media library
* Added german translation (Contributor: Christian Foellmann)
* Overall Javascript code optimization
* Better Javascript compression
* Fixed editor background color
* Fixed compatibility issue with WP Page Widget plugin
* Fixed issue about editor partially hidden on narrow screens

= 0.9.5 (2012-10-01) =
* Added support for autoembed urls (youtube, etc)

= 0.9.4 (2012-07-31) =
* Bug fixes

= 0.9.3 (2012-07-31) =
* Added support for accessibility mode

= 0.9.2 (2012-07-27) =
* Optimized for use in conjunction with Ultimate TinyMCE plugin

= 0.9.1 (2012-06-07) =
* Added spanish translation (Contributor: Lucia García Martínez)
* Increased width of editor window

= 0.9 (2012-01-20) =
* Added support for WPML plugin (for multilanguage sites)

= 0.8.2 (2011-12-21) =
* Added support for shortcodes in widget text

= 0.8.1 (2011-12-20) =
* Fixed issue when inserting images on WordPress 3.3

= 0.8 (2011-11-29) =
* Added support for WordPress networks (Multisite)

= 0.7 (2011-11-24) =
* Added compatibility for upcoming WordPress 3.3
* Added compatibility for previous WordPress 3.0 and 3.1
* Optimization/compression of javascript code

= 0.6.5 (2011-11-17) =
* Forced TinyMCE editor to not automatically add/remove paragraph tags when switching to HTML mode (you may need to re-edit your widgets to adjust linebreaks, if you were using multiple paragraphs)

= 0.6.4 (2011-11-14) =
* Fixed compatibility issue with Jetpack / After the Deadline plugin
* Optimization of javascript/css loading

= 0.6.3 (2011-11-13) =
* Fixed javascript issue preventing the plugin from working correctly with some browsers

= 0.6.2 (2011-11-12) =
* Fixed javascript issue with WordPress Media Library inserts in HTML mode

= 0.6.1 (2011-11-12) =
* Fixed javascript issue preventing editor to show up in some cases

= 0.6 (2011-11-11) =
* Added support for WordPress Media Library

= 0.5 (2011-11-10) =
* First Beta release

== Upgrade Notice ==

= 2.2.3 =
Version 2.x is a major update. If you are upgrading from version 1.x please ensure to backup your database before upgrading.
