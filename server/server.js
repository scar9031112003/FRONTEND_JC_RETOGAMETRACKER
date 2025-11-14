// server/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Ejemplo de ruta API
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: '¡Hola desde el servidor Express!' });
  
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});
