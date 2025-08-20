"use client"
import { Button } from "@/components/ui/button"
import { Slide, Zoom } from "react-awesome-reveal"
import { useTranslations } from "next-intl";
import Link from "next/link";

export function Hero() {
  const t = useTranslations(); 

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video 
        className="absolute w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
        poster=""
      >
        <source src="/volcano.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <Zoom triggerOnce cascade>
        <div className="inline-flex items-center gap-2 bg-white/10 font-bold font-spaceGrotesk rounded-full px-4 py-2 mb-8">
          <h2 className="text-gray-300">{t("uptitle1")}</h2>
          <h2 className="text-orange-500">{t("uptitle2")} →</h2>
        </div>

        <h1 className="max-w-5xl mx-auto mb-6">
          <span className="block text-4xl md:text-6xl font-bold font-spaceGrotesk text-white mb-2">
          {t("title1")}
          </span>
         
          <span className="block text-5xl md:text-7xl font-bold font-spaceGrotesk text-orange-500">
          {t("title2")}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
        {t("subtitle")}
        </p>
        </Zoom>
        <div className="flex flex-wrap justify-center gap-4">
            <Slide triggerOnce cascade delay={300} direction="up">
            <Link href="#lead-funnel">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
          {t("buttonhero1")}
          </Button></Link>
          <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
          <Button variant="outline" className="border-gray-600 text-white hover:bg-white/10 px-8">
          {t("buttonhero2")}
          </Button></Link>
          </Slide>
        </div>
      </div>
    </section>
  )
}

