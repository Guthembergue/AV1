const express = require('express')
const mongoose = require('mongoose')
const Produto = require('./src/models/Produto')


const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Inicio BACKEND');
});

app.get('/produto', (req, res) => {
  res.status(200).send('Inicio BACKEND DE NOVO e DENOVO');
});

app.get('/produto', async (req, res) => {
    try {
        const Produto = await Produto.find({});
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/produto', async (req, res) => {
    try {
        const produtos = await Produto.find({});
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/produto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findById(id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/produto', async (req, res) => {
    try {
        const produto = await Produto.create(req.body);
        res.status(200).json(produto);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
  });
  
  
  
  // Atualizar um produto
  app.put('/produto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByIdAndUpdate(id, req.body);
  
  
        // Não podemos encontrar nenhum produto no banco de dados
  
        if (!produto) {
            return res.status(404).json({ message: `Não é possível encontrar nenhum produto com o ID ${id}` });
        }
        const produtoAtualizado = await Produto.findById(id);
        res.status(200).json(produtoAtualizado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  
  
  // Excluir um produto
  app.delete('/produto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByIdAndDelete(id);
        if (!produto) {
            return res.status(404).json({ message: `Não é possível encontrar nenhum produto com o ID ${id}` });
        }
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });

mongoose.set("strictQuery", false)
mongoose.
connect(`mongodb+srv://Guthembergue:4uMxM967_JYXgLN@cluster0.tyibcr6.mongodb.net/BackEnd?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao MongoDB')
    app.listen
    app.listen(3000, ()=> {
        console.log(`BackEnd está funcionando na porta 3000`)
    });
}).catch((error) => {
    console.log(error)
})