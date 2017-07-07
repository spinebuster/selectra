// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.modal_spinner');

Commons.modules.modal_spinner.Module = function() {
  return Commons.base.Module(
    Commons.modules.modal_spinner.Model,
    Commons.modules.modal_spinner.View,
    Commons.modules.modal_spinner.Controller
  );
};
