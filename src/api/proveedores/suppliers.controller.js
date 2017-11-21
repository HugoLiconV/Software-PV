import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Supplier } from '.'

export const create = ({ bodymen: {body} }, res, next) =>{
	Supplier.create(body)
		.then(user => user.view(true))
		.then(success(res, 201))
		.catch(next)
};

export const index = (req, res, next) =>{
	Supplier.find({})
		.then((suppliers) => suppliers.map((supplier) => supplier.view()))
		.then(success(res))
		.catch(next)
};

export const show	= ({ params }, res, next) =>{
	Supplier.findById(params.id)
		.then(notFound(res))
		.then((supplier) => supplier ? supplier.view() : null)
		.then(success(res))
		.catch(next)
};

export const update = ({ bodymen: { body }, params }, res, next) =>
	Supplier.findById(params.id)
		.then(notFound(res))
		.then((supplier) => supplier ? _.merge(supplier, body).save() : null)
		.then((supplier) => supplier ? supplier.view(true) : null)
		.then(success(res))
		.catch(next)

export const destroy = ({ params }, res, next) =>
	Supplier.findById(params.id)
		.then(notFound(res))
		.then((supplier) => supplier ? supplier.remove() : null)
		.then(success(res, 204))
		.catch(next)
