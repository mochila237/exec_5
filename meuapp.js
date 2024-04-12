const http = require('http');
const axios = require('axios');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    try {
      const apiResponse = await axios.get('https://catfact.ninja/fact');
      const data = apiResponse.data;
      console.log(data);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    } catch (error) {
      console.error('Erro ao acessar a API:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro ao acessar a API');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint não encontrado');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
