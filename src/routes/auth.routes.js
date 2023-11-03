import express from "express"
import { check } from "express-validator"
import { validateDocuments } from "../middlewares/validate.document"
import login from "../controllers/auth.controllers"

const router = express.Router();

router.post("/login",[
    check("correo", "el correo es obligatorio").isEmpty(),
    check("contraseña", "la contraseña es oblogatoria").isString(),
    validateDocuments
], login)

export default router;