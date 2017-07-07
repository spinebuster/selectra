// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

NS('Commons.modules.modal_spinner');

Commons.modules.modal_spinner.Controller = function(sb) {
  return function(model) {
    var initialize = function() {
      this.model.start(this.sb.options.params);
    };

    var destroy = function() {
    };

    var controller = {
      sb: sb,
      model: model,
      initialize: initialize,
      destroy: destroy
    };

    return controller;
  };
};
