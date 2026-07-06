import { Resend } from 'resend';

const resend = new Resend('re_hneRdwyb_6uLnmGxxpPyNkvHhnWRsHSDA');

const sendEmail = async({sendTo,subject,html})=>{
    try {
       const {data,error} = await resend.emails.send({
  from: 'onboarding@resend.dev',
        to: sendTo,
        subject: subject,
        html: html
        });
        return data
    } catch (error) {
       return console.error({error})
    }
}

export default sendEmail