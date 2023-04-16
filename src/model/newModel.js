import mongoose from "mongoose";
const Schema = mongoose.Schema
export const menuSchema = new Schema({
    name: {
        type: String,
        required: 'Enter food name'
    },
    image: {
        type: String,
        required: 'Enter an image'
    },
    price: {
        type: String,
        required: 'Enter Price'
    },
    calories: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
})