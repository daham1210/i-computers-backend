// නමෝ බුද්ධාය..!

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        uniqe:true
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"customer"
    },
    isBlock:{
        type:Boolean,
        default:false
    },
    isEmailVerified:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        default:"/default.jpg",
        require:true
    }
})

const User = mongoose.model("User", userSchema)

export default User


