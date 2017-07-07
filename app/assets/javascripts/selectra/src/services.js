NS('Selectra');

Selectra.services = function() {
  var organization = window.LCIberica.organization;

  var decoder = function(data, status, xhr, success, error) {
    if (status === 'success') {
      success(data, status);
    } else if (status === 'fail' || status === 'error') {
      error(xhr.responseText, status);
    }
  };

  // Define todas las peticiones request que se harán con Amplify
  var initialize = function() {
  };

  return {
    initialize: initialize
  };
}();
