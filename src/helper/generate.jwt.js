import { Jwt } from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const generateJWT = (uid = '')=>{
    return new Promise((resolve,reject)=>{
        const pload = {uid};
        console.log(pload);
        Jwt.sing(pload.process.env.JWT_PRIVATE_KEY,{
            expiresIn: "5h"
        }, (err, token)=>{
            if(err){
                reject("Problemas al generar jsonwebtoken")
            }else{
                resolve(token)
            }
        }
        )
    })
}

export default generateJWT