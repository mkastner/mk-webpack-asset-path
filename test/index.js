let
  test = require('tape'),
  webpackAssetPath = require('../index.js');

test('read default', function(t) {

  let path = webpackAssetPath('public','js');
  t.equal(path, '/build/public-aaa.js');

  path = webpackAssetPath('unknown','js');
  //t.equal(path, '/build/public-aaa.js');

  t.end();
});
