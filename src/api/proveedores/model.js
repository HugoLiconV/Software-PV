import mongoose, { Schema } from 'mongoose'

/*
* Nombre, correo, telefono, direccion
* */

const supplierSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'Es necesario agregar un nombre al proveedor']
	},
	email: {
		type: String,
		required: [true, 'Es necesario especificar el email del proveedor']
	},
	telefono: {
		type: String,
		required: [true, 'Es necesario especificar el telefono del proveedor']
	},
	direccion: {
		type: String,
		required: [true, 'Es necesario especificar la direccion del proveedor']
	}
}, {
	timestamps: true
})

const model = mongoose.model('Proveedor', supplierSchema)

export const schema = model.schema
export default model
