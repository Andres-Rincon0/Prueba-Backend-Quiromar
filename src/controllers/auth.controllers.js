import  response  from "express";
import dotenv from "dotenv";
import {MongoClient} from "mongodb"
import generateJWT from "../helper/generate.jwt";

dotenv.config();

const MongoURI = process.env.MONGO_URI;

const nombreBD ="Quiromar";

const client = new MongoClient(MongoURI);
await client.connect();
const db = client.db(nombreBD);

const empleados = db.collection("empleados");

const login = async (req,res = response)=>{
    const {nombre, apellido, contraseña, telefono , correo, direccion} = req.body;
    try {
        const empleado = await empleados.findOne({correo})
        if(!empleado){
            return res.status(404).json({
                msg: "Usuario no valido"
            })
        }

        if(!empleado.telefono !==telefono){
            return res.status(404).json({
                msg: "El no es el correcto"
            })
        }

        if(!empleado.direccion !==direccion){
            return res.status(404).json({
                msg: "La direccion es erronea"
            })
        }

        if(!empleado.contraseña !==contraseña){
            return res.status(404).json({
                msg: "la contraseña es incorrecta"
            })
        }

        if(!empleado.nombre !== nombre){
            return res.status(404).json({
                msg: "el nombre no coincide"
            })
        }

        if(!empleado.apellido !== apellido){
            return res.status(404).json({
                msg: "el apellido no coincide"
            })
        }

        const token = await generateJWT(empleado.id);
        console.log(token);
        res.json(empleado,token)
    } catch (error) {
        console.log(error);
    }
}

export default login;