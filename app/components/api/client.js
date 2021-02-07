import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.43.188:4000/shop',  //Put here your local IP @
});