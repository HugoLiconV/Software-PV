import mongoose from 'mongoose'

mongoose.connection.on('error', (err) => {
	console.error('MongoDB connection error: ' + err)
	process.exit(-1)
})

export default mongoose
