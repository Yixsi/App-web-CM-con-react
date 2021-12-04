import {Router} from "express"
import UsuariosControlador from "../controller/Usuarios.controller"

const router = Router()

router.get("/verificar-user",UsuariosControlador.verificarUser)

module.exports = router;
