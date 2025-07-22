import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    // Log pour débugger
    console.log('📧 Tentative d\'envoi email:', { firstName, lastName, email, service })

    // Validation des champs requis
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      )
    }

    // Mappage des services pour l'affichage
    const serviceLabels: { [key: string]: string } = {
      photo: 'Photographie',
      video: 'Vidéographie',
      drone: 'Drone FPV',
      event: 'Événementiel',
      other: 'Autre'
    }

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: 'JRV Production <onboarding@resend.dev>', // Email de test Resend
      to: ['jrv.production85@gmail.com'], // Votre email de réception
      subject: `Nouveau message de ${firstName} ${lastName} - ${serviceLabels[service] || service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #f17e22, #ff6b35); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message de contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Informations du contact</h2>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #f17e22;">Nom complet:</strong> ${firstName} ${lastName}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #f17e22;">Email:</strong> 
              <a href="mailto:${email}" style="color: #333; text-decoration: none;">${email}</a>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #f17e22;">Téléphone:</strong> 
              <a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #f17e22;">Service demandé:</strong> ${serviceLabels[service] || service}
            </div>
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #f17e22;">Message:</strong>
              <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #f17e22;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              Message envoyé depuis le site web JRV Production<br>
              Date: ${new Date().toLocaleString('fr-FR')}
            </div>
          </div>
        </div>
      `,
      // Version texte pour les clients qui ne supportent pas HTML
      text: `
Nouveau message de contact JRV Production

Nom: ${firstName} ${lastName}
Email: ${email}
${phone ? `Téléphone: ${phone}` : ''}
Service: ${serviceLabels[service] || service}

Message:
${message}

---
Envoyé le ${new Date().toLocaleString('fr-FR')}
      `
    })

    if (error) {
      console.error('❌ Erreur Resend:', error)
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    console.log('✅ Email envoyé avec succès:', data?.id)

    // Email de confirmation automatique au client
    try {
      await resend.emails.send({
        from: 'JRV Production <onboarding@resend.dev>',
        to: [email],
        subject: 'Confirmation de réception - JRV Production',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
            <div style="background: linear-gradient(135deg, #f17e22, #ff6b35); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Merci pour votre message !</h1>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Bonjour <strong>${firstName}</strong>,
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Je vous remercie pour l'intérêt que vous portez à mes services de <strong>${serviceLabels[service] || service}</strong>.
              </p>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                Votre message a bien été reçu et je m'engage à vous répondre dans les plus brefs délais (généralement sous 24h).
              </p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #f17e22;">
                <p style="margin: 0; color: #333; font-style: italic;">
                  "Chaque projet est unique et mérite une attention particulière. J'ai hâte de découvrir votre vision et de vous accompagner dans sa réalisation."
                </p>
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                En attendant, n'hésitez pas à consulter mon portfolio sur mes réseaux sociaux :
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://www.instagram.com/jrv.production/" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: linear-gradient(135deg, #f17e22, #ff6b35); color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">Instagram</a>
                <a href="https://www.youtube.com/@JRV.production" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: linear-gradient(135deg, #f17e22, #ff6b35); color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">YouTube</a>
              </div>
              
              <p style="color: #333; font-size: 16px; line-height: 1.6;">
                À très bientôt,<br>
                <strong>JRV Production</strong>
              </p>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
                JRV Production - Photographe & Vidéaste en Vendée<br>
                📧 jrv.production85@gmail.com | 📱 06 72 75 19 54
              </div>
            </div>
          </div>
        `,
        text: `
Bonjour ${firstName},

Je vous remercie pour l'intérêt que vous portez à mes services de ${serviceLabels[service] || service}.

Votre message a bien été reçu et je m'engage à vous répondre dans les plus brefs délais (généralement sous 24h).

"Chaque projet est unique et mérite une attention particulière. J'ai hâte de découvrir votre vision et de vous accompagner dans sa réalisation."

En attendant, n'hésitez pas à consulter mon portfolio sur mes réseaux sociaux :
- Instagram: https://www.instagram.com/jrv.production/
- YouTube: https://www.youtube.com/@JRV.production

À très bientôt,
JRV Production

---
JRV Production - Photographe & Vidéaste en Vendée
📧 jrv.production85@gmail.com | 📱 06 72 75 19 54
        `
      })
    } catch (confirmationError) {
      console.warn('Erreur envoi email de confirmation:', confirmationError)
      // On continue même si l'email de confirmation échoue
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès !',
        id: data?.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur API contact:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}