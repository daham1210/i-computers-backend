//
import express from "express"
import { getUser,createUser,putUser,deletUser, logingUser} from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/", logingUser)

userRouter.post("/",createUser)

userRouter.put("/", putUser)

userRouter.delete("/", deletUser)

export default userRouter