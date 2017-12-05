import mongoose, { Schema } from 'mongoose'
//import supplier from  '../proveedores/model'

const registerSchema = new Schema({
	fecha: {
		type: Date,
		default: Date.now
		//required: [true, 'Es necesario agregar un nombre al producto']
	},
	isActive: {
		type: Boolean,
		default: false
	},
	montoInicial: {
		type: Number,
		required: [true, 'Es necesario especificar el precio de venta del producto']
	},


}, {
	timestamps: true
})

/*
* fecha, isActive, montoInicial
* */

registerSchema.methods = {
	view(full){
		const view = {
			//simple view
			id: this.id,
			fecha: this.fecha,
			isActive: this.isActive,
			montoInicial: this.montoInicial,
			precioCompra: this.precioCompra,
		}

		return full ? {
			...view
		} : view
	}
}

const model = mongoose.model('Register', registerSchema)

export const schema = model.schema
export default model
