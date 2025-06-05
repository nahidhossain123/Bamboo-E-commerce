import {Router} from 'express'
import { loginController, registerUserController, verificationEmailController } from '../controllers/user.cotrollers'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verify-email',verificationEmailController)
userRouter.post('/login',loginController)

export default userRouter