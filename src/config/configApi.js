import axios from 'axios';

export const conectionApi = async function(parametro) {
    try {
        let base_url = 'https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure';
        let response = await axios.get(`${base_url}/${parametro}`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log('error', error);
    }
}