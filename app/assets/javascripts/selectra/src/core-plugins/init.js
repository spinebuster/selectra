NS('Selectra.corePlugins');

Selectra.corePlugins.init = function() {
  var initialize = function(core) {
    core.use(Commons.corePlugins.ScaleAppBackbone);
    core.use(Commons.corePlugins.ScaleAppHasher);
    core.use(Commons.corePlugins.ScaleAppRequest);
    core.use(Commons.corePlugins.ScaleAppUnderscore);
    core.use(Commons.corePlugins.ScaleAppUtil);
    core.use(Commons.corePlugins.ScaleAppPromises);
  };

  return {
    initialize: initialize
  };
}();
