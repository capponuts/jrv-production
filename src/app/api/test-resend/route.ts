import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key')

export async function GET() {
  try {
    console.log('🔍 Test Resend - API Key présente:', !!process.env.RESEND_API_KEY)
    
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: ['jrv.production85@gmail.com'],
      subject: 'Test Resend - JRV Production',
      html: '<h1>Test réussi !</h1><p>Resend fonctionne correctement.</p>',
    })

    if (error) {
      console.error('❌ Erreur test Resend:', error)
      return NextResponse.json({ error, success: false }, { status: 500 })
    }

    console.log('✅ Test Resend réussi:', data?.id)
    return NextResponse.json({ data, success: true })

  } catch (error) {
    console.error('❌ Erreur catch:', error)
    return NextResponse.json({ error: 'Erreur serveur', success: false }, { status: 500 })
  }
}