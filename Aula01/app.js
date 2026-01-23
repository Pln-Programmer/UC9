import express from "express";
import "dotenv/config";
import ComentarioRoutes from "./src/routes/ComentarioRoutes.js"
import PostRoutes from "./src/routes/PostRoutes.js"
import UserRoutes from "./src/routes/UserRoutes.js"

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/user", UserRoutes);
app.use("/post", PostRoutes);
app.use("/comentario", ComentarioRoutes);

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})
