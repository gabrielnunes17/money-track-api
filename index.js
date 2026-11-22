import "dotenv/config";

import express from "express";
import cors from "cors";

import { conectarBanco } from "./src/config/database.js";
import despesaRoutes from "./src/routes/despesaRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.json({ mensagem: "API no ar!" });
});
app.use("/api/despesas", despesaRoutes);

// Primeiro conecta no banco, depois sobe o servidor
conectarBanco().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});
