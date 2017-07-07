NS('Selectra.modules.menu');

Selectra.modules.menu.Module = function() {
  return Commons.base.Module(
    Selectra.modules.menu.Model,
    Selectra.modules.menu.View,
    Selectra.modules.menu.Controller
  );
};
