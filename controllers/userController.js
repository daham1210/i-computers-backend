//

import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export function createUser(req, res){
    const data = req.body
    const hashedPassword = bcrypt.hashSync(data.password, 10)

    const user = new User({
        email:data.email,
        firstName:data.firstName,
        lastName:data.lastName,
        password:hashedPassword,
        role:data.role
    })
   
    user.save().then(
        ()=>{
            res.json({
                massage:"User create successfully"
            })
        }
    )
}


export function logingUser(req, res){
    const email = req.body.email
    const password = req.body.password
    
    User.find({email : email}).then(
        (users)=>{
            if (users[0]==null){
                res.json({
                    massage:"User not Found"
                })
            }else{
                const user = users[0]
                const isPasswordCorrect = bcrypt.compareSync(password, user.password)
                if(isPasswordCorrect){
                    const payload = {
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        role: user.role
                    }
                    const token = jwt.sign(payload, "Daham@1210", {expiresIn: "15000h"})

                    res.json({
                        massage:"Login successful",
                        token: token
                    })
                }else{
                    res.json({
                        massage:"Invalid Password"
                    })
                }
            }
        }
    )
}





export function getUser(req, res){
    User.find().then(
        (user)=>{
            res.json(user)
        }
    )
}


export function putUser(req, res){
    console.log("put req")
}

export function deletUser(req, res){
    console.log("delet req")
    }


export function isAdmin(req){
    if(req.body.role == "admin"){
        return true
    }else{
        return false
    }
}



