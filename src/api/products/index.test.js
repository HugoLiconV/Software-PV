import request from 'supertest-as-promised'
import express from '../../services/express'
import routes  from '.'

const app = () => express(routes)

test('POST /users 201', async () => {
	const { status, body } = await request(app())
		.post('/api')
		.send({ name: 'test', description: 'test' })
	expect(status).toBe(201)
	expect(typeof body).toEqual('object')
	console.log(body)
	expect(body.name).toEqual('test')
	expect(body.description).toEqual('test')
})


test('GET /products 200', async () => {
	const { status } = await request(app())
		.get('/api')
	expect(status).toBe(200)
	//expect(Array.isArray(body)).toBe(true)
})

