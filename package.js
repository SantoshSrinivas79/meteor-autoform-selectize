Package.describe({
  name: 'smartunit:autoform-selectize',
  summary: 'Custom "selectize" input type for AutoForm',
  version: '2.3.3',
  git: 'https://github.com/alopex-smartunit/meteor-autoform-selectize.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('templating');
  api.use('blaze');
  api.use('aldeed:autoform');
  api.use('underscore');
  api.addFiles([
    'autoform-selectize.html',
    'autoform-selectize.js',
    'autoform-selectize-input.html',
    'autoform-selectize-input.js',
    'themes/bootstrap3.css',
  ], 'client');
});
