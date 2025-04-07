// Importar dependencias necesarias
import { Router } from 'express';
import { createReadStream } from 'fs';
import { parse } from 'csv';

const router = Router();

// Función para obtener mediciones
export async function getMediciones(req, res) {
  let results = [];
  try {
    createReadStream("./datosRiego3.csv")
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        res.status(200).json({ mediciones: results });
        console.log("CSV parsing complete");
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

// Función para obtener temperatura
export async function getTemperature(req, res) {
  let results = [];
  try {
    createReadStream("./datosRiego3.csv")
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        const temperatura = results.map((item) => ({
          temperatura: item.temperatura,
          fecha: item.hora
        }));
        res.status(200).json({ temperatura });
        console.log("CSV parsing complete");
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

// Función para obtener humedad
export async function getHumedad(req, res) {
  let results = [];
  try {
    createReadStream("./datosRiego3.csv")
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        const humedad = results.map((item) => ({
          humedad: item.humedad,
          fecha: item.hora
        }));
        res.status(200).json({ humedad });
        console.log("CSV parsing complete");
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}

// Función para obtener humedad de la tierra
export async function getHumedadTierra(req, res) {
  let results = [];
  try {
    createReadStream("./datosRiego3.csv")
      .pipe(parse({ trim: true, skip_empty_lines: true, columns: true }))
      .on("data", (row) => {
        results.push(row);
      })
      .on("end", () => {
        const humedad_tierra = results.map((item) => ({
          humedad_tierra: item.humedad_tierra,
          fecha: item.hora
        }));
        res.status(200).json({ humedad_tierra });
        console.log("CSV parsing complete");
      });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los datos' });
  }
}
