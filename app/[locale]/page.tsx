// import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CardsSection } from "@/components/cards-section"
import { About } from "@/components/about"
import { Testimonial } from "@/components/testimonials"
import { StatsSection } from "@/components/stats-section"
import { LeadFunnel } from "@/components/lead-funnel"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Specialists } from "@/components/specialists"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Navbar /> */}
      
      <Hero />
      <About/>
      <Specialists />
      <CardsSection />
      <StatsSection />
      <Testimonial/>
      <LeadFunnel />
      <CTASection />
      <Footer/> 
      
    </main>
  )
}

