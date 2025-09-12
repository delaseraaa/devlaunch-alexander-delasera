const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Agenda de Negocios funcionando');
});

// Aquí irán las rutas para eventos, contactos, etc.

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
