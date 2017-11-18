import mongoose, { Schema } from 'mongoose'

/*
* Nombre, cantidad, proveedor, precio-venta, precio compra, categoria
* descripcion, imagen, plataforma, tipo
* */

const productSchema = new Schema({
	nombre: {
		type: String,
		required: [true, 'Es necesario agregar un nombre al producto']
	},
	cantidad: {
		type: String,
		required: [true, 'Es necesario especificar la cantidad']
	},
	proveedor: {
		type: String
	},
	precioVenta: {
		type: String,
		required: [true, 'Es necesario especificar el precio de venta del producto']
	},
	precioCompra: {
		type: String,
		required: [true, 'Es necesario especificar el precio de compra del producto']
	},
	categoria: {
		type: String
	},
	descripcion: {
		type: String
	},
	imagen: {
		type: String
	},
	plataforma: {
		type: String
	},
	tipo: {
		type: String
	}
}, {
	timestamps: true
})

const model = mongoose.model('Product', productSchema)

export const schema = model.schema
export default model
