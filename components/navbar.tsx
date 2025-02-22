"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations("navbar");
    const pathname = usePathname();
    const currentLocale = pathname.split("/")[1];
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Link href={`/${currentLocale}/`} >
                            <Image
                                src="/logo.png"
                                width={150}
                                height={100}
                                alt="logo"
                                className=""
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href={`/${currentLocale}/#about`} className="text-gray-300 hover:text-white transition-colors">
                        {t("#about")}
                        </Link>
                        <Link href="/#values" className="text-gray-300 hover:text-white transition-colors">
                        {t("#values")}
                        </Link>
                        <Link href="/#community" className="text-gray-300 hover:text-white transition-colors">
                        {t("#community")}
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <span className="text-gray-300">{t("sebitconeano")}</span>
                        <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        {t("unirme")}
                        </Button></Link>
                        <Link
                            href={currentLocale === "en" ? "/es" : "/en"}
                            className="ml-auto border p-2 rounded font-emoji"
                        >
                            {currentLocale === "en" ? "🇲🇽 Español" : "🇺🇸 English"}
                        </Link>
                    </div>


                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/#about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                            {t("#about")}
                            </Link>
                            <Link href="/#values" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                            {t("#values")}
                            </Link>
                            <Link href="/#community" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                            {t("#community")}
                            </Link>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <span className="text-gray-300">#SeBitconeano</span>
                            </div>
                            <div className="mt-3 px-2">
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                {t("unirme")}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
