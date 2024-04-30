class Pc {
    name: string;
    serie: string
    constructor(descripcion:string, serie:string)
    {
        this.name=name; 
        this.serie=serie;
    }
}

interface IdDescripcion {
    marca: String;
    memory: string;
    procesador: string;
    alamacenamiento:string;
}

interface IdSerie{
    numero: number;
    fecha: string;
}
interface IdPartes{
    marca:string;
    codigo:number;

}
 const descripcion: IdDescripcion[] = [
{
    marca: 'Lenovo',
    memory: 'Ram 8gb',
    alamacenamiento: '1 TB',
    procesador: 'Core i5', [
        {
           numero: 11
           fecha: '30 Abril 2023',
        }
        {
            marca:'Intel'
            codigo: 001,
        }
    ],

}











]




  