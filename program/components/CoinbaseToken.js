import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import crypto from 'crypto';
// import coinbaseApiKey = require('../coinbase_cloud_api_key.json');
dotenv.config();
const key_name = process.env.KEY_NAME;
const key_secret = process.env.KEY_SECRET;
const request_method = 'GET';
const url = 'api.coinbase.com';
const request_path = '/api/v3/brokerage/accounts';
const algorithm = 'ES256';
const uri = request_method + ' ' + url + request_path;
const options = {
    algorithm,
    header: {
        kid: key_name,
        nonce: crypto.randomBytes(16).toString('hex'),
    },
};
const token = jwt.sign({
    iss: 'coinbase-cloud',
    nbf: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 120,
    sub: key_name,
    uri,
}, key_secret, options);
export default token;
//# sourceMappingURL=CoinbaseToken.js.map