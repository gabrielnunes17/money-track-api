import mongoose from "mongoose";

const despesaSchema = new mongoose.Schema(
  {
    descricao: {
      type: String,
      required: true,
      trim: true,
    },

    valor: {
      type: Number,
      required: true,
      min: 0.01,
    },

    categoria: {
      type: String,
      required: true,
      enum: [
        "Alimentação",
        "Transporte",
        "Moradia",
        "Saúde",
        "Educação",
        "Lazer",
        "Compras",
        "Outros",
      ],
    },

    data: {
      type: Date,
      required: true,
    },

    observacao: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Despesa", despesaSchema);
