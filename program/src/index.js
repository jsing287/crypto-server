import token from '../components/CoinbaseToken.js';
import axios from 'axios';
const config = {
    method: 'GET',
    url: 'https://api.coinbase.com/api/v3/brokerage/accounts',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
};
async function runRequest() {
    try {
        const response = await axios(config);
        if (response.status == 200) {
            return response.data;
        }
        else {
            return response;
        }
    }
    catch (error) {
        return (error);
    }
}
const outcome = await runRequest();
console.log(outcome);
console.log(token);
//# sourceMappingURL=index.js.map