import express from 'express';
import bodyParser from 'body-parser';
import { createCanal, Canal } from './canalFactory';
import { AxiosClient, HttpClient } from './httpClient';

const app = express();
const port = process.env.PORT || 3000;

//poder aceptar json
app.use(bodyParser.json());

// para crear y devolver un canal de la entidad maestra
app.post('/canales', (req, res) => {
  const { nombre } = req.body;
  const canales: Canal = createCanal(nombre);
  res.json(canales);
});

const client: HttpClient = new AxiosClient();

app.get('/canales-axios', async (req, res) => {
  try {

    //Aquí se puede cambiar con  una URL de un compañero de clase si es necesario
    //para obtener el json 

    const data = await client.get('https://jsonplaceholder.typicode.com/todos/1');
    res.json(data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});




app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

