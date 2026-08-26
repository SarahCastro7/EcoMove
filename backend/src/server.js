import express from 'express';
import cors from 'cors';
import ecoRoutes from './routes/ecoRoutes.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(ecoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})