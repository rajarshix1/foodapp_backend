const bodyParser =require( "body-parser")
const express =require( "express")
const mongoose =require( "mongoose");
const routes  = require("./src/routes/routes");
const  dotenv =require( 'dotenv').config()
var cors = require('cors')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
}).then(()=>{
console.log('connected to db');
})

routes(app);

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello from home route");
});
// app.post('/hh', (req,res)=>{
//     console.log(req.body);
//     res.send('Hello from home route')
// })
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
