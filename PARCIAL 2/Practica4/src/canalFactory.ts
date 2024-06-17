import { v4 as uuidv4 } from 'uuid';

//Interfaz para manejar el control canal
export interface Canal {
  id: string;
  nombre: string;
}
//manejo de uuid para manejar id único
export function createCanal(nombre: string): Canal {
  return {
    id: uuidv4(),
    nombre,
  };
}
