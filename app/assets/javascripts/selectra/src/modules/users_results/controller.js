// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Controller = function(sb) {
  return function(model) {
    var includeUser = function(user) {
      this.model.includeUser(user);
    };

    var editUser = function(userId) {
      this.sb.emit('users.new_user', {
        userId: userId
      });
    };

    var updateUser = function(user) {
      this.model.updateUser(user);
    };

    var deleteUser = function(userId) {
      this.model.deleteUser(userId);
    };

    var initialize = function() {
      // Cargar las colecciones
      this.model.start(this.sb.options);

      this.sb.on('user_modal.user_created',
        this.sb.bind(includeUser, this)
      );
      this.sb.on('user_modal.user_updated',
        this.sb.bind(updateUser, this)
      );
      this.sb.on('user_modal.user_deleted',
        this.sb.bind(deleteUser, this)
      );
    };

    var destroy = function() {
      this.sb.off('user_modal.user_created');
      this.sb.off('user_modal.user_updated');
      this.sb.off('user_modal.user_deleted');
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy,
      includeUser: includeUser,
      editUser: editUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    };

    return controller;
  };
};
