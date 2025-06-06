import {Router} from 'express'
import { loginController, logoutController, registerUserController, uploadUserAvatar, verificationEmailController } from '../controllers/user.cotrollers'
import auth from '../middleware/auth'
import upload from '../middleware/multer'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verify-email',verificationEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-profile',auth,upload.single('avatar'),uploadUserAvatar)

export default userRouter