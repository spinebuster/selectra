// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.spinner_modal');

Commons.modules.spinner_modal.Module = function() {
  return Commons.base.Module(
    Commons.modules.spinner_modal.Model,
    Commons.modules.spinner_modal.View,
    Commons.modules.spinner_modal.Controller
  );
};
