import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Sale } from '.'
import Product from '../products/model'
import Transaction from '../transaction/model'

const app = () => express(routes)


let product;
let otherProduct;
let transaction;
let otherTransaction;
let sale;

beforeEach(async () =>{
	product = await Product.create({
		nombre: "Call of Duty: WWII",
		cantidad: 1,
		precioVenta: 200,
		precioCompra: 150,
	});

	otherProduct = await Product.create({
		nombre: "Hitman",
		cantidad: 10,
		precioVenta: 100,
		precioCompra: 90,
	});

	transaction = await Transaction.create({
		producto: product.id,
		cantidad: 3,
		subtotal: 600,
	});


	otherTransaction = await Transaction.create({
		producto: otherProduct.id,
		cantidad: 2,
		subtotal: 200,
	});
	
	// id, transactions, total, fecha
	sale = await Sale.create({
		transactions: [transaction.id, otherTransaction.id],
		total: transaction.subtotal + otherTransaction.subtotal
	});
});

test('POST /sales 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({
			transactions: [transaction.id, otherTransaction.id],
			total: transaction.subtotal + otherTransaction.subtotal
		})
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	let total = transaction.subtotal + otherTransaction.subtotal;
	expect(body.total).toEqual(total)
	expect(body.transactions[0]).toEqual(transaction.id)
	expect(body.transactions[1]).toEqual(otherTransaction.id)
	expect(Array.isArray(body.transactions)).toBe(true)
})


test('GET /sales 200', async () => {
	const { status, body } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	expect(Array.isArray(body)).toBe(true)
})

test('GET /sales/:id 200', async () => {
	const { status, body } = await request(app())
		.get(`/api/${sale.id}`)
	expect(status).toBe(200)
	expect(typeof body).toEqual('object')
	expect(body.id).toEqual(sale.id)
})

test('GET /sales/:id 404', async () => {
	const { status } = await request(app())
		.get('/api/123456789098765432123456')
	expect(status).toBe(404)
})

test('PUT /sales/:id 200', async () => {
	const { status, body } = await request(app())
		.put(`/api/${sale.id}`)
		.send({
			transactions: [transaction.id, otherTransaction.id],
			total: transaction.subtotal + otherTransaction.subtotal
		})
	expect(status).toBe(200)
	let total = transaction.subtotal + otherTransaction.subtotal;
	expect(body.total).toEqual(total)
	expect(body.transactions[0]).toEqual(transaction.id)
	expect(body.transactions[1]).toEqual(otherTransaction.id)
	expect(Array.isArray(body.transactions)).toBe(true)
})


test('DELETE /sales/:id 204', async () => {
	const { status } = await request(app())
		.delete(`/api/${sale.id}`)
	expect(status).toBe(204)
})

test('DELETE /sales/:id 404', async () => {
	const { status } = await request(app())
		.delete('/123456789098765432123456')
	expect(status).toBe(404)
})
