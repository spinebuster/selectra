NS('Selectra.modules.locations');

Selectra.modules.locations.Module = function() {
  return Commons.base.Module(
    Selectra.modules.locations.Model,
    Selectra.modules.locations.View,
    Selectra.modules.locations.Controller
  );
};
