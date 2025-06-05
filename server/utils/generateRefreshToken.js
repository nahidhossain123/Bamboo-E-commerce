import jwt from 'jsonwebtoken'
import UserModel from '../models/user.model'

const generateRefreshToken = async(userid)=>{
    const token = await jwt.sign({id:userid},process.env.SECRET_KEY_REFRESH_TOKEN,{expiresIn:'7d'})

    const saveToken = await UserModel.updateOne({_id:userid},{
        refresh_token:token
    })

    return token
}

export default generateRefreshToken