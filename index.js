import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // 👈 Importamos CORS
import { getTemperature, getHumedad, getHumedadTierra, getMediciones } from './src/functions.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// 🔹 Habilitar CORS para permitir conexiones desde el frontend
app.use(cors({
  origin: 'http://localhost:8100', // 👈 Permite solicitudes desde el frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

// Rutas
app.get('/api/mediciones', getMediciones);
app.get('/api/temperatura', getTemperature);
app.get('/api/humedad', getHumedad);
app.get('/api/humedad_tierra', getHumedadTierra);

// Ruta por defecto
app.get("/", (req, res) => {
  res.send("API para registrar datos de mediciones con MySQL");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
