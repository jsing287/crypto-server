
import token from '../components/CoinbaseToken.js'
import axios, {AxiosResponse, AxiosRequestConfig, AxiosHeaderValue} from 'axios';

const config: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://api.coinbase.com/api/v3/brokerage/accounts',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + <AxiosHeaderValue>token
  }
};


async function runRequest() : Promise<AxiosResponse<any, any>>
{
    try{
        const response = await axios(config)
        if(response.status == 200)
        {
            return response.data
        }
        else
        {
            return response
        }
            
       
    }
    catch(error)
    {
        return <AxiosResponse<any, any>>(error)
    }

}

const outcome = await runRequest();
console.log(outcome)
console.log(token);
