
import { Resend } from "resend";

require('dotenv').config();
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData:any) => {
    const message = formData.message
    const senderEmail = formData.email
    const name = formData.name
    resend.emails.send({
        from:'onboarding@resend.dev',
        to:'zargarian.arne@gmail.com',
        subject:`From: ${name} via ArkaCode`,
        reply_to:senderEmail,
        text:message
    });
}