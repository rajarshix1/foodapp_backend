const mongoose =require( "mongoose" );
const  menuSchema =require("../model/newModel")

const Food = mongoose.model('food', menuSchema)

const newFood = (req, res) => {
    let newC = new Food(req.body)
    newC.save((err, success)=>{
        if (err) {
            res.send(err)
        }
        else{
            res.json(success)
        }
    })
}
const getAllFoods = (req, res) => {
    Food.find({}, (err, success)=>{
        if (err) {
            res.send(err)
        }
        else{
            res.json(success)
        }
    })
    
}
const getFoodbyId = (req, res) => {
    console.log(req.params.foodId);
    Food.findById(req.params.foodId, (err, success)=>{
        if (err) {
            res.send(err)
        }
        else{
            res.json(success)
        }
    })
    
}
const updateFood= (req, res) => {
    console.log(req.params.foodId);
    const id = req.body.foodId
    const updatedInfo = req.body
    updatedInfo.foodId = undefined
    Food.findByIdAndUpdate(id, updatedInfo, {new:true}, (err, success)=>{
        if (err) {
            res.send(err)
        }
        else{
            res.json(success)
        }
    })
    
}
const deleteFood= (req, res) => {
    console.log(req.body.foodId);
    Food.remove({_id: req.body.foodId}, (err, success)=>{
        if (err) {
            res.send(err)
        }
        else{
            res.json({"message": "success"})
        }
    })
    
}
module.exports={newFood, getAllFoods, getFoodbyId, updateFood, deleteFood}