import { products } from "./constants/product.js";
import Product from './model/productSchema.js';

const defaultData = async() => {
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported sucessfully');
    } catch(e) {
        console.log("Error", e.message);
    }
}

export default defaultData;