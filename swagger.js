const swaggerAutogen = require("swagger-autogen")();

const doc = {
	info: {
		title: "Ecommerce Api",
		description: "Description",
	},
	host: "project2-d49k.onrender.com",
	schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
