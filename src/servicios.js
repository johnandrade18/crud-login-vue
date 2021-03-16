import axios from 'axios';

export default class Servicios{
    url="http://localhost:3000";
    getAll(){
        return axios.get(this.url);
    }
}