# 🚀 Documentación de la API de Mediciones Ambientales

Esta API proporciona acceso a datos de mediciones ambientales como temperatura, humedad y estado de válvulas.

## Requisitos Previos

Antes de utilizar la API, asegúrate de tener instalado Node.js y npm en tu sistema.

## 💻 Instalación

1. Clona el repositorio:
    
    ```bash
    git clone https://github.com/jesuswav/final-project-api
    ```
    
2. Instala las dependencias:
    
    ```bash
    npm install
    ```
    
3. Iniciar el servidor:
    
    ```bash
    npm run dev
    ```
    

El servidor estará disponible en `http://localhost:3008`.

## ☁️ Endpoints

### 1. Obtener todas las mediciones

**URL:** `http://localhost:3008/api/mediciones`

**Método:** `GET`

**Respuesta:**

```json
{
    "mediciones": [
        {
            "id": "2168",
            "humedad_ambiente": "12.10",
            "humedad_tierra": "0.00",
            "temperatura": "36.60",
            "hora": "2025-03-03 12:31:32",
            "estado_valvula": "1"
        },
        {
            "id": "2167",
            "humedad_ambiente": "12.10",
            "humedad_tierra": "0.00",
            "temperatura": "36.80",
            "hora": "2025-03-03 12:11:31",
            "estado_valvula": "1"
        }
    ]
}
```

### 2. Obtener datos de temperatura

**URL:** `http://localhost:3008/api/temperatura`

**Método:** `GET`

**Respuesta:**

```json
{
    "temperatura": [
        {
            "temperatura": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "temperatura": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
```

### 3. Obtener datos de humedad ambiente

**URL:** `http://localhost:3008/api/humedad`

**Método:** `GET`

**Respuesta:**

```json
{
    "humedad": [
        {
            "humedad": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "humedad": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
```

### 4. Obtener datos de humedad de tierra

**URL:** `http://localhost:3008/api/humedad_tierra`

**Método:** `GET`

**Respuesta:**

```json
{
    "humedadTierra": [
        {
            "humedad_tierra": "36.60",
            "fecha": "2025-03-03 12:31:32"
        },
        {
            "humedad_tierra": "36.80",
            "fecha": "2025-03-03 12:11:31"
        }
    ]
}
```