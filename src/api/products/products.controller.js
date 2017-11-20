import { success, notFound } from '../../services/response/'
import { Product } from '.'

export const create = ({ bodymen: {body} }, res, next) =>{
	Product.create(body)
	res.status(201).json(body);
};

export const index = (req, res, next) =>{
	Product.find({})
		.then((users) => users.map((user) => user.view()))
		.then(success(res))
		.catch(next)
};

export const show	= ({ params }, res, next) =>{
	Product.findById(params.id)
		.then(notFound(res))
		.then((user) => user ? user.view() : null)
		.then(success(res))
		.catch(next)
};

export const update = (req, res) =>{
	// res.send('Updating product with id:' + req.params.id)
	res.status(201);
};

export const destroy = (req, res) =>{
	//res.send('Deleting product with id:' + req.params.id)
	res.status(201);
};
