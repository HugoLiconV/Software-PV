import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Transaction } from '.'
import Product from '../products/model'

const app = () => express(routes)

let product
let transaction

beforeEach(async () =>{
	product = await Product.create({
		nombre: "Call of Duty: WWII",
		cantidad: 1,
		precioVenta: 200,
		precioCompra: 150,
	});
	
	transaction = await Transaction.create({
		producto: product.id,
		cantidad: 3,
		subtotal: 600,
	});
})

test('POST /transaction 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({
			producto: product.id,
			cantidad: 3,
			subtotal: 600,
		})
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	console.log(body)
	expect(body.producto).toEqual(product.id)
	expect(body.cantidad).toEqual(3)
	expect(body.subtotal).toEqual((body.cantidad  * product.precioVenta))
})


test('GET /transaction 200', async () => {
	const { status, body } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	expect(Array.isArray(body)).toBe(true)
})

test('GET /transaction/:id 200', async () => {
	const { status, body } = await request(app())
		.get(`/api/${transaction.id}`)
	expect(status).toBe(200)
	expect(typeof body).toEqual('object')
	expect(body.id).toEqual(transaction.id)
})

test('GET /transaction/:id 404', async () => {
	const { status } = await request(app())
		.get('/api/123456789098765432123456')
	expect(status).toBe(404)
})

test('PUT /transaction/:id 200', async () => {
	const { status, body } = await request(app())
		.put(`/api/${transaction.id}`)
		.send({
			producto: product.id,
			cantidad: 5,
			subtotal: 700,
		})
	expect(status).toBe(200)
	expect(body.producto).toEqual(product.id)
	expect(body.cantidad).toEqual(5)
	expect(body.subtotal).toEqual(700)
})


test('DELETE /transaction/:id 204', async () => {
	const { status } = await request(app())
		.delete(`/api/${transaction.id}`)
	expect(status).toBe(204)
})

test('DELETE /transaction/:id 404', async () => {
	const { status } = await request(app())
		.delete('/123456789098765432123456')
	expect(status).toBe(404)
})
