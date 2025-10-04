// නමෝ බුද්ධාය...!

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productID : {
            type : String,
            require : true,
            unique : true
        },
        name : {
            type : String,
            require : true,
        },
        altNames : {
            type :[String],
            default : []
        },
        description : {
            type : String,
            require : true
        },
        price : {
            type : Number,
            require : true
        },
        labelledPrice : {
            type : Number,
            require : true
        },
        category : {
            type : String,
            require : true
        },
        image : {
            type : [String],
            require : true
        },
        brand : {
            type : String,
            default : "None"
        },
        isAvailable : {
            type : Boolean,
            require : true,
            default : 0
        },
        stock : {
            type : Boolean,
            require : true
        }

    }
)

const Product = mongoose.model("Product", productSchema)

export default Product;