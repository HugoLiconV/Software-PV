import { success, notFound } from '../../services/response/'

export const create = (req, res) =>{
	// res
	res.status(201).json(req.body);
};

export const index = (req, res) =>{
	res.status(200).send('Showing all products');
};

export const show	= (req, res) =>{
	// res.send('Showing product with id:' + req.params.id)
	res.status(200).end();
};

export const update = (req, res) =>{
	// res.send('Updating product with id:' + req.params.id)
	res.status(201);
};

export const destroy = (req, res) =>{
	//res.send('Deleting product with id:' + req.params.id)
	res.status(201);
};
