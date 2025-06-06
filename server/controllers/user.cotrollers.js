import sendEmail from "../config/sendEmail";
import UserModel from "../models/user.model";
import bcryptjs from "bcryptjs"
import verifyEmailTemplate from "../utils/verifyEmailTemplate";
import generateAccessToken from "../utils/generateAccessToken";
import generateRefreshToken from "../utils/generateRefreshToken";

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

        const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`

        const verifyEmail = await sendEmail({email,
            subject:'verification email from bambooCommerce',
            html:verifyEmailTemplate(name,verificationUrl)
        })

        return response.json({
            message:'User registered successfully',
            error:false,
            success:true,
            data:save
        })

    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}


export const verificationEmailController = async(request,response)=>{
    try {
        const {code} = request.body
        const user = await UserModel.findOne({_id:code})
        if(!user){
            return response.status(400).json({
                message:"invalid code",
                error:true,
                success:false
            })
        }

        const updatedUser = await UserModel.updateOne({_id:code},{
            verify_email:true
        })

        return response.json({
            message:'Email verification done',
            error:false,
            success:true,
            data:updatedUser
        })

    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}

export const loginController = async(request,response)=>{
    try {
        const {email,password} = request.body
        const user = await UserModel.findOne({email})
        if(!user){
            return response.status(400).json({
                message:"User not registered",
                error:true,
                success:false
            })
        }

        if(user.status != "Active"){
            return response.status(400).json({
                message:"User status is not active",
                error:true,
                success:false
            }) 
        }

        const checkPassword = await bcryptjs.compare(password,user.password)
        if(!checkPassword){
             return response.status(400).json({
                message:"Please check you password",
                error:true,
                success:false
            }) 
        }
        
        const accessToken = await generateAccessToken(user._id)
        const refreshToken = await generateRefreshToken(user._id)

        const cookiesOption = {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }

        response.cookie('accessToken',accessToken,cookiesOption)
        response.cookie('refreshToken',refreshToken,cookiesOption)

        return response.json({
            message:'Login successful',
            error:false,
            success:true,
            data:{
                accessToken,
                refreshToken
            }
        })

    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}

export const logoutController = async(request,response)=>{
    try {
        const userId = request.userId
          const cookiesOption = {
            httpOnly:true,
            secure:true,
            sameSite:"None"
        }
        response.clearCookie('accessToken',cookiesOption)
        response.clearCookie('refreshToken',cookiesOption)

        const removeRefreshToken = UserModel.findByIdAndUpdate(userId,{
            refresh_token:""
        })

         return response.json({
            message:'Logout successful',
            error:false,
            success:true,
            data:{
                accessToken,
                refreshToken
            }
        })
    
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}

export const uploadUserAvatar = async(request,response)=>{
    try {
        const userId = request.userId
        const image = request.file
        const upload = await uploadUserAvatar(image)

        const updatedUser = await UserModel.findByIdAndUpdate(userId,{
            avatar:upload.url
        })

        return response.status(500).json({
            message:'Success',
            error:false,
            success:true,
            data:{
                _id:userId,
                avatar:upload.url
            }
        })
    } catch (error) {
        return response.status(500).json({
            message:error.message || error,
            error:true,
            success:false,
        })
    }
}