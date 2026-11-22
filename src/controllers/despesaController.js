import Despesa from '../models/Despesa.js';

export async function listar(req, res) {
  try {
    const despesas = await Despesa.find().sort({ createdAt: -1 });
    res.json(despesas);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar as despesas.' });
  }
}

export async function buscarPorId(req, res) {
  try {
    const despesa = await Despesa.findById(req.params.id);
    if (!despesa) {
      return res.status(404).json({ erro: 'Despesa não encontrada.' });
    }
    res.json(despesa);
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}

export async function criar(req, res) {
  try {
    const despesa = await Despesa.create(req.body);
    res.status(201).json(despesa);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

export async function atualizar(req, res) {
  try {
    const despesa = await Despesa.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!despesa) {
      return res.status(404).json({ erro: 'Despesa não encontrada.' });
    }
    res.json(despesa);
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
}

export async function remover(req, res) {
  try {
    const despesa = await Despesa.findByIdAndDelete(req.params.id);
    if (!despesa) {
      return res.status(404).json({ erro: 'Despesa não encontrada.' });
    }
    res.json({ mensagem: 'Despesa removida.' });
  } catch (erro) {
    res.status(400).json({ erro: 'Id inválido.' });
  }
}