NS('Commons.modules.navbar');

Commons.modules.navbar.Module = function() {
  return Commons.base.Module(
    Commons.modules.navbar.Model,
    Commons.modules.navbar.View,
    Commons.modules.navbar.Controller
  );
};
