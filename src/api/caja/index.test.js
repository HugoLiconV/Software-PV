import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Register } from '.'

const app = () => express(routes)

let register
/*
* fecha, isActive, montoInicial
* */
beforeEach(async () =>{
	register = await Register.create({
		isActive: true,
		montoInicial: 200,
	});
})

test('POST /register 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({isActive: true, montoInicial: 200})
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	expect(body.isActive).toEqual(true)
	expect(body.montoInicial).toEqual(200)
})


test('GET /register 200', async () => {
	const { status, body } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	expect(Array.isArray(body)).toBe(true)
})

test('GET /products/:id 200', async () => {
	const { status, body } = await request(app())
		.get(`/api/${register.id}`)
	expect(status).toBe(200)
	expect(typeof body).toEqual('object')
	expect(body.id).toEqual(register.id)
})

test('GET /products/:id 404', async () => {
	const { status } = await request(app())
		.get('/api/123456789098765432123456')
	expect(status).toBe(404)
})

test('PUT /products/:id 200', async () => {
	const { status, body } = await request(app())
		.put(`/api/${register.id}`)
		.send({isActive: true, montoInicial: 250})
	expect(status).toBe(200)
	expect(body.isActive).toEqual(true)
	expect(body.montoInicial).toEqual(250)
})


test('DELETE /products/:id 204', async () => {
	const { status } = await request(app())
		.delete(`/api/${register.id}`)
	expect(status).toBe(204)
})

test('DELETE /products/:id 404', async () => {
	const { status } = await request(app())
		.delete('/123456789098765432123456')
	expect(status).toBe(404)
})
