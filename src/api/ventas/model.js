import mongoose, { Schema } from 'mongoose'
// import Transaction from  '../transaction/model'
let ObjectId = Schema.Types.ObjectId;

// id, transactions, total, fecha
const salesSchema = new Schema({
	transactions: {
		type: [{type: ObjectId, ref: 'Transaction'}],
		required: [true, 'Es necesario agregar productos']
	},
	total: {
		type: Number,
	},
	fecha: {
		type: Date,
		default: Date.now
	}
}, {
	timestamps: false
})

// id, [Transaction], total, fecha
salesSchema.methods = {
	view(full){
		const view = {
			//simple view
			id: this.id,
			transactions: this.transactions,
			total: this.total,
			fecha: this.fecha,
		};

		return full ? {
			...view
		} : view
	}
}

const model = mongoose.model('Sale', salesSchema)

export const schema = model.schema
export default model
