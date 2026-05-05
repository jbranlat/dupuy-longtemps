import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, address, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[DEVIS] ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0B1B3D;">Nouveau Devis Site DSG CLIM 13</h2>
          <hr/>
          <p><strong>Client :</strong> ${name}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Adresse :</strong> ${address || 'Non renseignée'}</p>
          <p><strong>Type de demande :</strong> <span style="color: #7AC142; font-weight: bold;">${service}</span></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border-left: 5px solid #7AC142; margin-top: 20px;">
            <p><strong>Message :</strong></p>
            <p>${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}