// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules');

Selectra.modules.init = function() {
  // Registra todos los módulos de la aplicación Selectra en scaleApp
  var initialize = function(core) {
    core.register('Navbar', Commons.modules.navbar.Module());
    core.register('SpinnerModal', Commons.modules.spinner_modal.Module());

    core.register('Layout', Selectra.modules.layout.Module());
    core.register('Menu', Selectra.modules.menu.Module());
    core.register('Users', Selectra.modules.users.Module());
    core.register('UsersFilters', Selectra.modules.users_filters.Module());
    core.register('UsersResults', Selectra.modules.users_results.Module());
    core.register('UserModal', Selectra.modules.user_modal.Module());
  };

  return {
    initialize: initialize
  };
}();
