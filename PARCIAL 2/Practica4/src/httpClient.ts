import axios from 'axios';


//se usara axios para la solución
export interface HttpClient {
  get(url: string): Promise<any>;
}

//se llama una Promesa para que obtener datos desde cualquier URl
//facilitando el patron factory
export class AxiosClient implements HttpClient {
    async get(url: string): Promise<any> {
      const response = await axios.get(url);
      return response.data;
    }
  }
