"use client"
import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from './ui/button'
import { Slide, Zoom } from 'react-awesome-reveal'
import Link from 'next/link'
import { useTranslations } from "next-intl";



export function Testimonial() {
    const t = useTranslations();

    const testimonials = [
        {
            name: "Jorge Joya",
            role: "Web developer",
            image: "/t1.jpg",
            content: t("comentario1") 
        },
        {
            name: "Daniel Flores",
            role: "Dev Ops",
            image: "/t2.jpg",
            content:  t("comentario2")
        }
    ];
    
    return (

        <>
            <section
                className="relative bg-gradient-to-b from-orange-800 to-orange-600 py-20"
                id="community"
            >
               
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Zoom triggerOnce cascade>
                    <h1 className="text-4xl md:text-5xl font-bold font-spaceGrotesk text-white mb-6">
                    {t("listo")}
                    </h1>
                  
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    {t("unete")}
                    </p>
                    </Zoom>
                    <Slide triggerOnce direction='up' delay={200}>
                    <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
                    <Button
                        size="lg"
                        className="bg-black hover:scale-105 text-white hover:bg-black font-semibold text-lg px-8 py-6"
                    >
                        {t("quiero")}
                    </Button></Link>
                    </Slide>
                </div>

                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-grid"
                        style={{
                            backgroundImage:
                                "linear-gradient(0deg, rgba(250, 100, 110, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 100, 110, 0.6) 1px, transparent 1px)",
                            backgroundSize: "30px 30px", 
                        }}
                    ></div>
                </div>
            </section>

            <section className="bg-black to-transparent py-24">
                <div className="container mx-auto px-4">
                <Zoom triggerOnce >
                    <h2 className="text-4xl font-spaceGrotesk font-bold text-center text-white mb-12">
                    {t("comentarios")}
                    </h2>
                    </Zoom>
                    <div className="grid md:grid-cols-2 gap-8">
                    <Slide direction='up' triggerOnce cascade>
                        {testimonials.map((testimonial, index) => (
                           
                            <div key={index} className="bg-gray-950/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transition-all hover:bg-gray-950/50">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                                        <p className="text-emerald-500">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                                <div className="flex text-emerald-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                   
                                </div> 
                            </div>
                        ))}</Slide>
                    </div>
                </div>
            </section>
        </>
    )
}

