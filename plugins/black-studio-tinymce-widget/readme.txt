=== Black Studio TinyMCE Widget ===
Contributors: marcochiesi, thedarkmist
Donate link: http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/
Tags: wysiwyg, widget, tinymce, editor, image, media, rich text, rich text editor, visual editor, wysiwyg editor, tinymce editor, widget editor, html editor, wysiwyg widget, html widget, editor widget, text widget, rich text widget, enhanced text widget, tinymce widget, visual widget, image widget, media widget
Requires at least: 3.0
Tested up to: 4.0
Stable tag: 1.4.4
License: GPLv3
License URI: http://www.gnu.org/licenses/gpl.html

Adds a WYSIWYG widget based on the standard TinyMCE WordPress visual editor.

== Description ==

This plugin adds a WYSIWYG text widget based on the standard TinyMCE WordPress visual editor. This is intended to overcome the limitations of the default WordPress text widget, so that you can visually add rich text contents to your sidebars, with no knowledge of HTML required.

= Features =

* Add rich text widgets to your sidebars and edit them using visual editor
* Switch between Visual mode and HTML mode
* Insert images/videos from WordPress Media Library
* Insert links to existing WordPress pages/posts
* Fullscreen editing mode supported
* Widgets accessibility mode supported
* WordPress networks (Multi-site) supported
* WPML (Multi-language) supported
* Live preview of widgets in Theme customizer supported (since WordPress 3.9)

= Links =

* [Plugin's web page](http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/)
* [Support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget)
* [Follow us on Twitter](https://twitter.com/blackstudioita)

== Installation ==

This section describes how to install and use the plugin.

1. Install automatically through the `Plugins` menu and `Add New` button (or upload the entire `black-studio-tinymce-widget` folder to the `/wp-content/plugins/` directory)
2. Activate the plugin
3. Go to `Appearance` -> `Widgets`
4. Drag and drop the `Visual Editor` widget to the desired sidebar (or, if using Accesibility mode, click the `Add` link)
5. Fill in title and (rich) text

== Screenshots ==

1. Black Studio TinyMCE Widget editor window
2. Black Studio TinyMCE Widget combined with Ultimate TinyMCE plugin

== Frequently Asked Questions ==

= Troubleshooting =

If you are experiencing issues with the plugin, check our [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget), but please read entirely these FAQ before posting a new topic in the forum. Most of the times issues are caused by incompatibility with other plugins or themes, which don't comply with WordPress coding standars and thus may prevent our plugin from working as expected. If you have any issues with the plugin, please do the following:

1. Ensure the you have understood the purpose of the plugin. It only adds the ability to use the visual editor (TinyMCE) in widgets as you do in posts and pages, but it doesn't alter the editor behavior or functions. So if you are experiencing issues with the editor even when editing posts or pages, they're definitely not related to our plugin (unless you're using some additional plugins that provides widgets support for pages, i.e. Page Builder).
2. Ensure that you are running the latest versions of both WordPress and the plugin.
3. Search in our [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget) for threads with similar issues.
4. Disable all other plugins and switch to a WordPress default theme for a while. If the problem persists, open a topic in the forum (see below for instructions). Otherwise enable the other plugins ony by one and figure out which one is causing the issue, then post to the support forum mentioning it. Please see [Conflict Diagnosis Guide for WordPress plugins](https://rtcamp.com/rtmedia/docs/troubleshooting/conflict-diagnosis-guide-wordpress-plugins/) for further info.

When you post a message in the [support forum](http://wordpress.org/support/plugin/black-studio-tinymce-widget) please provide the following information:

* Description of the problem and steps to reproduce it
* Error messages if any, in particular in [browser's javascript console](http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers)
* Browser and Operating System in use
* WordPress version in use
* WordPress theme in use
* WordPress plugins causing conflicts if any
* A link to a screenshot if it can be useful to undesrtand the problem

= Widgets disappeared after migrating or changing the site URL =

When dealing with a WordPress site URL change it is necessary to face the "serialized fields" issue: data may become corrupted if using a simple search/replace (see the [Codex](http://codex.wordpress.org/Moving_WordPress#When_Your_Domain_Name_or_URLs_Change) for further info). This is not an issue specifically related to our plugin, but it affects all the parts (plugins, themes and WordPress core files too) that use serialized data archiviation. When changing the site URL, the recommended way is to use the [Search and Replace for WordPress Databases Script](https://interconnectit.com/products/search-and-replace-for-wordpress-databases/), as suggested by the Codex.

= How to translate widgets using WPML =

The current version of `Black Studio TinyMCE Widget` plugin works together with the `WPML String translation` plugin. To translate a widget created with `Black Studio TinyMCE Widget` plugin you have to create it on the widgets panel and then go to `WPML` -> `String translation` and translate the title and text from there (unfortunately the translation textarea has not the visual editor).
Note: If you installed WPML after the creation of the widgets, just re-save them and they will appear on the String translation list.

= How to embed video and other contents =

WordPress has a nice [autoembed feature](http://codex.wordpress.org/Embeds) that allows you to embed videos and other stuff in an easy way, by just putting the URL in the content area. This is also possible for widgets created with this plugin, but for best results it is recommended to put the URL inside an `[embed]` shortcode. 
Example: 
`[embed]http://www.youtube.com/watch?v=XXXXXXXXXXX[/embed]`
Ensure that the URL has not an hyperlink on it.
Alternatively, if you don't want to use `[embed]` shortcode, ensure that the URL is not surrounded by a `<p>` tag, which is added automatically by the WYSIWYG editor (switch to HTML mode to remove enclosing `<p>` tags).

= How to customize widget HTML markup =

Most of the HTML markup around widgets is generated by WordPress and you can control it using the proper arguments (`class`, `before_widget`, `after_widget`, `before_title`, `after_title`) passed to the [`register_sidebar`](http://codex.wordpress.org/Function_Reference/register_sidebar) function (this is usually done by your theme). The only piece of HTML code added by the plugin is there for compatibility with the markup of native WordPress text widgets, and it is the following:
`<div class="textwidget"> ... widget text ... </div>`
You may customize it using the `black_studio_tinymce_before_text` and `black_studio_tinymce_after_text` filter hooks. They both take two parameters, the first one is the default text and the second is the widget instance. See examples below.

Example 1: Custom markup
`
add_filter( 'black_studio_tinymce_before_text', 'my_widget_before_text', 10, 2 );
function my_widget_before_text( $before_text, $instance ) {
	return '<div class="myclass">';
}
add_filter( 'black_studio_tinymce_after_text', 'my_widget_after_text', 10, 2 );
function my_widget_after_text( $after_text, $instance ) {
	return '';
}
`

Example 2: Totally remove markup
`
add_filter( 'black_studio_tinymce_before_text', '__return_empty_string' );
add_filter( 'black_studio_tinymce_after_text', '__return_empty_string' );
`

== Changelog ==

= 1.4.4 =
* Fixed z-index compatibility issue with Shortcodes Ultimate plugin

= 1.4.3 =
* Added filter hooks to modify the markup before and after the widget text
* Fixed z-index issue in fullscreen mode
* Added widget icon for theme customizer
* Updated danish translation
* Updated FAQ and readme.txt

= 1.4.2 =
* Added support for `wp_enqueue_editor` hook
* Added compatibility with Advanced Image Styles plugin
* Added danish translation (Contributor: Mikkel Rommelhoff)

= 1.4.1 =
* Enhanced HTML source code formatting

= 1.4 =
* HTML and CSS optimization by using WordPress native editor markup and styles
* Adoption of WordPress JS minification conventions (".min" suffix)
* Integration with WordPress SCRIPT_DEBUG constant for javascript debugging purposes
* Enhanced compatibility with 3rd party media buttons provider (i.e. Shortcodes Ultimate)
* Enhanced plugin internal version handling
* Duplicated widget IDs detection
* Added Rate link
* Added compatibility with WordPress Language packs
* Added ukrainian translation (Contributor: Michael Yunat [getvoip.com](http://getvoip.com/blog))
* Fixed notice on theme_advanced_buttons1 parameter
* Fixed z-index issue with WordPress 3.9 admin menu on small screens

= 1.3.3 =
* Fixed visualization bug upon widget saving
* Enhanced support WordPress 3.9 Theme Customizer (live edit)

= 1.3.2 =
* Fixed compatibility issue with WordPress 3.9 Beta 3
* Added support for WordPress 3.9 Theme Customizer
* Added swedish translation (Contributor: macsolve)
* Updated installation documentation
* Updated FAQ

= 1.3.1 =
* Renamed the widget to "Visual Editor" for better user friendliness
* Fixed compatibility issue with FirmaSite Theme Enhancer plugin

= 1.3.0 =
* Added support for smilies conversion (based on the general WordPress option)
* Updated styling to match the new default WordPress editor appearence
* Refactoring of PHP and JS code to be compliant to WordPress coding standard
* Fixed compatibility issue with WordPress 3.9 alpha and TinyMCE 4.0
* Fixed compatibility issue with Jetpack / After the Deadline plugin
* Fixed editor behavior on widget title clicks
* Fixed CSS issue affecting Firefox on WordPress 3.8
* Added finnish translation (Contributor: Timo Leiniö)
* Better handling of "More tag" button
* Included JS dev version

= 1.2.0 =
* Fixed issue with WordPress widgets accessibility mode
* Fixed compatibility issue with WPML plugin generating an error in debug mode
* Fixed compatibility issue with WP Page Widget plugin
* Added slovak translation (Contributor: Branco Radenovich - [WebHostingGeeks.com](http://webhostinggeeks.com/user-reviews/))
* Tested compatibility with Worpdress 3.6 beta

= 1.1.1 =
* Fixed editor issue when dragging widgets from a sidebar to another

= 1.1.0 =
* Compatibility fixes for upcoming WordPress 3.5
* Added support for the new WordPress media library dialog
* Enhanced javascript event handling using jquery .on(...) method

= 1.0.0 =
* Added full image options when adding content from media library
* Added german translation (Contributor: Christian Foellmann)
* Overall Javascript code optimization
* Better Javascript compression
* Fixed editor background color
* Fixed compatibility issue with "WP Page Widget" plugin
* Fixed issue about editor partially hidden on narrow screens

= 0.9.5 =
* Added support for autoembed urls (youtube, etc)

= 0.9.4 =
* Bug fixes

= 0.9.3 =
* Added support for accessibility mode

= 0.9.2 =
* Optimized for use in conjunction with Ultimate TinyMCE plugin

= 0.9.1 =
* Added spanish translation (Contributor: Lucia García Martínez)
* Increased width of editor window

= 0.9 =
* Added support for WPML plugin (for multilanguage sites)

= 0.8.2 =
* Added support for shortcodes in widget text

= 0.8.1 =
* Fixed issue when inserting images on WordPress 3.3

= 0.8 =
* Added support for WordPress networks (Multisite)

= 0.7 =
* Added compatibility for upcoming WordPress 3.3
* Added compatibility for previous WordPress 3.0 and 3.1
* Optimization/compression of javascript code

= 0.6.5 =
* Forced TinyMCE editor to not automatically add/remove paragraph tags when switching to HTML mode (you may need to re-edit your widgets to adjust linebreaks, if you were using multiple paragraphs)

= 0.6.4 =
* Fixed compatibility issue with Jetpack / After the Deadline plugin
* Optimization of javascript/css loading

= 0.6.3 =
* Fixed javascript issue preventing the plugin from working correctly with some browsers

= 0.6.2 =
* Fixed javascript issue with WordPress Media Library inserts in HTML mode

= 0.6.1 =
* Fixed javascript issue preventing editor to show up in some cases

= 0.6 =
* Added support for WordPress Media Library

= 0.5 =
* First Beta release