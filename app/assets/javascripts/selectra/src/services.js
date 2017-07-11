NS('Selectra');

Selectra.services = function() {
  var decoder = function(data, status, xhr, success, error) {
    if (status === 'success') {
      success(data, status);
    } else if (status === 'fail' || status === 'error') {
      error(xhr.responseText, status);
    }
  };

  // Define todas las peticiones request que se harán con Amplify
  var initialize = function() {
    amplify.request.define('service_users', 'ajax', {
      url: '/users.json',
      type: 'GET',
      decoder: decoder
    });

    amplify.request.define('service_newUser', 'ajax', {
      url: '/users.json',
      type: 'POST',
      decoder: decoder
    });

    amplify.request.define('service_user', 'ajax', {
      url: '/users/{id}.json',
      type: 'GET',
      decoder: decoder
    });
  };

  return {
    initialize: initialize
  };
}();
