advocacy.mozilla.org
====================

WordPress theme for the policy.mozilla.org site.

- This repo contains files included in the WordPress /wp-content folder.


# Access to WordPress Dashbaord and Server #

## WordPress Dashboard ##
- Make sure you have an admin account on https://advocacy.mozilla.org/wp-admin.  If you don't, contact @edrushka and she can help you get one.

## Server Acess ##
- The WordPress `/wp-content` directory syncs with [our Advocacy site repo](https://github.com/mozilla/advocacy.mozilla.org).
  1. make sure you have **ssh access** to the server. If you don't, I believe the awesome @jdotpz can help.
  2. ssh to the server
  3. `cd /var/www/wp-content`


# Set Up Your Local WordPress Instance #

:grimacing: The following steps are pretty tedious and require patience to go through.  Importing a database dump could be an alternative approach but I'm personally not so familar with that and cannot provide much help. :grimacing:

## Install and Clone ##
1. Install WordPress locally on your machine.  Here's [the tutorial for Mac](http://codex.wordpress.org/Installing_WordPress_Locally_on_Your_Mac_With_MAMP) that I found useful. I'm sure you can find other resources online as well.
2. Open your `terminal`, and `cd` to where your WordPress instance is.  For example,
```
cd Development/AdvocacySite/
```
3. Remove the `wp-content` directory entirely.
4. Clone `wp-content` from our repo.
```
git clone https://github.com/mozilla/advocacy.mozilla.org.git wp-content
```

## Activate Theme and Plugins ##
1. Activate theme
  - (Depends on your Apache port and WordPress setting), login to your Dashboard (for me, via `http://localhost:8888/wp-admin/`)
 Go to Appearance on the sidebar
  - Themes
  - Hover over "One Mozilla - Policy Fellows" and select "Activate"
2. Activate the following plugins
  - Go to "Plugins" on the sidebar
  - Activate
    - "Advanced Custom Fields"
    - "Black Studio TinyMCE Widget"
    - "Olevmedia Shortcodes"
3. Preview your site now, it should look like something like ![activate-theme](https://cloud.githubusercontent.com/assets/2896608/6677715/ee9cd1f6-cbef-11e4-808b-389e76f85a3f.png)
4. You'll notice that the site is missing lots of the content and the layout doesn't look right.  Fix it by importing content from PROD.

## Importing Content ##

1. Export from Production site
  - Go to https://advocacy.mozilla.org/wp-admin/
  - Go to "Tools" from sidebar
  - Go to "Export", select "All content", click "Download Export File"
2. Import to your local instance
  - Now go back to your ** * LOCAL * ** WordPress instance,
  - "Tools"
  - "Import"
  - Select, install, activate, and run "WordPress Importer"
  - Import the file you just downloaded
  - It'll bring you to the "Assign Authors" page, select "Download and import file attachments".  I usually leave everything else as is and click "Submit".
3. Set your front page
  - Go to "Settings" from sidebar
  - Go to "Reading"
  - "Front page displays" --> A static page --> Choose Front page: Home
4.  Broken page still? Very often the importer fails importing bits used in the "Advacned Custom Fields" plugin. Your front page would look like something like this if that happens ![frontpage-set](https://cloud.githubusercontent.com/assets/2896608/6678486/95f9ece2-cbf8-11e4-8428-073597b2beae.png)
- How to fix?
  - :point_right: Go to https://advocacy.mozilla.org/wp-admin/ again (PROD site)
    - Go to "Custom Fields" from sidebar
    - Select "Export" from submenu
    - Select "Homepage" and choose "Export to XML"
    - Download that file
  - :point_right: Now go back to your ** * LOCAL * ** WordPress instance
    - Go to "Custom Fields" from sidebar
    - Select "Homepage" and Apply "Move to Trash" action
    - Go to "Trash"
    - Hover over "Homepage" and select "Delete Permanently"
    - Go to "Tools" from sidebar
    - Use the "WordPress Importer" to import the Custom Fields .xml file that you just downloaded
    - Once done, refresh your front page and it should look like ![frontpage-yayyy](https://cloud.githubusercontent.com/assets/2896608/6678811/98019ea0-cbfc-11e4-8457-1ea76907d93d.png)
    (**Note**: If you see extra text on the page, eg. "Just another WordPress site" you can remove it: "Settings", "General", and leave the "Tagline" empty)

:dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer:
#### **YAY YOU MADE IT HERE** ####
:dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer::clap::dancer:


# Start Editing #

Depends on how the pages are structured and coded, you will have to implement changes via

## "Pages" from Dashboard ##
  - e.g., if you want to change the big heading on the Homepage from "We Are Building a Global Movement to Protect the Free and Open Web" to "Hello World".  You can to go Dashboard -> "Pages" -> "Home" and replace text in the WYSIWYG editor.

## Theme code ##
  - this is what's in the `/wp-content/themes/OneMozilla-PolicyFellows/`
  - usually if you want to change the stylesheet or anything more complicated than simple text changes, you will have to make edits here

## Plugin ##
  - Ummm, I'm not too sure about this part as this site was originially built by a contractor and there wasn't any docs for us to refer to.  I *think* we can just leave the plugin settings unchanged.

  - ##### The "Custom Fields" Plugin #####
    - This plugin is used to expose WYSIWYG editors for site admins to change content on the website(e.g., the `Call to action` section on the "Home" page edit screen).
    - If the stakeholders or site admins don't request this feature for whatever the upcoming site changes, you can leave this plugin unchanged.
    - If you are asked to add WYSIWYG editors to the page edit panel, take a look and mimic how `Call to action` custom field is built.  Places to look:
      - "Custom Fields" from sidebar menu
      - "Pages" from sidebar menu


# Pushing Changes to PRODUCTION #

Okay, this might not be the part you like(sorry!:cold_sweat:).  I chose this approach because

1. There's no "version control" for WordPress config and database related stuff.  The only thing I can version control is the Theme code (which is linked to [GitHub repo](https://github.com/mozilla/advocacy.mozilla.org))
2. I know what exactly I'm "pushing" to the production site. (whereas importing stuff from `localhost` to `PROD` could introduce weird issues that I have no clue about)

There are a few steps to pushing changes to `PROD`...

## Pushing Theme ##

### Pushing code to `develop` branch ###

For this particular site (https://advocacy.mozilla.org/) we don't have a `STAGING` instance.  (I *think* we turned what was used to be `STAGING` into `PROD`).  So `develop` is what we are linking the `PROD` to.

- Pushing code to `develop` branch
- To stick with the typical **git flow**, merge `develop` to `master` as usually `develop` represents the working branch and `master` represents what's on `PROD`

**[Note]** If we get a chance we should make `PROD` links to `master` branch instead (see https://github.com/mozilla/advocacy.mozilla.org/issues/9).

### Apply Theme to `PROD` ###

- ssh to the server
- `cd /var/www/wp-content`
- `git status` and see if some changes were added via the WordPress Dashboard(https://advocacy.mozilla.org/wp-admin) since you last git pull/push.
- If all look good `git pull origin develop` to pull changes.

## Apply Non-theme Changes to `PROD` ##

- This is **simply** just copying and pasting work. Very tedious steps but I personally think it's better than debugging database issues.
- Basically just put your localhost Dashboard and `PROD` Dashboard side by side, copy the non-theme related changes from `localhost` and paste them to `PROD`.

## Restart Server ##

If you don't see your changes live, try ssh to the server and run `sudo service nginx restart;sudo service php5-fpm restart;sudo service varnish restart`


# ========== :dancers: D O N E :dancers: ========== #

:joy::joy::joy: Congratz on unlocking a "I-did-not-know-I-had-so-much-patience" badge! :joy::joy::joy:

