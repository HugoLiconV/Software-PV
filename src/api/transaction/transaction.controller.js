import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Transaction } from '.'

export const create = ({ bodymen: {body} }, res, next) =>{
	Transaction.create(body)
		.then(user => user.view(true))
		.then(success(res, 201))
		.catch(next)
};

export const index = (req, res, next) =>{
	Transaction.find({})
		.then((users) => users.map((user) => user.view()))
		.then(success(res))
		.catch(next)
};

export const show	= ({ params }, res, next) =>{
	Transaction.findById(params.id)
		.then(notFound(res))
		.then((user) => user ? user.view() : null)
		.then(success(res))
		.catch(next)
};

export const update = ({ bodymen: { body }, params }, res, next) =>
	Transaction.findById(params.id)
		.then(notFound(res))
		.then((product) => product ? _.merge(product, body).save() : null)
		.then((product) => product ? product.view(true) : null)
		.then(success(res))
		.catch(next)

export const destroy = ({ params }, res, next) =>
	Transaction.findById(params.id)
		.then(notFound(res))
		.then((product) => product ? product.remove() : null)
		.then(success(res, 204))
		.catch(next)
