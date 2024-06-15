const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger_output.json')
const db = require('./models/index')
const User = db.user
const routes = require('./routes/user.route')

db.sequelize.sync().then(()=>{
    console.log('Database resynced')
})

//sequelize synchronises models     
//with the tables in database
const app = express()
const PORT = 1024;

//allow the port 
var corsConfigs = "http://127.0.0.1:1024/"
app.use(cors(corsConfigs))

//middleware
app.use(bodyParser.json())
app.use(cors())

//parse requests of type application/json
app.use(express.json())

//parse the requests of application/www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

//routes
app.use(routes)

app.use('/swagger-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`)
})