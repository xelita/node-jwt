var uuid = require('node-uuid');
var nJwt = require('njwt');

var signingKey = uuid.v4();
console.log('signingKey: ' + signingKey);

var claims = {
  sub: '123456789',
  iss: 'JWTGEN',
  permissions: 'lrm-access'
}

var jwt = nJwt.create(claims, signingKey)
console.log('JWT: ' + jwt)
