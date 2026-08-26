import express from 'express';
import ecoRoutes from './routes/ecoRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(ecoRoutes);

app.listen({ port: 3000 }, () => {
  console.log('Servidor rodando em http://localhost:3000')
})