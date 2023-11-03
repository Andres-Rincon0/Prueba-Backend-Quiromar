import {MongoClient, Objectid} from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoURI = process.env.MONGO_URI

const nombreBD = "Quiromar";

const cliente = new MongoClient(MongoURI);
await cliente.connect()
const db = cliente.db(nombreBD);

const Clientes = db.collection("Clientes")
const Empleados = db.collection("Empleados")
const Envios = db.collection("Envios")
const Paquetes= db.collection("paquetes")

const getClientes = async(req,res)=>{
    try {
        const data = await Clientes.find().toArray();
        res.json(data)
    } catch (error) {
        console.log({
            msg: "buscar clientes",
            error
        });
    }
}

const getOneClientes = async (req,res)=>{
    try {
        const data = await Clientes.findOne({_id: res.params.id});
        res.json({
            msg:"Buscar cliente ",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

const postClientes = async (req, res)=>{
    try {
        const {nombre, apellido, direccion, telefono, contraseña, correo} = req.body;
        const data = new Clientes({nombre, apellido, direccion, telefono, contraseña, correo})

        const nuevaData = await data.save();
        res.json({
            msg: "Cliente agregado con exito",
            nuevaData
        })
    } catch (error) {
        console.log(error);
    }
}

const upadateClientes = async (req,res)=>{
    try {
        const data = await Clientes.findOne({_id: req.params.id});
        if(req.body.nombre){
            data.nombre = req.body.nombre
        }

        if(req.body.apellido){
            data.apellido = req.body.apellido
        }

        if(req.body.direccion){
            data.direccion = req.body.direccion
        }

        if(req.body.telefono){
            data.telefono = req.body.telefono
        }

        if(req.body.contraseña){
            data.contraseña = req.body.contraseña
        }
        
        if(req.body.correo){
            data.correo = req.body.correo
        }

        await data.save();
        res.json({
            msg: "se actualizo el cliente con exito",
            data
        })

    } catch (error) {
        console.log(error);
    }
}

const getEmpleados = async(req,res)=>{
    try {
        const data = await Empleados.find().toArray();
        res.json(data)
    } catch (error) {
        console.log({
            msg: "buscar empleados",
            error
        });
    }
}

const getOneEmpleados = async (req,res)=>{
    try {
        const data = await Empleados.findOne({_id: res.params.id});
        res.json({
            msg:"Buscar empleados ",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

const postEmpleados = async (req, res)=>{
    try {
        const {nombre, apellido, cargo, salario} = req.body;
        const data = new Empleados({nombre, apellido, cargo, salario})

        const nuevaData = await data.save();
        res.json({
            msg: "empleado agregado con exito",
            nuevaData
        })
    } catch (error) {
        console.log(error);
    }
}

const upadateEmpleados = async (req,res)=>{
    try {
        const data = await Empleados.findOne({_id: req.params.id});
        if(req.body.nombre){
            data.nombre = req.body.nombre
        }

        if(req.body.apellido){
            data.apellido = req.body.apellido
        }

        if(req.body.cargo){
            data.cargo = req.body.cargo
        }

        if(req.body.salario){
            data.salario = req.body.salario
        }


        await data.save();
        res.json({
            msg: "se actualizo el Empleado con exito",
            data
        })

    } catch (error) {
        console.log(error);
    }
}


const getPaquetes = async(req,res)=>{
    try {
        const data = await Paquetes.find().toArray();
        res.json(data)
    } catch (error) {
        console.log({
            msg: "buscar Paquetes",
            error
        });
    }
}

const getOnePaquetes = async (req,res)=>{
    try {
        const data = await Paquetes.findOne({_id: res.params.id});
        res.json({
            msg:"Buscar Paquetes ",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

const postPaquetes = async (req, res)=>{
    try {
        const {tamaño, peso, direccion_origen, direccion_destino, estado} = req.body;
        const data = new Paquetes({tamaño, peso, direccion_origen, direccion_destino, estado})

        const nuevaData = await data.save();
        res.json({
            msg: "paquete agregado con exito",
            nuevaData
        })
    } catch (error) {
        console.log(error);
    }
}

const upadatePaquetes = async (req,res)=>{
    try {
        const data = await Paquetes.findOne({_id: req.params.id});
        if(req.body.tamaño){
            data.tamaño = req.body.tamaño
        }

        if(req.body.peso){
            data.peso = req.body.peso
        }

        if(req.body.direccion_origen){
            data.direccion_origen = req.body.direccion_origen
        }

        if(req.body.direccion_destino){
            data.direccion_destino = req.body.direccion_destino
        }

        if(req.body.estado){
            data.estado = req.body.estado
        }
        await data.save();
        res.json({
            msg: "se actualizo el paquete con exito",
            data
        })

    } catch (error) {
        console.log(error);
    }
}

const getEnvios = async(req,res)=>{
    try {
        const data = await Envios.find().toArray();
        res.json(data)
    } catch (error) {
        console.log({
            msg: "buscar Envios",
            error
        });
    }
}

const getOneEnvios = async (req,res)=>{
    try {
        const data = await Envios.findOne({_id: res.params.id});
        res.json({
            msg:"Buscar Envios ",
            data
        })
    } catch (error) {
        console.log(error);
    }
}

const postEnvios = async (req, res)=>{
    try {
        const {fecha_envio, fecha_entrega, estado_envio, direccion_destino, estado} = req.body;
        const data = new Envios({fecha_envio, fecha_entrega, estado_envio, direccion_destino, estado})

        const nuevaData = await data.save();
        res.json({
            msg: "paquete agregado con exito",
            nuevaData
        })
    } catch (error) {
        console.log(error);
    }
}

const upadateEnvios = async (req,res)=>{
    try {
        const data = await Envios.findOne({_id: req.params.id});
        if(req.body.fecha_envio){
            data.fecha_envio = req.body.fecha_envio
        }

        if(req.body.fecha_entrega){
            data.fecha_entrega = req.body.fecha_entrega
        }

        if(req.body.estado_envio){
            data.estado_envio = req.body.estado_envio
        }

        
        await data.save();
        res.json({
            msg: "se actualizo el envio con exito",
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export {
    getClientes, postClientes, getOneClientes, upadateClientes,
    getEmpleados , postEmpleados, getOneEmpleados, upadateEmpleados,
    getPaquetes, postPaquetes, getOnePaquetes, upadatePaquetes,
    getEnvios, postEnvios, getOneEnvios, upadateEnvios,
}