NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppBackbone = function(core) {
  core.Sandbox.prototype.backbone = Backbone;
};
