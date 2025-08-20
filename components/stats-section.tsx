"use client"
import { TrendingUp, Users, Bitcoin, Target } from 'lucide-react'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import { useTranslations } from "next-intl"

export function StatsSection() {
  const t = useTranslations()
  
  const stats = [
    {
      icon: Users,
      value: "2,500+",
      label: "Bitcoineanos",
      description: "Miembros activos en la comunidad"
    },
    {
      icon: Bitcoin,
      value: "$15M+",
      label: "Ahorro Colectivo",
      description: "En Bitcoin acumulado por la comunidad"
    },
    {
      icon: TrendingUp,
      value: "47%",
      label: "Crecimiento Anual",
      description: "De nuevos miembros este año"
    },
    {
      icon: Target,
      value: "89%",
      label: "Meta Cumplida",
      description: "De objetivos de ahorro alcanzados"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Zoom triggerOnce>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 font-bold rounded-full px-4 py-2 mb-6">
              <span className="text-orange-500">📊</span>
              <span className="text-gray-300">{t("stats_title")}</span>
            </div>
          </Zoom>
          
          <Fade triggerOnce>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-spaceGrotesk mb-6">
              {t("stats_subtitle")}
            </h2>
            
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t("stats_description")}
            </p>
          </Fade>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Slide triggerOnce cascade delay={200}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-10 h-10 text-orange-500" />
                  </div>
                  
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-orange-500 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <div className="mt-16 text-center">
          <Fade triggerOnce delay={600}>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Quieres ser parte de estas estadísticas?
              </h3>
              <p className="text-gray-300 mb-6">
                Únete a nuestra comunidad y contribuye al crecimiento de la revolución Bitcoin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 text-emerald-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm font-medium">Ahorro Constante</span>
                </div>
                <div className="flex items-center gap-2 text-blue-500">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Educación Continua</span>
                </div>
                <div className="flex items-center gap-2 text-purple-500">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm font-medium">Comunidad Activa</span>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
