import {Router} from 'express'
import { forgotPasswordController, loginController, logoutController, registerUserController, resetPasswordController, updateUserDetailsController, uploadUserAvatarController, verificationEmailController, verifyForgotPasswordOtpController } from '../controllers/user.controllers.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = Router()

userRouter.post('/register',registerUserController)
userRouter.post('/verify-email',verificationEmailController)
userRouter.post('/login',loginController)
userRouter.get('/logout',auth,logoutController)
userRouter.put('/upload-avatar',auth,upload.single('avatar'),uploadUserAvatarController)
userRouter.put('/update-user',updateUserDetailsController)
userRouter.put('/forgot-password',forgotPasswordController)
userRouter.put('/verify-forgot-password-otp',verifyForgotPasswordOtpController)
userRouter.put('/reset-password',resetPasswordController)

export default userRouter