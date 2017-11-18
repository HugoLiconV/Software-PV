import express from 'express'
import bodyParser from 'body-parser'

export default (routes) => {
  const app = express();
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());

	app.use('/api',routes);
  return app;
};


