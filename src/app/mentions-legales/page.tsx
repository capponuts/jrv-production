'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Mentions Légales
          </h1>

          <div className="space-y-8 text-white/90">
            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Éditeur du site</h2>
              <p className="text-white/80 leading-relaxed">
                Le site <strong>www.jrvproduction.fr</strong> est édité par :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white/80 ml-4">
                <li><strong>Raison sociale :</strong> JRV Production</li>
                <li><strong>Activité :</strong> Vidéaste professionnel</li>
                <li><strong>Localisation :</strong> Vendée, Pays de la Loire, France</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. Directeur de publication</h2>
              <p className="text-white/80 leading-relaxed">
                Le directeur de publication est Jérémy, propriétaire de JRV Production.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Hébergement</h2>
              <p className="text-white/80 leading-relaxed">
                Le site est hébergé par :
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-white/80 ml-4">
                <li><strong>Vercel Inc.</strong></li>
                <li>340 S Lemon Ave #4133</li>
                <li>Walnut, CA 91789</li>
                <li>États-Unis</li>
                <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 underline">vercel.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Propriété intellectuelle</h2>
              <p className="text-white/80 leading-relaxed">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse de l&apos;éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Protection des données personnelles</h2>
              <p className="text-white/80 leading-relaxed">
                Conformément à la loi &quot;Informatique et Libertés&quot; du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), 
                vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                Pour exercer ce droit, vous pouvez nous contacter via le formulaire de contact disponible sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Cookies</h2>
              <p className="text-white/80 leading-relaxed">
                Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. 
                En continuant à naviguer sur ce site, vous acceptez l&apos;utilisation de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Responsabilité</h2>
              <p className="text-white/80 leading-relaxed">
                JRV Production ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, 
                lors de l&apos;accès au site www.jrvproduction.fr, et résultant soit de l&apos;utilisation d&apos;un matériel ne répondant pas aux spécifications, 
                soit de l&apos;apparition d&apos;un bug ou d&apos;une incompatibilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Liens hypertextes</h2>
              <p className="text-white/80 leading-relaxed">
                Le site www.jrvproduction.fr peut contenir des liens hypertextes vers d&apos;autres sites présents sur le réseau Internet. 
                Les liens vers ces autres ressources vous font quitter le site www.jrvproduction.fr.
              </p>
              <p className="text-white/80 leading-relaxed mt-4">
                Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de l&apos;éditeur. 
                Aucune autorisation ni demande d&apos;information préalable ne peut être exigée par l&apos;éditeur à l&apos;égard d&apos;un site qui souhaite établir un lien vers le site de l&apos;éditeur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">9. Contact</h2>
              <p className="text-white/80 leading-relaxed">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter via le{' '}
                <Link href="/contact" className="text-orange-500 hover:text-orange-400 underline">
                  formulaire de contact
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-orange-500 mb-4">10. Droit applicable</h2>
              <p className="text-white/80 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. 
                En cas de litige et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link 
              href="/"
              className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}

