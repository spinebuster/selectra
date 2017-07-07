// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_filters');

Selectra.modules.users_filters.Controller = function(sb) {
  return function(model) {
    var getUsers = function(params) {
      this.model.getUsers(params);
    };

    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);
    };

    var destroy = function() {
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      getUsers: getUsers
    };

    return controller;
  };
};
