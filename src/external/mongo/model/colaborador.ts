const mongoose = require("mongoose");

const ColaboradorSchema = new mongoose.Schema(
	{
		senha: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export const ColaboradorMongo = mongoose.model("Usuario", ColaboradorSchema);
