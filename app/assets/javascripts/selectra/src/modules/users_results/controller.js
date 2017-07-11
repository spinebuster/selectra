// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Controller = function(sb) {
  return function(model) {
    var includeUser = function(user) {
      this.model.includeUser(user);
    };

    var editarProveedor = function(userId) {
      this.sb.emit('users.new_user', {
        userId: userId
      });
    };

    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);

      this.sb.on('user_modal.user_created',
        this.sb.bind(includeUser, this)
      );
    };

    var destroy = function() {
      this.sb.off('user_modal.user_created');
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      includeUser: includeUser,
      editarProveedor: editarProveedor
    };

    return controller;
  };
};
