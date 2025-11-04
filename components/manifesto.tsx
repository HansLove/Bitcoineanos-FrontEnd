"use client"
import { Fade, Slide } from 'react-awesome-reveal'
import { useTranslations } from "next-intl"
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Manifesto() {
  const t = useTranslations("manifesto")

  const sections = [
    {
      id: "fin",
      title: t("fin.title"),
      content: t("fin.content")
    },
    {
      id: "nacimiento",
      title: t("nacimiento.title"),
      content: t("nacimiento.content")
    },
    {
      id: "dios",
      title: t("dios.title"),
      content: t("dios.content"),
      pillars: [
        { title: t("dios.pillar1.title"), desc: t("dios.pillar1.desc") },
        { title: t("dios.pillar2.title"), desc: t("dios.pillar2.desc") },
        { title: t("dios.pillar3.title"), desc: t("dios.pillar3.desc") }
      ]
    },
    {
      id: "estado",
      title: t("estado.title"),
      content: t("estado.content")
    },
    {
      id: "corrupcion",
      title: t("corrupcion.title"),
      content: t("corrupcion.content")
    },
    {
      id: "hombre",
      title: t("hombre.title"),
      content: t("hombre.content")
    },
    {
      id: "orden",
      title: t("orden.title"),
      content: t("orden.content")
    },
    {
      id: "tarea",
      title: t("tarea.title"),
      content: t("tarea.content")
    },
    {
      id: "jardin",
      title: t("jardin.title"),
      content: t("jardin.content")
    }
  ]

  return (
    <section className="relative overflow-hidden bg-black py-20" id="manifesto">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <Fade triggerOnce>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 font-bold font-spaceGrotesk rounded-full px-4 py-2 mb-6 border border-orange-500/20">
              <span className="text-orange-500">{t("badge")}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-spaceGrotesk text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </Fade>

        {/* Manifesto Sections */}
        <div className="space-y-24">
          {sections.map((section, index) => (
            <div key={section.id} className="relative">
              <Fade triggerOnce delay={index * 100}>
                <div className="relative">
                  {/* Section Number */}
                  <div className="absolute -left-8 md:-left-12 top-0 text-6xl md:text-8xl font-bold text-orange-500/10 select-none">
                    {index + 1}
                  </div>
                  
                  {/* Section Content */}
                  <div className="relative pl-8 md:pl-16">
                    <h2 className="text-2xl md:text-3xl font-bold font-spaceGrotesk text-orange-500 mb-6">
                      {section.title}
                    </h2>
                    
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>
                    </div>

                    {/* Special section for Dios, Familia, Bitcoin */}
                    {section.pillars && (
                      <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {section.pillars.map((pillar, pIndex) => (
                          <Slide triggerOnce key={pIndex} direction="up" delay={pIndex * 100}>
                            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-6 border border-orange-500/20 backdrop-blur-sm">
                              <h3 className="text-xl font-bold text-orange-500 mb-3 font-spaceGrotesk">
                                {pillar.title}
                              </h3>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {pillar.desc}
                              </p>
                            </div>
                          </Slide>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <Fade triggerOnce delay={900}>
          <div className="mt-24 text-center">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-2xl p-8 md:p-12 border border-orange-500/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-4 font-spaceGrotesk">
                {t("cta.title")}
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#lead-funnel">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                    {t("cta.button1")}
                  </Button>
                </Link>
                <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
                  <Button variant="outline" className="border-orange-500/50 text-white hover:bg-orange-500/10 px-8">
                    {t("cta.button2")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

