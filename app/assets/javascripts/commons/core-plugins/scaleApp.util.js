NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppUtil = function(core) {
  core.Sandbox.prototype.moment = moment;
  core.Sandbox.prototype.signals = signals;
  core.Sandbox.prototype.utils = {
    date: {
      // La siguiente funcion convierte una fecha
      // en una cadena entendible por la base de datos
      // el formato es: 'YYYY-MM-DD'
      toDBString: function(date) {
        return moment(date.toString()).format('YYYY-MM-DD');
      },

    }
  };
};
