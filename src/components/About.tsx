'use client'

import { motion } from 'framer-motion'
import { Award, Users, Camera, MapPin } from 'lucide-react'

const About = () => {

  const expertise = [
    {
      icon: <Camera size={32} />,
      title: 'Équipement Professionnel',
      description: 'Matériel haut de gamme pour des résultats exceptionnels'
    },
    {
      icon: <Award size={32} />,
      title: 'Expertise FPV',
      description: 'Spécialiste reconnu dans les prises de vue drone FPV'
    },
    {
      icon: <Users size={32} />,
      title: 'Approche Personnalisée',
      description: 'Chaque projet est unique, notre approche l\'est aussi'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Basé en Vendée',
      description: 'Intervention dans toute la région Pays de la Loire'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white relative z-10">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Qui <span className="text-orange-500">Suis-je</span> ?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Passionné par la vidéo et basé en Vendée, au cœur des Pays de la Loire, j&apos;ai créé JRV Production pour mettre en image ce qui mérite d&apos;être vu, ressenti, retenu.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Je réalise des vidéos sur mesure : mariages, événements, concerts, clips, portraits d&apos;artisans, contenus de marque…
              Chaque projet a son énergie. Mon rôle, c&apos;est de la capter avec justesse.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              J&apos;apporte un regard précis, une écoute réelle et un montage soigné.
              Je m&apos;adapte à chaque univers pour créer des vidéos naturelles, sincères et vivantes.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Si ma manière de faire vous parle, je suis prêt à raconter votre histoire.
            </p>
            

          </motion.div>


        </div>

        {/* Section expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-black">
            Mon <span className="text-orange-500">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 