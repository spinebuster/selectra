// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Selectra.modules.users_filters');

Selectra.modules.users_filters.Module = function() {
  return Commons.base.Module(
    Selectra.modules.users_filters.Model,
    Selectra.modules.users_filters.View,
    Selectra.modules.users_filters.Controller
  );
};
