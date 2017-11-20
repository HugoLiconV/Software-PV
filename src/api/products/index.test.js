import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Product } from '.'

const app = () => express(routes)

let product

beforeEach(async () =>{
	product = await Product.create({
		nombre: "Call of Duty: WWII",
		cantidad: "10",
		precioVenta: "200",
		precioCompra: "150",
	});
})

test('POST /products 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({nombre: "test", cantidad: "2", precioVenta: "1",  precioCompra: "0",
		})
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	expect(body.nombre).toEqual('test')
	expect(body.cantidad).toEqual('2')
	expect(body.precioVenta).toEqual('1')
	expect(body.precioCompra).toEqual('0')
})


test('GET /products 200', async () => {
	const { status, body } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	expect(Array.isArray(body)).toBe(true)
})

test('GET /products/:id 200', async () => {
	const { status, body } = await request(app())
		.get(`/api/${product.id}`)
	expect(status).toBe(200)
	expect(typeof body).toEqual('object')
	expect(body.id).toEqual(product.id)
})

test('GET /products/:id 404', async () => {
	const { status } = await request(app())
		.get('/api/123456789098765432123456')
	expect(status).toBe(404)
})

test('PUT /products/:id 200', async () => {
	const { status, body } = await request(app())
		.put(`/api/${product.id}`)
		.send({nombre: "test", cantidad: "2", precioVenta: "1",  precioCompra: "0"})
	expect(status).toBe(200)
	expect(body.nombre).toEqual('test')
	expect(body.cantidad).toEqual('2')
	expect(body.precioVenta).toEqual('1')
	expect(body.precioCompra).toEqual('0')
})


test('DELETE /products/:id 204', async () => {
	const { status } = await request(app())
		.delete(`/api/${product.id}`)
	expect(status).toBe(204)
})

test('DELETE /users/:id 404', async () => {
	const { status } = await request(app())
		.delete('/123456789098765432123456')
	expect(status).toBe(404)
})
