// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.location_modal');

Selectra.modules.location_modal.Module = function() {
  return Commons.base.Module(
    Selectra.modules.location_modal.Model,
    Selectra.modules.location_modal.View,
    Selectra.modules.location_modal.Controller
  );
};
