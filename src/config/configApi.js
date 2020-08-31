import axios from 'axios';

let base_url = 'https://cors-anywhere.herokuapp.com/http://157.230.190.251/api/v1/cmodels';

export const conectionApi = async function(parametro1) {
    try {
        let response = await axios.get(`${base_url}/${parametro1}`);
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.log('error GET', error);
    }
}

export const postApiLogin = async function(user, pass){
    try {
        let response = await axios.post(`${base_url}/users/login`, {
            "username": user,
            "password": pass
        });
        return response.data;
    } catch(error) {
        console.log('error POST', error);
    }
}