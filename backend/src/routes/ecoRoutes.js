import { Router } from 'express';
import { ecoController } from '../controllers/ecoController.js'

const router = Router();

//buscar todos os animais
router.get('/eco', ecoController.getAll);
//buscar eco por id
router.get('/eco/:id', ecoController.getById);
//cadastrar eco
router.post('/eco', ecoController.create);
//atualizar eco
router.put('/eco/:id', ecoController.update);
//atualizar parcialmente o eco
router.patch('/eco/:id', ecoController.patch);
//deletar eco
router.delete('/eco/:id', ecoController.delete);
export default router;