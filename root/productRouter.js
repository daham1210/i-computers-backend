// නමෝ බුද්ධාය...!

import express from "express"
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/productControlls.js"


const productRouter = express.Router()

productRouter.post("/", createProduct)
productRouter.get("/", getProduct)
productRouter.delete("/:productID", deleteProduct)
productRouter.put("/:productID", updateProduct)


export default productRouter