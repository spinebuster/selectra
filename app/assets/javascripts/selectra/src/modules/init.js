// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules');

Selectra.modules.init = function() {
  // Registra todos los módulos de la aplicación Selectra en scaleApp
  var initialize = function(core) {
    core.register('ModalSpinner', Commons.modules.modal_spinner.Module());
    core.register('Navbar', Commons.modules.navbar.Module());

    core.register('Layout', Selectra.modules.layout.Module());
    core.register('Menu', Selectra.modules.menu.Module());
  };

  return {
    initialize: initialize
  };
}();
