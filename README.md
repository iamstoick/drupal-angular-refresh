drupal-angular-refresh
======================

A simple demo of using Angular to refresh (without reload) Drupal content.

##Installation

1. Install `Angular Refresh` module.
2. Revert json_article feature. `drush fr json_article -y`

After installation visit the demo page here `$base_url` + `nodes/refresh/list`.

##Notes

1. Make sure that you have contents on your `Article` content type with `title`,
   `body`, and `image` fields.
2. Clear all the caches to avoid 404. `drush cc all`
3. If you are going to play with `Angular Refersh` module just be sure to have all
   dependencies installed. Please refer to package.json dependency section.

##Requirements:

1. Nodejs - Please refer to Nodejs installation guide for your OS.
2. Grunt `npm install -g grunt`
3. Grunt Contrib Watch `npm install grunt-contrib-watch --save-dev`
4. Grunt Contrib Jshint `npm install grunt-contrib-jshint --save-dev`
5. Grunt Contrib Concat `npm install grunt-contrib-concat --save-dev`
5. Grunt Contrib CLI `npm install grunt-cli --save-dev`

##Dependencies

1. [Angularjs module](https://drupal.org/project/angularjs)
2. [Libraries](https://drupal.org/project/libraries)
3. [Views](https://drupal.org/project/views)
4. [Views Datasource](https://drupal.org/project/views_datasource)
