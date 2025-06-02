import UserModel from "../models/user.model";
import bcryptjs from "bcryptjs"

export const registerUserController = async(request,response)=>{
    try {
        const {name,email,password} = request.body
        if(!name || !email || !password){
            return response.status(400).json({
                message:"email name and password required",
                error:true,
                success:false
            })
        }

        const user = await UserModel.findOne({email})
        if(user){
            return response.status(400).json({
                message:"email already exist",
                error:true,
                success:false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const payload={
            name,
            email,
            password:hashPassword
        }

        const newUser = new UserModel(payload);
        const save = await newUser.save()

    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}