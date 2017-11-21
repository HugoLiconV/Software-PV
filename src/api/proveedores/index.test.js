import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Supplier } from '.'

const app = () => express(routes)

let supplier

beforeEach(async () =>{
	supplier = await Supplier.create({
		nombre: "Juan Perez",
		email: "JuanHacker@hotmail.com",
		telefono: "6141816617",
		direccion: "Calle arbol #321"
	});
})

test('POST /supplier 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({
			nombre: "Juan Perez",
			email: "JuanHacker@hotmail.com",
			telefono: "6141816617",
			direccion: "Calle arbol #321",
		})
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	expect(body.nombre).toEqual("Juan Perez")
	expect(body.email).toEqual('JuanHacker@hotmail.com')
	expect(body.telefono).toEqual('6141816617')
	expect(body.direccion).toEqual('Calle arbol #321')
})


test('GET /suppliers 200', async () => {
	const { status, body } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	expect(Array.isArray(body)).toBe(true)
})

test('GET /suppliers/:id 200', async () => {
	const { status, body } = await request(app())
		.get(`/api/${supplier.id}`)
	expect(status).toBe(200)
	expect(typeof body).toEqual('object')
	expect(body.id).toEqual(supplier.id)
})

test('GET /suppliers/:id 404', async () => {
	const { status } = await request(app())
		.get('/api/123456789098765432123456')
	expect(status).toBe(404)
})

test('PUT /suppliers/:id 200', async () => {
	const { status, body } = await request(app())
		.put(`/api/${supplier.id}`)
		.send({
			nombre: "Juan Perez",
			email: "JuanHacker@hotmail.com",
			telefono: "6141816617",
			direccion: "Calle arbol #321",
		})
	expect(status).toBe(200)
	expect(body.nombre).toEqual("Juan Perez")
	expect(body.email).toEqual('JuanHacker@hotmail.com')
	expect(body.telefono).toEqual('6141816617')
	expect(body.direccion).toEqual('Calle arbol #321')
})


test('DELETE /products/:id 204', async () => {
	const { status } = await request(app())
		.delete(`/api/${supplier.id}`)
	expect(status).toBe(204)
})

test('DELETE /users/:id 404', async () => {
	const { status } = await request(app())
		.delete('/123456789098765432123456')
	expect(status).toBe(404)
})
