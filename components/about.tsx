"use client"
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Value } from './value'
import { Fade, Slide, Zoom } from 'react-awesome-reveal'
import { useTranslations } from "next-intl";

export function About() {
    const t = useTranslations(); 
    const features = [
        t("check1"),
        t("check2"),
        t("check3")
    ]

    return (
        <section className="relative -mt-20   overflow-hidden bg-black" id='about'>
            <div className="cointainer mx-auto max-w-screen-2xl p-6 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <Zoom triggerOnce>
                        <div className="container items-start content-start ">
                            <Value />
                        </div>
                        </Zoom>
                        <Fade triggerOnce cascade>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-white">{t("uneteahora")}</span>
                            <span className="px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-500 rounded-full">
                            {t("#soybitconeano")}
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-white font-spaceGrotesk">
                        {t("quesifnifica")}
                        </h2>

                        <p className="text-lg text-gray-300">
                        {t("significa")}
                        </p>
                        </Fade>
                        <div className="space-y-4">
                            <Zoom triggerOnce direction='left' cascade delay={500}>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-emerald-500" />
                                    </div>
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                            </Zoom>
                        </div>

                     
                    </div>

                    <div className="relative lg:h-[600px]">
                        <div className="relative z-10 grid grid-cols-3 gap-4">
                            <Slide triggerOnce cascade delay={100} direction='up'>
                            <div className="col-span-1 pt-12">
                                <Image
                                    src="/1.webp"
                                    width={300}
                                    height={600}
                                    alt="bitconeanos"
                                    className="rounded-2xl shadow-2xl floating-image"
                                />
                            </div>
                            <div className="col-span-1">
                                <Image
                                    src="/2.webp"
                                    width={300}
                                    height={600}
                                    alt="bitconeanos"
                                    className="rounded-2xl shadow-2xl floating-image3"
                                />
                            </div>
                            <div className="col-span-1 pt-20">
                                <Image
                                    src="/3.webp"
                                    width={300}
                                    height={600}
                                    alt="bitconeanos"
                                    className="rounded-2xl shadow-2xl floating-image2"
                                />
                            </div>
                            </Slide>
                        </div>
                        {/* Gradient overlay */}
                    </div>
                </div>
            </div>
        </section>
    )
}

