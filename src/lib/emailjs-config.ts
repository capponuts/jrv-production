// Configuration EmailJS pour l'envoi d'emails
// 
// POUR CONFIGURER EMAILJS :
// 
// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service Email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Remplacez les valeurs ci-dessous par vos vraies clés

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Remplacez par votre Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Remplacez par votre Template ID  
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Remplacez par votre Public Key
}

// Exemple de template EmailJS :
/*
Sujet: Nouveau message de contact - JRV Production

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{from_phone}}
Service: {{service_type}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de jrv-production.vercel.app
*/

// Instructions détaillées :
// 1. Allez sur https://www.emailjs.com/ et créez un compte
// 2. Dans "Email Services", ajoutez votre Gmail (jrv.production85@gmail.com)
// 3. Dans "Email Templates", créez un nouveau template avec le contenu ci-dessus
// 4. Copiez les IDs et remplacez les valeurs dans ce fichier
// 5. Remplacez aussi les valeurs dans src/app/contact/page.tsx 