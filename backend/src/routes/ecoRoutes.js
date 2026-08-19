import ecoServices from '../services/ecoServices.js';
import express from 'express';

export const EcoMove = express.Router();

EcoMove.get('/', async (req, res) => {
    try {
        const ecomove = await ecoServices.getAll();
        res.json(ecomove);
    } catch (error) {
        console.error('Erro ao listar ecomove:', error);
        res.status(500).json({ message: error.message });
    }
});


EcoMove.get('/:id', async (req, res) => {
    try {
        const ecomove = await ecoServices.getById(req.params.id);

        if (!ecomove) return res.status(404).json({ message: 'Não encontrado' });
        res.json(ecomove);
    } catch (error) {
        console.error('Erro ao buscar ecomove por ID:', error);
        res.status(500).json({ message: error.message });
    }
});


EcoMove.post('/', async (req, res) => {
    try {
        const ecomove = await ecoServices.create(req.body);
        res.status(201).json(ecomove);
    } catch (error) {
        console.error('Erro ao criar ecomove:', error);
        res.status(500).json({ message: error.message });
    }
});


EcoMove.put('/:id', async (req, res) => {
    try {
        const ecomove = await ecoServices.update(req.params.id, req.body);

        if (!ecomove) return res.status(404).json({ message: 'Não encontrado' });
        res.json(ecomove);
    } catch (error) {
        console.error('Erro ao atualizar ecomove:', error);
        res.status(500).json({ message: error.message });
    }
});


EcoMove.patch('/:id', async (req, res) => {
    try {
        const ecomove = await ecoServices.patch(req.params.id, req.body);

        if (!ecomove) return res.status(404).json({ message: 'Não encontrado' });

        res.json(ecomove);
    } catch (error) {
        console.error('Erro ao atualizar parcialmente o ecomove:', error);
        res.status(500).json({ message: error.message });
    }
});


EcoMove.delete('/:id', async (req, res) => {
    try {
        const ecomove = await ecoServices.delete(req.params.id);

        if (!ecomove) return res.status(404).json({ message: 'Não encontrado' });
        res.json(ecomove);
    } catch (error) {
        console.error('Erro ao excluir ecomove:', error);
        res.status(500).json({ message: error.message });
    }
});