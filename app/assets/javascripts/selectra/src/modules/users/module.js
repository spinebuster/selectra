NS('Selectra.modules.users');

Selectra.modules.users.Module = function() {
  return Commons.base.Module(
    Selectra.modules.users.Model,
    Selectra.modules.users.View,
    Selectra.modules.users.Controller
  );
};
