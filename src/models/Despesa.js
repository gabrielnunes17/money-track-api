import mongoose from "mongoose";

const despesaSchema = new mongoose.Schema(
  {
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    categoria: { type: String, required: true },
    data: { type: Date, required: true },
    observacao: { trype: String },
  },
  { timestamps: true },
);

const Despesa = mongoose.model("Despesa", despesaSchema);

export default Despesa;
