NS('Selectra.router');

Selectra.router.controller = function() {
  var router = null;

  /****************************************************************************/
  /********************FUNCIONES AUXILIARES PARA HASHER************************/
  /****************************************************************************/

  function parseHash(newHash, oldHash) {
    if (newHash === '') {
      // redirect to "home" hash without keeping the empty hash on the history
      hasher.replaceHash('users');
    } else {
      router.parse(newHash);
    }
  }

  function setHashSilently(hash) {
    hasher.changed.active = false; //disable changed signal
    hasher.setHash(hash); //set hash without dispatching changed signal
    hasher.changed.active = true; //re-enable signal
  }

  /**
   * Inicializa el router
   */
  var initialize = function(core) {

    var stopAll = function() {
      // Parar todos los modulos
      core.stop();
    };

    // Devuelve un string con los parámetros de la url
    var getCurrentUrlParams = function() {
      var actualHash = hasher.getHash();
      var urlParameters = actualHash.split('?');
      if (urlParameters.length > 1) {
        return '?' + urlParameters[1];
      } else {
        return '';
      }
    };

    /**
     * Inicia los módulos básicos de la página (layout, spinner, menú de
     * navegación y error)
     */
    var startBaseModules = function() {
      stopAll();

      var sidebar = hasher.getHash();

      core.start('Layout', {
        options: {
          el: '#main'
        }
      });
      core.start('Navbar', {
        options: {
          el: '#navbar',
        }
      });
      core.start('Menu', {
        options: {
          el: '#menu',
          sidebar: sidebar
        }
      });
    };

    var stopSidebarModules = function() {
      core.stop('Users');
      core.stop('UsersFilters');
      core.stop('UsersResults');
      core.stop('Locations');
      core.stop('LocationsFilters');
      core.stop('LocationsResults');
    };

    var changeModuloSidebar = function(data) {
      stopSidebarModules();

      var id = data.replace('menu-', '');
      setHashSilently(id);
      var modulo = id.charAt(0).toUpperCase() + id.slice(1);

      core.start(modulo, {
        options: {
          el: '#central'
        }
      });
    };

    var users = function() {
      startBaseModules();

      core.start('Users', {
        options: {
          el: '#central'
        }
      });
    };

    var usersFilters = function(data) {
      core.stop('UsersFilters');
      core.stop('UsersResults');

      core.start('UsersFilters', {
        options: {
          el: '#users_filters'
        }
      });

      core.start('UsersResults', {
        options: {
          el: '#users_results', users: []
        }
      });
    };

    var usersResults = function(data) {
      core.stop('UsersResults');

      core.start('UsersResults', {
        options: {
          el: '#users_results',
          users: data.users
        }
      });
    };

    var startUserModal = function(data) {
      core.start('UserModal', {
        options: {
          el: '#userModal',
          userId: data.userId || {}
        }
      });
    };

    var stopUserModal = function() {
      core.stop('UserModal');
    };

    var locations = function() {
      startBaseModules();

      core.start('Locations', {
        options: {
          el: '#central'
        }
      });
    };

    var locationsFilters = function(data) {
      core.stop('LocationsFilters');
      core.stop('LocationsResults');

      core.start('LocationsFilters', {
        options: {
          el: '#locations_filters'
        }
      });

      core.start('LocationsResults', {
        options: {
          el: '#locations_results', locations: []
        }
      });
    };

    var locationsResults = function(data) {
      core.stop('LocationsResults');

      core.start('LocationsResults', {
        options: {
          el: '#locations_results',
          locations: data.locations
        }
      });
    };

    var startLocationModal = function(data) {
      core.start('LocationModal', {
        options: {
          el: '#locationModal',
          locationId: data.locationId || {}
        }
      });
    };

    var stopLocationModal = function() {
      core.stop('LocationModal');
    };

    var startModalSpinner = function(data) {
      core.start('spinnerModal', {
        options: {
          el: '#spinnerModal', params: data || {}
        }
      });
    };

    var stopModalSpinner = function() {
      core.stop('spinnerModal');
    };

    /****************************************************************************/
    /***********************MANEJADORES DE EVENTOS DE URL************************/
    /****************************************************************************/

    // Crear las rutas que atendera la aplicacion
    router = crossroads.create();
    router.addRoute('users', users);
    router.addRoute('locations', locations);
    //router.routed.add(console.log, console);

    core.on('menu.change_sidebar', changeModuloSidebar);
    // Users search filters
    core.on('users.users_filters', usersFilters);
    core.on('users_filters.users_results', usersResults);
    core.on('users.new_user', startUserModal);
    core.on('user_modal.close', stopUserModal);
    // Locations search filters
    core.on('locations.locations_filters', locationsFilters);
    core.on('locations_filters.locations_results', locationsResults);
    core.on('locations.new_location', startLocationModal);
    core.on('location_modal.close', stopLocationModal);

    // Eventos relacionados con arracar y parar el spinner

    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes, añade un listener de hash change
    if (!hasher.isActive()) {
      hasher.init(); //initialize hasher (start listening for history changes)
    }
  };

  // TODO: Meter las dos funciones en un plugin para llamarlas desde un unico sitio
  var decodeParams = function(params) {
    if (params && params.x) {
      return JSON.parse(params.x);
    } else {
      return {};
    }
  };

  var encodeParams = function(params) {
    return JSON.stringify(params);
  };

  return {
    initialize: initialize
  };
}();
