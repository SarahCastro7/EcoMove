import {ecoService} from '../services/ecoServices.js'

export const ecoController = {
    async getAll(req, res){
        try{ 
            const ecossistemas = await ecoService.getAlleco();
            res.json(ecossistemas);
        }catch(error){
            res.status(404).json({erro: error.message})
        }
    },

    async getById(req,res){
        try {
            const ecossistemaBuscado = await ecoService.geteco(req.params.id);
            res.status(200).json(ecossistemaBuscado);
        } catch (error) {
            res.status(404).json({ erro: error.message });
        }
    },

    async create(req, res){
        try{
            const novoEco = await ecoService.createeco(req.body);
            res.status(201).json(novoEco);
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    },

    async update(req, res){
        try{
            const ecossistemaAtualizado = await ecoService.updateeco(
                req.params.id, req.body)
            res.json(ecossistemaAtualizado)
        }catch(error){
            const status = error.message === "Eco não encontrado" ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    },

    async patch (req, res){
        try{
            const ecossistemaAtualizado = await ecoService.patcheco(
                req.params.id, req.body)
        res.status(200).json(ecossistemaAtualizado);
        }catch(error){
            const status = error.message === 'Eco não encontrado' ? 404 : 400;
            res.status(status).json({
                erro: error.message
            });
        }
    },
    async delete(req, res){
        try{
        const ecoDeletado = await ecoService.deleteeco(req.params.id);
        res.status(200).json(ecoDeletado)
        }catch(error){
            const status = error.message === 'Eco não encontrado' ? 404 : 400;
            res.status(status).json({erro: error.message});
        }
    }
}