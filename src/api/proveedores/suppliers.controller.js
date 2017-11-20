export const create = (req, res) =>{
	// res
	res.status(201).json(req.body);
};

export const index = (req, res) =>{
	res.status(200).send('Showing all suppliers');
};

export const show	= (req, res) =>{
	res.status(200).send('Showing suppliers with id:' + req.params.id);
};

export const update = (req, res) =>{
	res.status(201).send('Updating supplier with id:' + req.params.id);
};

export const destroy = (req, res) =>{
	res.status(201).send('Deleting supplier with id:' + req.params.id);
};
