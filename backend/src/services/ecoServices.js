import {ecoRepository} from '../repositories/ecoRepository.js'

export const ecoService = {
    async getAlleco(){
        return await ecoRepository.findAll();
    },

    async geteco(id){
        const ecoExistente = await ecoRepository.findById(id);
        if(!ecoExistente) throw new Error("EcoMove não encontrado");
        return ecoExistente;
    },
    async createeco(ecoRequisicao){
        return await ecoRepository.create(ecoRequisicao);
    },

    async updateeco(id, ecoRequisicao){
        const ecoExistente = await ecoRepository.findById(id);
        if(!ecoExistente){
            throw new Error("EcoMove não encontrado");
        }
        return await ecoRepository.update(id, ecoRequisicao)
    },

    async patcheco(id, reqeco){
        const ecoExiste = await ecoRepository.findById(id);
        if(!ecoExiste){
            throw new Error("EcoMove não encontrado");
        }
        return await ecoRepository.patch(id, reqeco);
    },

    async deleteeco(id){
        const ecoApagado = await ecoRepository.delete(id);
        if(!ecoApagado) throw new Error('EcoMove não encontrado');

        return await ecoApagado;
    }
}