import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const articuloSchema = new Schema({
    codigo: String,
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    precio: String,
    cantidad: String,
    fecha: String,
    descripcion: String,
    categoria: String,
    url: String
});

//COnvertir a modelo
const Articulos = mongoose.model('Articulos',articuloSchema)
export default Articulos;