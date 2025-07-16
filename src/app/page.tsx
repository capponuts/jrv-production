import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Video from '../components/Video'
import Photo from '../components/Photo'
import Tarif from '../components/Tarif'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      <Services />
      <Video />
      <Photo />
      <Tarif />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
