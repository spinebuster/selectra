// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.

//= require ../commons/libs/jquery
//= require ../commons/libs/jquery-ui
//= require ../commons/libs/amplify
//= require ../commons/libs/signals
//= require ../commons/libs/bootstrap
//= require ../commons/libs/crossroads
//= require ../commons/libs/handlebars
//= require ../commons/libs/hasher
//= require ../commons/libs/json2
//= require ../commons/libs/moment
//= require ../commons/libs/namespaces
//= require ../commons/libs/scaleApp
//= require ../commons/libs/underscore
//= require ../commons/libs/backbone
//= require_tree ../commons/libs/locales
//= require ../commons/libs/bootstrap-datetimepicker
//= require ../commons/libs/jquery-validation/dist/jquery.validate.min.js
//= require ../commons/libs/jquery-validation/dist/additional-methods.min.js
//= require ../commons/libs/jquery-validation/localization/messages_es.js
//= require ../commons/libs/jquery.tablesorter.js
//= require ../commons/libs/bluebird.js
//= require ../commons/libs/sweet-alert.js
//= require ../commons/libs/chosen.jquery.js

// Cargar los templates
//= require_tree ../commons/templates
//= require_tree ./templates/

// Cargar plugins del core
//= require_tree ../commons/core-plugins
//= require ./src/core-plugins/init

// Cargar clases base
//= require ../commons/modules/base_module

// Cargar el codigo fuente
//= require ./src/application
//= require ../commons/handlebars-helpers
//= require ./src/handlebars-helpers
//= require ./src/services
//= require_tree ./src/router
//= require ./src/modules/init

// Cargar los modulos (El fichero de Modulo, el ultimo)
//= require_tree ../commons/modules/modal_spinner
//= require_tree ../commons/modules/navbar
//= require_tree ./src/modules/layout
//= require_tree ./src/modules/menu
//= require_tree ./src/modules/users
//= require_tree ./src/modules/users_filters
// require_tree ./src/modules/users_results
