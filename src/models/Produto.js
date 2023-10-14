const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Por favor, insira o nome do produto"]
        },
        primeiro: {
            type: String,
            required: [true, "Por favor, insira seu primeiro nome"]
        },
        segundo: {
            type: String,
            required: [true, "Por favor, insira seu segundo nome"]
        },
        terceiro: {
            type: String,
            required: [true, "Por favor, insira seu sobrenome"]
        },
        idproduto: {
            type: String,
            required: [true, "Se possível, insira o ID do produto"]
        },
        identificacao: {
            type: String,
            required: [true, "Por favor, insira sua identificação"]
        },
        uso: {
            type: String,
            required: [true, "Por favor, insira para qual o uso desse produto"]
        },
        quantidade: {
            type: Number,
            required: true,
            default: 0
        },
        preco: {
            type: Number,
            required: true,
        },
        imagem: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)

const Produto = mongoose.model('Produtos', produtoSchema);

module.exports = Produto;