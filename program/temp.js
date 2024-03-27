'use strict';
const {sign} = require('jsonwebtoken');
const cryptoPackage = require('crypto');
const coinbaseApiKey = require('../coinbase_cloud_api_key.json');
const keyName = coinbaseApiKey.name;
const keySecret = coinbaseApiKey.privateKey;
const requestMethod = 'GET';
const url = 'api.coinbase.com';
const requestPath = '/api/v3/brokerage/accounts';
const serviceName = 'retail_rest_api_proxy';
const algorithm = 'ES256';
const uri = requestMethod + ' ' + url + requestPath;
const token = sign({
  aud: [serviceName],
  iss: 'coinbase-cloud',
  nbf: Math.floor(Date.now() / 1000),
  exp: Math.floor(Date.now() / 1000) + 120,
  sub: keyName,
  uri,
}, keySecret, {
  algorithm,
  header: {
    kid: keyName,
    nonce: cryptoPackage.randomBytes(16).toString('hex'),
  },
});
console.log('export JWT=' + token);
