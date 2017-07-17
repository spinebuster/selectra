// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.locations_filters');

Selectra.modules.locations_filters.Module = function() {
  return Commons.base.Module(
    Selectra.modules.locations_filters.Model,
    Selectra.modules.locations_filters.View,
    Selectra.modules.locations_filters.Controller
  );
};
