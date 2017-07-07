NS('Selectra.modules.users');

Selectra.modules.users.Controller = function(sb) {
  return function(model) {
    var newUser = function() {
      this.sb.emit('users.new_user', {});
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
      newUser: newUser
    };

    return controller;
  };
};
