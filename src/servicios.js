import axios from 'axios';

export default class Servicios{
    url="https://crud-api-nodejs.herokuapp.com/";
    getAll(){
        return axios.get(this.url);
    }
}