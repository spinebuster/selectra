// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.menu');

Selectra.modules.menu.Model = function(sb) {
  this.sb = sb;

  var updateSidebar = function(sidebar) {
    this.set('sidebar', sidebar);
  };

  var start = function(params) {
    this.set('sidebar', params.sidebar);

    this.trigger('model_loaded');
  };

  var destroy = function() {
  };

  return this.sb.backbone.Model.extend({
    // Guardar el SandBox
    sb: sb,

    // Valores de los filtros de búsqueda
    defaults: {
      sidebar: null,
      submenus: {
        users: 'Gestión de usuarios',
        locations: 'Gestión de localizaciones',
      }
    },

    // Inicializa el modelo
    start: start,
    destroy: destroy,
    updateSidebar: updateSidebar
  });
};
