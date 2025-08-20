"use client"
import { ArrowRight, Shield, Zap, Heart } from 'lucide-react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import { useTranslations } from "next-intl"
import Link from "next/link"

export function CTASection() {
  const t = useTranslations()
  
  const reasons = [
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Tu información está protegida y solo se usa para conectar con la comunidad"
    },
    {
      icon: Zap,
      title: "Acceso Inmediato",
      description: "Recibe contenido exclusivo y recursos desde el primer día"
    },
    {
      icon: Heart,
      title: "Comunidad Real",
      description: "Conecta con personas que comparten tus valores y visión"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-orange-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Zoom triggerOnce>
            <div className="inline-flex items-center gap-2 bg-white/20 font-bold rounded-full px-4 py-2 mb-6">
              <span className="text-white">⚡</span>
              <span className="text-white">Última Oportunidad</span>
            </div>
          </Zoom>
          
          <Fade triggerOnce>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-spaceGrotesk mb-6">
              {t("cta_title")}
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              {t("cta_subtitle")}
            </p>
          </Fade>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Slide triggerOnce cascade delay={200}>
            {reasons.map((reason, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-white/80">{reason.description}</p>
              </div>
            ))}
          </Slide>
        </div>

        <div className="text-center">
          <Fade triggerOnce delay={600}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                El Momento es Ahora
              </h3>
              <p className="text-white/90 mb-6">
                Cada día que esperas es un día menos para acumular Bitcoin y construir tu futuro financiero.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#lead-funnel">
                  <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
                    ¡Quiero Unirme Ahora!
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                
                <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Ver Comunidad
                  </button>
                </Link>
              </div>
              
              <p className="text-white/60 text-sm mt-4">
                Únete a más de 2,500 Bitcoineanos que ya están construyendo su futuro
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
