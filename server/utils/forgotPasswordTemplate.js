const forgotPasswordTemplate = ({name, otp}) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;"> 
        <h2 style="color: #333;">Hello ${name},</h2>
        <p>We received a request to reset your password. Please use the following OTP to verify your identity:</p>
        <h3 style="color: #007BFF;">${otp}</h3>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Thank you,<br>From Bamboo E-Commerce</p>
    </div>
  `;
}

export default forgotPasswordTemplate;