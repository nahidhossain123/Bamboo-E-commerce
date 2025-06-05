import { Resend } from 'resend';

const resend = new Resend('re_Jd1KbShb_QAge8iqHvFuJpfPYz5FAYJ3j');

const sendEmail = async({toEmail,subject,html})=>{
    try {
       const {data,error} = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: toEmail,
        subject: subject,
        html: html
        });
        return data
    } catch (error) {
       return console.error({error})
    }
}

export default sendEmail