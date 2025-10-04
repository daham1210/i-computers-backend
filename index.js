// නමෝ බුද්ධාය...!

import express from 'express'
import mongoose from 'mongoose'
import userRouter from './root/userRouter.js'
import jwt from "jsonwebtoken"
import productRouter from './root/productRouter.js'




//database connection
const mongooURI = 'mongodb+srv://admin:1234@cluster0.xve2x8s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongooURI).then(
    ()=>{
        console.log("database connect succesfull")
    }
)


const app = express()

//midlewares
app.use(express.json())
app.use(
    (req, res, next)=>{
        const header = req.header("authorization")
        if(header != null){
            const token = header.replace("Bearer ", "")
            jwt.verify(token, "Daham@1210",
                (error, content)=>{
                    if(content == null){
                        res.status(400).json({
                            massage:"Invalid Token"
                        })
                    }else{
                        req.user = content
                        next()
                    }
                }

            )
        }else{
            next()
        }

    }
)


//router departments
app.use("/user", userRouter)
app.use("/product", productRouter)


app.listen(5000, 
        ()=>{
            console.log('server is running')
        }
    )