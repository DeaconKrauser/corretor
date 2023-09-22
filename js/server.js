const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/api/corrigir', async (req, res) => {
    try {
        const { text } = req.body;
        // Implemente a lógica de correção de erros aqui (substituição de palavras, uso de bibliotecas externas, etc.)
        // Por enquanto, este exemplo simplesmente retorna o mesmo texto.

        res.send({ textoCorrigido: text });
    } catch (error) {
        console.error('Erro ao corrigir texto:', error);
        res.status(500).send('Erro ao corrigir texto.');
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
