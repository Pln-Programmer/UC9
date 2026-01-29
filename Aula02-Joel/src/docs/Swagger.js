import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSperc = 
swaggerJSDoc({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuários",
            version: "1.0.0",
            description: "Documentação da API usando express e MVC"

        },
        servers: [
            {url: `http://localhost:${process.env.PORT}`}
        ]
    },
    apis: ["./src/routes/**/*.js"]
});