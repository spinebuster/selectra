// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Model = function(sb) {
  this.sb = sb;

  var includeUser = function(newUser) {
    var users = this.get('allUsers');
    users.push(newUser);
    users = _.sortBy(users, function(user) {
      return user.name.toLowerCase();
    });
    this.set('allUsers', users);

    var message =
      'El usuario \'' + newUser.name + '\' ha sido creado.';
    this.updateMessage(message, 'success');

    this.trigger('users_results_loaded');
    $('#user_' + newUser.id + ' td').effect(
      'highlight', {color: '#c1e2b3'}, 2000
    );
  };

  var updateUser = function(newUser) {
    var users = this.get('allUsers');
    var userUpdated = _.find(users, function(user) {
      return user.id == newUser.id;
    });
    var index = _.indexOf(users, userUpdated);
    users[index] = newUser;
    this.set('allUsers', users);

    var message =
      'El usuario \'' + newUser.name + '\' ha sido actualizado.';
    this.updateMessage(message, 'success');

    this.trigger('users_results_loaded');
    $('#user_' + newUser.id + ' td').effect(
      'highlight', {color: '#c1e2b3'}, 2000
    );
  };

  var deleteUser = function(userId) {
    sb.request({
      resourceId: 'service_deleteUser',
      data: {
        id: userId,
        tpl: 'with_errors'
      },
      success: sb.bind(function(data) {
        if (_.isEmpty(data.data.errors)) {
          var users = this.get('allUsers');
          var usersUpdated = _.reject(users, function(user) {
            return user.id == userId;
          });
          this.set('allUsers', usersUpdated);

          var message = 'El usuario \'' + data.data.name +
            '\' ha sido eliminado.';
          this.updateMessage(message, 'success');
        } else {
          this.updateMessage(data.data.errors.can_delete, 'danger');
        }

        this.trigger('users_results_loaded');
      }, this)
    });
  };

  var updateMessage = function(message, status) {
    this.set('message', message);
    this.set('newMessage', true);
    this.set('status', status);
  };

  var start = function(params) {
    this.set('allUsers', params.users);

    this.trigger('users_results_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      allUsers: null,
      message: null,
      newMessage: false,
      status: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    includeUser: includeUser,
    updateUser: updateUser,
    updateMessage: updateMessage,
    deleteUser: deleteUser
  });
};
