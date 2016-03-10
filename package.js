Package.describe({
  name: 'loren:server-session',
  version: '0.1.0',
  summary: 'Server-side per-connection Session, NOT stored in Mongo',
  git: 'https://github.com/lorensr/server-session.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript',
           'ddp'], 'server');

  api.addFiles('server-session.js', 'server');

  api.export('Session', 'server');
});

Package.onTest(function(api) {
  api.use(['ecmascript',
           'tinytest',
           'loren:server-session'], 'server');

  api.addFiles('server-session-tests.js');
});
