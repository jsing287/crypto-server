"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const coinbaseApiKey = require("../coinbase_cloud_api_key.json");
const keyName = coinbaseApiKey.name;
const keySecret = coinbaseApiKey.privateKey;
const requestMethod = 'GET';
const url = 'api.coinbase.com';
const requestPath = '/api/v3/brokerage/accounts';
const serviceName = 'retail_rest_api_proxy';
const algorithm = 'ES256';
const uri = requestMethod + ' ' + url + requestPath;
const options = {
    algorithm,
    header: {
        kid: keyName,
        alg: "ES256",
    }
};
const token = jwt.sign({
    aud: [serviceName],
    iss: 'coinbase-cloud',
    nbf: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 120,
    sub: keyName,
    uri,
}, keySecret, options);
module.exports = { token };
