// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    this.set('allUserss', params.users);

    this.trigger('users_results_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      allUsers: null
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy
  });
};
