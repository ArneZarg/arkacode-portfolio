import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request:Request) {
    const {name,email,message} = await request.json();
    
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'zargarian.arne@gmail.com',
      subject: `ARKACODE EMAIL FROM ${name} - <${email}>`,
      text:message,
      html:"<h1>Email from Arkacode Form</h1>"
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
