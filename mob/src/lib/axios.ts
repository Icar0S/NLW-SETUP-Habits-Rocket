import axios from "axios";

export const api = axios.create({
  baseURL: 'http://192.168.1.67:3333'//192.168.1.67 ou ..0.116 
})