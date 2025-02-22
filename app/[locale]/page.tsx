import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CardsSection } from "@/components/cards-section"
import { About } from "@/components/about"
import { Testimonial } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About/>
      <CardsSection />
      <Testimonial/>
      <Footer/> 
      
    </main>
  )
}

