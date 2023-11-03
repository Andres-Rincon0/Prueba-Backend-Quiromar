import express from "express";
import dotenv from "dotenv";
import routerAuth from "./src/routes/auth.routes.js";


const app = express()
app.use(express.json());

app.use("/auth", routerAuth)

dotenv.config();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server conectado en el puerto ${port} `);
})