import jwt = require('jsonwebtoken');
import coinbaseApiKey = require('../coinbase_cloud_api_key.json');

const keyName: string = coinbaseApiKey.name;
const keySecret: string = coinbaseApiKey.privateKey;
const requestMethod: string = 'GET';
const url: string = 'api.coinbase.com';
const requestPath: string = '/api/v3/brokerage/accounts';
const serviceName: string = 'retail_rest_api_proxy';
const algorithm: jwt.Algorithm = 'ES256';
const uri: string = requestMethod + ' ' + url + requestPath;

const options: jwt.SignOptions = {
  algorithm,
  header: {
    kid: keyName,
    alg: "ES256",

}
}


const token = jwt.sign(
    {
      aud: [serviceName],
      iss: 'coinbase-cloud',
      nbf: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 120,
      sub: keyName,
      uri,
    },
    keySecret,
    options 
    );

module.exports = {token} ;
