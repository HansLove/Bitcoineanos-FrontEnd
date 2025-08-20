"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Check, Bitcoin, Users, Target, Zap } from 'lucide-react'
import { useTranslations } from "next-intl"
import { Fade, Slide, Zoom } from 'react-awesome-reveal'

export function LeadFunnel() {
  const t = useTranslations()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    system: 'Bitcoineanos'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('http://localhost:3002/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          system: 'Bitcoineanos'
        })
      } else {
        console.error('Error al enviar el lead')
      }
    } catch (error) {
      console.error('Error de conexión:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Bitcoin,
      title: "Ahorro en Bitcoin",
      description: "Aprende las mejores estrategias para acumular Bitcoin de forma constante"
    },
    {
      icon: Users,
      title: "Comunidad Exclusiva",
      description: "Acceso a nuestra comunidad privada de Bitcoineanos"
    },
    {
      icon: Target,
      title: "Educación Continua",
      description: "Recursos y contenido exclusivo sobre Bitcoin y libertad financiera"
    },
    {
      icon: Zap,
      title: "Networking",
      description: "Conecta con otros Bitcoineanos y expande tu red"
    }
  ]

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-orange-500/10 to-red-500/10">
        <div className="container mx-auto px-4 text-center">
          <Zoom triggerOnce>
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-emerald-500" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {t("funnel_success_title")}
              </h2>
              <p className="text-gray-300 mb-6">
                {t("funnel_success_message")}
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Enviar otro registro
              </Button>
            </div>
          </Zoom>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-funnel" className="py-20 bg-gradient-to-br from-orange-500/10 to-red-500/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Zoom triggerOnce>
              <div className="inline-flex items-center gap-2 bg-white/10 font-bold rounded-full px-4 py-2 mb-6">
                <span className="text-orange-500">🚀</span>
                <span className="text-gray-300">Únete Ahora</span>
              </div>
            </Zoom>
            
            <Fade triggerOnce cascade>
                          <h2 className="text-4xl md:text-5xl font-bold text-white font-spaceGrotesk">
              {t("funnel_title")}
            </h2>
            
            <p className="text-lg text-gray-300">
              {t("funnel_subtitle")}
            </p>
            </Fade>

            <div className="grid grid-cols-2 gap-4">
              <Slide triggerOnce cascade delay={200}>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Zoom triggerOnce>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {t("funnel_form_title")}
              </h3>
            </Zoom>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Slide triggerOnce cascade delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="12345678"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : '¡Quiero ser Bitcoineano!'}
                </Button>
              </Slide>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              Al registrarte, aceptas recibir comunicaciones de nuestra comunidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
