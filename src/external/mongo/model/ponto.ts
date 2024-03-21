import { CategoriaEnum } from "../../../common/enum/categoria-enum";

const mongoose = require("mongoose");

const PontoSchema = new mongoose.Schema(
	{
        idUsuario: {
            type: Number,
            required: true
        },
        dataCriacao: {
            type: Date,
            required: true,
            enum: CategoriaEnum
        }
	},
	{
		timestamps: true,
	}
);

export const PontoMongo = mongoose.model("Ponto", PontoSchema);
