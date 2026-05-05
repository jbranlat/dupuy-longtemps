import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // 1. Récupération de TOUTES les données du formulaire
    const { name, email, phone, address, service, message } = await req.json();

    // 2. Configuration du client OAuth2 avec les variables d'environnement
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      process.env.GMAIL_REDIRECT_URI
    );

    oAuth2Client.setCredentials({ 
      refresh_token: process.env.GMAIL_REFRESH_TOKEN 
    });

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // 3. Création du contenu du mail (Format HTML propre)
    const subject = `Demande de contact : ${service} - ${name}`;
    const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
    
    const messageParts = [
      `From: "Site Web Dupuy" <${process.env.GMAIL_USER}>`,
      `To: ${process.env.GMAIL_USER}`,
      `Subject: ${utf8Subject}`,
      'Mime-Version: 1.0',
      'Content-Type: text/html; charset=utf-8',
      '',
      `<h3>Nouvelle demande de contact reçue via le site</h3>`,
      `<p><strong>Client :</strong> ${name}</p>`,
      `<p><strong>Email :</strong> ${email}</p>`,
      `<p><strong>Téléphone :</strong> ${phone}</p>`,
      `<p><strong>Adresse du projet :</strong> ${address || 'Non renseignée'}</p>`,
      `<p><strong>Service demandé :</strong> ${service}</p>`,
      `<br>`,
      `<p><strong>Message de l'utilisateur :</strong></p>`,
      `<p style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">${message}</p>`,
    ];

    const messageRaw = messageParts.join('\n');

    // 4. Encodage Base64 sécurisé pour l'API Gmail
    const encodedMessage = Buffer.from(messageRaw)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    // 5. Envoi effectif via l'API
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: { raw: encodedMessage },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Erreur Gmail API:', error);
    return NextResponse.json(
      { error: "Échec de l'envoi du message" }, 
      { status: 500 }
    );
  }
}