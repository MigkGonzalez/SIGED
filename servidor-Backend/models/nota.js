import mongoose from 'mongoose'
const Schema = mongoose.Schema

const notaSchema = new Schema( {

    nombre: {type: String, required: [true, 'nombre obligatorio']},
    apellido: {type: String, default: ""},
    genero: {type: String, default: ""},
    tipo_documento: {type: String, default: ""},
    num_documento: {type: String, default: ""},
    dir_residencia: {type: String, default: ""},
    fecha_nacimiento: {type: Date, default: ""},
    eps: {type: String, default: ""},
    rh: {type: String, default: ""},
    nombre_acudiente: {type: String, default: ""},
    tel_acudiente: {type: String, default: ""},
    email_acudiente: {type: String, default: ""},
     
    usuario: {type: String, default: "deportista"},
    date: {type: Date, default: Date.now},
    activo: {type: Boolean, default: true}


})

//convertir a modelo

const Nota = mongoose.model('Nota', notaSchema)
export default Nota