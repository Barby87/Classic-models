import axios from 'axios';

export const conectionApi = async function() {
    try {
        let response = await axios.get('https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels/secure/ordenes');
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log('error', error);
    }
}