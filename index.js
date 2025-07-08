const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde My Node Service!');
});

app.listen(3000, () => {
  console.log('Servicio corriendo en http://localhost:3000');
});
