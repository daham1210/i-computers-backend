// නමෝ බුද්ධාය...!

import Product from "../models/Product.js";
import { isAdmin } from "./userController.js";

export function createProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            massage : 'Fobidden Access'
        })
    }
    const product = new Product(req.body)

    product.save().then(
        ()=>{
            res.json({
                massage : "Product create succesfully"
            })
        }
        ).catch(
            (error)=>{
                res.states(500).json({
                    massage : "Error creating product",
                    error : error.massage
                })
            }
            
        )
}

export function getProduct(req, res){
    if(isAdmin(req)){
    Product.find().then(
        (product)=>{
            res.json(product)
        }).catch(
            (error)=>{
                res.staus(500).json({
                    massage : "Error fetching products",
                    error : error.massage
                })
            }
        )
    }else{
        Product.find({isAvailable : true}).then(
            (product)=>{
                res.json(product)
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    massage : "Error fetching products",
                    error : error.massage
                })
            }
        )
    }


}

export function deleteProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            massage : "Only admin can delete products"
        })
        return
    }

    const productID = req.params.productID

    Product.deleteOne({productID : productID}).then(
        ()=>{
            res.status(200).json({
                massage : "Product deleted successfully"
            })
        }
    ).catch(
        ()=>{
            res.status(400).json({
                massage : "Product delete not success!"
            })
        }
    )
}

export function updateProduct(req, res){
    
        const productId = req.params.productID
        
        Product.updateOne({productID : productId}, req.body).then(
            ()=>{
                res.json({ massage : "Product update successful"})
            }
        )
    
}