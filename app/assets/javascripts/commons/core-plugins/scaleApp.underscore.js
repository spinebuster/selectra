NS('Commons.corePlugins');

Commons.corePlugins.ScaleAppUnderscore = function(core) {
  core.Sandbox.prototype.each = _.each;
  core.Sandbox.prototype.bind = _.bind;
  core.Sandbox.prototype.bindAll = _.bindAll;
  core.Sandbox.prototype.isEmpty = _.isEmpty;
  core.Sandbox.prototype.isNull = _.isNull;
  core.Sandbox.prototype.compose = _.compose;
};
