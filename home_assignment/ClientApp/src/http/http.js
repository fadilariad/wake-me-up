import axios from 'axios';


class Api {
    baseURL = '/api';
    constructor(model) {
        this.model = this.baseURL + model;
    }
    async get(query = ''){
        try {
            const result = await axios.get(`${this.model}${query && query}`);
            return result.data;
        }
        catch (e) {
        }
    }
    async post(params){
        try {
            const result = await axios.post(this.model,params);
            return result.data;
        }
        catch (e) {
            const result = {};
            result.error = e;
            return result;
        }
    }

}

export default Api;
