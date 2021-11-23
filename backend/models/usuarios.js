import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    name: String,
    email: String,
    user: String,
    pass: String,
    role: 0
})

//COnvertir a modelo
module.exports = mongoose.model('Usuarios',usuariosSchema)
/* export default Usuarios; */