"use client"
import { EarthIcon, Handshake, Wallet } from 'lucide-react'
import Image from 'next/image'
import { Slide, Zoom } from 'react-awesome-reveal'
import { useTranslations } from "next-intl";

export function CardsSection() {
    const t = useTranslations(); 

    return (
        <section className="bg-black py-20" id='values'>
            <div className="container mx-auto px-4">
                <Zoom triggerOnce>
                <h2 className="text-4xl font-spaceGrotesk font-bold text-center text-white mb-12">
                   {t("nuestrosvalores")}
                </h2>
                </Zoom>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <Slide triggerOnce direction='left'>
                        <div className="bg-gradient-to-b overflow-hidden from-orange-500/20 to-black hover:bg-orange-700/10  border-orange-500/30 rounded-2xl px-6 pt-6 backdrop-blur-sm border border-gray-800">
                            <Zoom triggerOnce cascade>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className=" font-bold text-xl">{t("valor1")}</h3>
                                <EarthIcon className="text-orange-500 size-5" />
                            </div>
                            <div className="space-y-4">
                                <p>   {t("desc-valor1")}</p>
                            </div>
                            <Image
                                src="/v1.png"
                                width={300}
                                height={300}
                                alt="Mobile app screenshot 1"
                                className="mx-auto justify-center hover:scale-105 duration-200"
                            /></Zoom>
                        </div>
                    </Slide>
                    <Slide triggerOnce direction='up'>
                        <div className="bg-gradient-to-b overflow-hidden from-green-500/20 to-black hover:bg-green-700/10  border-green-500/30 rounded-2xl px-6 pt-6 backdrop-blur-sm border border-gray-800">
                        <Zoom triggerOnce cascade>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className=" font-bold text-xl">   {t("valor2")}</h3>
                                <Wallet className="text-orange-500 size-5" />
                            </div>
                            <div className="">
                                <p>{t("desc-valor2")}</p>
                            </div>
                            <Image
                                src="/v2.png"
                                width={300}
                                height={300}
                                alt="Mobile app screenshot 1"
                                className="mx-auto justify-center hover:scale-105 duration-200"
                            /></Zoom>
                        </div>
                    </Slide>
                    <Slide triggerOnce direction='right'>
                        <div className="bg-gradient-to-b overflow-hidden from-slate-500/20 to-black hover:bg-slate-700/10  border-slate-500/30 rounded-2xl px-6 pt-6 backdrop-blur-sm border border-gray-800">
                        <Zoom triggerOnce cascade>
                              <div className="flex items-center justify-between mb-4">
                                <h3 className=" font-bold text-xl">{t("valor3")}</h3>
                                <Handshake className="text-orange-500 size-5" />
                            </div>
                            <div className="space-y-4">
                                <p>{t("desc-valor3")}</p>
                            </div>
                            <Image
                                src="/v3.png"
                                width={300}
                                height={300}
                                alt="Mobile app screenshot 1"
                                className="mx-auto justify-center hover:scale-105 duration-200"
                            /></Zoom>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    )
}

