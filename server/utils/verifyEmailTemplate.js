const verifyEmailTemplate = (name,url)=>{
    return `<p>Thank you for registering BabooCommerce</p>
    <p>Dear ${name}</p>
    <a href=${url} style="color:white;background:green;margin-top:10px">
    Verify Email
    </a>
    `
}

export default verifyEmailTemplate