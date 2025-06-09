const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/Doenças', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Doenças.html'));
});

app.get('/quizz', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'quizz.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
