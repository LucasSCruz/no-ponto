export class LanchoneteCreusa {
	constructor() {}

	start() {
		const express = require("express");

		const lanchoneteCreusa = express();
		const swaggerUi = require("swagger-ui-express");
		const swaggerSpec = require("./swagger");
		lanchoneteCreusa.use(express.json());
		const PORT = process.env.PORT || 3000;

		const docsRoutes = require("./routes/docs");
		const indexRoutes = require("./routes/routes");
		const clienteRoutes = require("./routes/colaborador");
		const produtosRoutes = require("./routes/ponto");

		lanchoneteCreusa.use("/api", indexRoutes);
		lanchoneteCreusa.use("/api-json", docsRoutes);
		lanchoneteCreusa.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
		lanchoneteCreusa.use("/api/colaborador", clienteRoutes);
		lanchoneteCreusa.use("/api/ponto", produtosRoutes);

		lanchoneteCreusa.listen(PORT, () => {
			console.log(`No-ponto app listening on port ${PORT}`);
		});
	}
}
