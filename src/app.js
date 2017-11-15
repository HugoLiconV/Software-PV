
// grab our dependencies
import express from "./services/express";
import api from "./api"

const app = express(api)
const port = process.env.PORT || 8080

// configure our aplication

// start our server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})

export default app
