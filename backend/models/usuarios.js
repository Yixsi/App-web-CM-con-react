import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const usuariosSchema = new Schema({
    user: {type: String, required: [true, 'Nombre obligatorio']},
    pass: String,
    role: String
});

//COnvertir a modelo
const Usuarios = mongoose.model('Usuarios',usuariosSchema)
export default Usuarios;