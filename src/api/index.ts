export class RegistraPonto {
	constructor() {}

	start() {
		const express = require("express");

		const RegistraPonto = express();
		const swaggerUi = require("swagger-ui-express");
		const swaggerSpec = require("./swagger");
		RegistraPonto.use(express.json());
		const PORT = process.env.PORT || 3000;

		const docsRoutes = require("./routes/docs");
		const indexRoutes = require("./routes/routes");
		const colaboradorRoutes = require("./routes/colaborador");
		const pontoRoutes = require("./routes/ponto");

		RegistraPonto.use("/api", indexRoutes);
		RegistraPonto.use("/api-json", docsRoutes);
		RegistraPonto.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
		RegistraPonto.use("/api/colaborador", colaboradorRoutes);
		RegistraPonto.use("/api/ponto", pontoRoutes);

		RegistraPonto.listen(PORT, () => {
			console.log(`No-ponto app listening on port ${PORT}`);
		});
	}
}
