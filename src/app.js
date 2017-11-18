
// grab our dependencies
import http from 'http'
import { env, mongo, port, ip } from './config'
import express from "./services/express";
import api from "./api"
import mongoose from './services/mongoose'
const app = express(api)

//const port = process.env.PORT || 8080
const server = http.createServer(app)


// configure our aplication
//mongoose.connect(mongo.uri);

// start our server
setImmediate(() => {
	server.listen(port, ip, () => {
		console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
	})
})

export default app
