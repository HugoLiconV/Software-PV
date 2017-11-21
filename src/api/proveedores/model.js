import mongoose, { Schema } from 'mongoose'

/*
* Nombre, correo, email, direccion
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


/*
* Nombre, email, telefono, direccion
* */

supplierSchema.methods = {
	view(full){
		const view = {
			//simple view
			id: this.id,
			nombre: this.nombre,
			email: this.email,
			telefono: this.telefono,
			direccion: this.direccion,
		}

		return full ? {
			...view
		} : view
	}
}

const model = mongoose.model('Supplier', supplierSchema)

export const schema = model.schema
export default model
