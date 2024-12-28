import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const products = mongoose.model("products", productSchema);  

export default products;  
