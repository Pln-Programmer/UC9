import express from "express"
import "dotenv/config"
import swaggerUi from "swagger-ui-express"
import { swaggerSperc } from "./src/docs/Swagger.js"
import UserRoutes from "./src/routes/User.routes.js"

const app = express();
const port = process.env.PORT

app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSperc))
app.use("/user", UserRoutes)

app.get("/", (req,res)=>{
    res.status(200).send("Apo - Users")
})


app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})
