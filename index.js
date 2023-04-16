import bodyParser from "body-parser";
import express from "express";
import routes from "./src/routes/routes";
import mongoose from "mongoose";
import * as dotenv from 'dotenv' 
dotenv.config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
