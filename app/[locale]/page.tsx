// import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CardsSection } from "@/components/cards-section"
import { About } from "@/components/about"
import { Testimonial } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Navbar /> */}
      <div className="absolute top-4 right-4 z-50">
        <Link 
          href="/animation" 
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium"
        >
          View Bitcoin Animation
        </Link>
      </div>
      <Hero />
      <About/>
      <CardsSection />
      <Testimonial/>
      <Footer/> 
      
    </main>
  )
}

