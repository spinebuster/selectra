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
    };

    var locations = function() {
      startBaseModules();
    };

    var startModalSpinner = function(data) {
      core.start('ModalSpinner', {
        options: {
          el: '#modalSpinner', params: data || {}
        }
      });
    };

    var stopModalSpinner = function() {
      core.stop('ModalSpinner');
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

    // Eventos relacionados con arracar y parar el spinner
    // core.on('empleados.sincronizando', startModalSpinner);
    // core.on('empleados.sincronizando_ended', stopModalSpinner);

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
