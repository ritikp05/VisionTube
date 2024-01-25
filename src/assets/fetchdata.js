import axios from 'axios'

const BASE_URL ='https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      // 'X-RapidAPI-Key':'5b65811d65mshe4a2b5cb43b53d3p12741cjsn49986bc41eca',
      'X-RapidAPI-Key': 'dc17cff67dmsh45597ba2856f683p111186jsn59feb92fdbf7',
      'X-RapidAPI-Host':'youtube-v31.p.rapidapi.com'
    }
  };


export async function fetchdata(url){
const {data}=await axios.get(`${BASE_URL}/${url}`,options)
return data;  
}