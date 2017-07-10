// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_filters');

Selectra.modules.users_filters.Model = function(sb) {
  this.sb = sb;

  var getUsers = function(params) {
    params.order = 'name';
    sb.request({
      resourceId: 'service_users',
      data: params,
      success: sb.bind(function(data) {
        $('.users-mostrando').hide();
        $('#collapseUsersFilters').collapse('hide');

        this.sb.emit('users_filters.users_results', {
          users: data.data.records
        });
      }, this)
    });
  };

  var start = function(params) {
    this.trigger('users_filters_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    getUsers: getUsers
  });
};
