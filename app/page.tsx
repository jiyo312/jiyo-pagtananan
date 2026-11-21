import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Awards from './components/Awards'
import HowIWork from './components/HowIWork'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowIWork />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Skills />
        <Certificates />
        <Awards />
        <Contact />
      </main>
    </>
  )
}
