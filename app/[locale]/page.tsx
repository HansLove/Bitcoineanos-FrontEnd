// import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { LeadFunnel } from "@/components/lead-funnel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Navbar /> */}
      
      <Hero />
      <Manifesto />
      <LeadFunnel />
      <Footer/> 
      
    </main>
  )
}

