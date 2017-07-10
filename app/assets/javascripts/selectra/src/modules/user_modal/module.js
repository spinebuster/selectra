// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.user_modal');

Selectra.modules.user_modal.Module = function() {
  return Commons.base.Module(
    Selectra.modules.user_modal.Model,
    Selectra.modules.user_modal.View,
    Selectra.modules.user_modal.Controller
  );
};
