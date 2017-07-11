// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.Model = function(sb) {
  this.sb = sb;

  var createUser = function(user) {
    // Mostramos spinner y deshabilitamos el botón de crear
    $('.user-loading').show();
    $('button#btnCreateUser').attr('disabled', 'disabled');

    sb.request({
      resourceId: 'service_newUser',
      data: {
        user: user
      },
      success: sb.bind(function(data) {
        // Ocultamos spinner y habilitamos botón crear
        $('.user-loading').hide();
        $('button#btnCreateUser').removeAttr('disabled');

        this.trigger('create_user_ended', data);
      }, this)
    });
  };

  var getUser = function(userId, next) {
    sb.request({
      resourceId: 'service_user',
      data: {
        id: userId
      },
      success: sb.bind(function(data) {
        this.set('user', data.data);
        next(null);
      }, this)
    });
  };

  var editUser = function(userId, user) {
    // Mostramos spinner y deshabilitamos los botones editar y borrar
    $('.user-loading').show();
    $('button#btnEditUser').attr('disabled', 'disabled');

    sb.request({
      resourceId: 'service_editUser',
      data: {
        id: userId,
        user: user
      },
      success: sb.bind(function(data) {
        // Ocultamos spinner y habilitamos botones editar y borrar
        $('.user-loading').hide();
        $('button#btnEditUser').removeAttr('disabled');

        this.trigger('edit_user_ended', data);
      }, this)
    });
  };

  var start = function(params) {
    var self = this;
    if (_.isObject(params.userId)) {
      self.trigger('data_loaded');
    } else {
      scaleApp.util.runWaterfall(
        [
          sb.bind(getUser, this, params.userId)
        ], function(err, result) {
          self.trigger('data_loaded');
        }
      );
    }
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      user: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    createUser: createUser,
    getUser: getUser,
    editUser: editUser
  });
};
