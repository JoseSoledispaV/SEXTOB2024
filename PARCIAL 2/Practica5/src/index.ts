// src/server.ts
import express from 'express';
import connectDB from './config/database';

// Importar repositorios y configuraciones
import canalRepository from './repositories/canalRepository';
import programaRepository from './repositories/programaRepository';
import guiaRepository from './repositories/guiaRepository';

const app = express();
const PORT = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas de ejemplo
app.post('/canal', async (req, res) => {
  const { nombre } = req.body;
  try {
    const canal = await canalRepository.createCanal(nombre);
    res.json(canal);
  } catch (error) {
    res.status(500).json({ error:"error" });
  }
});

// Ruta para crear un programa
app.post('/programa', async (req, res) => {
  const { programatv, categoria, tipo } = req.body;
  try {
    const programa = await programaRepository.createPrograma(programatv, categoria, tipo);
    res.json(programa);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el programa' });
  }
});

// Ruta para crear una guía
app.post('/guia', async (req, res) => {
  const { fecha, horatransmision, escalarating, canalId, programaId } = req.body;
  try {
    const guia = await guiaRepository.createGuia(fecha, horatransmision, escalarating, canalId, programaId);
    res.json(guia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la guía' });
  }
});

app.get('/canales', async (req, res) => {
  try {
    const canales = await canalRepository.getAllCanales();
    res.json(canales);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los canales' });
  }
});

// Ruta para obtener todos los programas
app.get('/programas', async (req, res) => {
  try {
    const programas = await programaRepository.getAllProgramas();
    res.json(programas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los programas' });
  }
});

// Ruta para obtener todas las guías
app.get('/guias', async (req, res) => {
  try {
    const guias = await guiaRepository.getAllGuias();
    res.json(guias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las guías' });
  }
});

app.get('/canal/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const canal = await canalRepository.getCanalById(id);
    if (!canal) {
      return res.status(404).json({ error: 'Canal no encontrado' });
    }
    res.json(canal);
  } catch (error) {
    res.status(500).json({ error:"error" });
  }
});

// Conectar a la base de datos y escuchar en el puerto
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
});
