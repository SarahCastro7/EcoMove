import express from 'express';
import { EcoMove } from './routes/ecoRoutes.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/' , (req,res) => {
    res.send("src");
});

app.use('/ecomove' , EcoMove);

app.listen(PORT, () => {
    console.log (`server rodando aq http://localhost:${PORT}`);
})