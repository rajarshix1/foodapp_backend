import { deleteFood, getAllFoods, getFoodbyId, newFood, updateFood } from "../controller/myController"

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
export default routes