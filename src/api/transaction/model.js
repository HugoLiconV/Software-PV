import mongoose, { Schema } from 'mongoose'
let ObjectId = Schema.Types.ObjectId;

// id, producto, cantidad, subtotal
const transactionSchema = new Schema({
	producto: {
		type: ObjectId,
		ref: 'Product',
		required: [true, 'Es necesario agregar un producto']
	},
	cantidad: {
		type: Number,
		required: [true, 'Es necesario especificar la cantidad']
	},
	subtotal: {
		type: Number,
	}
}, {
	timestamps: false
})

/*
* Nombre, cantidad, precio-venta, precio compra, categoria
* descripcion
* */

transactionSchema.methods = {
	view(full){
		const view = {
			//simple view
			id: this.id,
			producto: this.producto,
			cantidad: this.cantidad,
			subtotal: this.subtotal,
		};
		return full ? {
			...view
		} : view
	}
}

const model = mongoose.model('Transaction', transactionSchema)

export const schema = model.schema;
export default model
