NS('Selectra.modules.users');

Selectra.modules.users.Model = function(sb) {
  this.sb = sb;

  var start = function(params) {
    this.trigger('users_loaded');
    this.sb.emit('users.users_filters');
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
    destroy: destroy
  });
};
