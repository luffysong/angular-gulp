require('../routes/index');
angular.module('templates', []);
angular.module('@@app', ['@@app.routes', 'templates']);
angular.bootstrap(document, ['@@app']);
