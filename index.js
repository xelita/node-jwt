var uuid = require('node-uuid');
var nJwt = require('njwt');

// Signing key
var signingKey = uuid.v4();
console.log('signingKey: ' + signingKey);

// Claims
var claims = {
  sub: '123456789',
  iss: 'JWTGEN',
  permissions: 'lrm-access'
}

// Token generation
var token = nJwt.create(claims, signingKey).compact();
console.log('JWT: ' + token)

// Token verification
nJwt.verify(token, signingKey, function(err, verifiedJwt) {
  if(err){
    console.error(err);
  }else{
    console.log(verifiedJwt);
  }
});
