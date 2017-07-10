// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_results');

Selectra.modules.users_results.Module = function() {
  return Commons.base.Module(
    Selectra.modules.users_results.Model,
    Selectra.modules.users_results.View,
    Selectra.modules.users_results.Controller
  );
};
