export class RegistraPonto {
	constructor() {}

	start() {
		const express = require("express");

		const RegistraPonto = express();
		const swaggerUi = require("swagger-ui-express");
		const swaggerSpec = require("./swagger");
		RegistraPonto.use(express.json());
		const PORT = process.env.PORT || 5000;

		const docsRoutes = require("./routes/docs");
		const indexRoutes = require("./routes/routes");
		const clienteRoutes = require("./routes/colaborador");
		const produtosRoutes = require("./routes/ponto");
		const emailRoutes = require("./routes/email")
		
		RegistraPonto.use("/api", indexRoutes);
		RegistraPonto.use("/api-json", docsRoutes);
		RegistraPonto.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
		RegistraPonto.use("/api/colaborador", clienteRoutes);
		RegistraPonto.use("/api/ponto", produtosRoutes);
		RegistraPonto.use("/api/email", emailRoutes);

		RegistraPonto.listen(PORT, () => {
			console.log(`No-ponto app listening on port ${PORT}`);
		});
	}
}
