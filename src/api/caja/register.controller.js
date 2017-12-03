import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Register } from '.'

export const create = ({ bodymen: {body} }, res, next) =>{
	Register.create(body)
		.then(register => register.view(true))
		.then(success(res, 201))
		.catch(next)
};

export const index = (req, res, next) =>{
	Register.find({})
		.then((registers) => registers.map((register) => register.view()))
		.then(success(res))
		.catch(next)
};

export const show	= ({ params }, res, next) =>{
	Register.findById(params.id)
		.then(notFound(res))
		.then((user) => user ? user.view() : null)
		.then(success(res))
		.catch(next)
};

export const update = ({ bodymen: { body }, params }, res, next) =>
	Register.findById(params.id)
		.then(notFound(res))
		.then((product) => product ? _.merge(product, body).save() : null)
		.then((product) => product ? product.view(true) : null)
		.then(success(res))
		.catch(next)

export const destroy = ({ params }, res, next) =>
	Register.findById(params.id)
		.then(notFound(res))
		.then((product) => product ? product.remove() : null)
		.then(success(res, 204))
		.catch(next)
