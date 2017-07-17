// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_results');

Selectra.modules.locations_results.Module = function() {
  return Commons.base.Module(
    Selectra.modules.locations_results.Model,
    Selectra.modules.locations_results.View,
    Selectra.modules.locations_results.Controller
  );
};
