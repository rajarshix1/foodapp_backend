const { deleteFood, getAllFoods, getFoodbyId, newFood, updateFood } =  require("../controller/myController")

const routes = (app) =>{
    
    app.route('/menu')
    .get(getAllFoods)
    .get(getFoodbyId)
    .post(newFood)

    app.route('/menu/:foodId')
    .get(getFoodbyId)
    .put(updateFood)
    .delete(deleteFood)
}
module.exports = routes