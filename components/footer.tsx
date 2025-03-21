"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {  Send } from 'lucide-react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations(); 

  return (
    <footer className="mt-10 text-gray-300 pb-10 md:mx-0 mx-4">
      <div className="container mx-auto px-8 py-10 bg-gradient-to-t from-orange-950 via-orange-800 to-orange-600 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">{t("fm1")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm11")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm12")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm13")}
                </Link>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-6"> {t("fm2")}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm21")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm22")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-500 transition-colors">
                {t("fm23")}
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-white font-semibold mb-6">{t("fm3")}</h3>
            <ul className="space-y-4">
              <li>+(1) 123 656 7866</li>
              <li>
                <Link 
                  href="mailto:crycoinfotive@.com" 
                  className="hover:text-orange-500 transition-colors"
                >
                  info@bitconeanos.com
                </Link>
              </li>
              <li>
                <Link 
                  href="https://bitconeanos.com" 
                  className="hover:text-orange-500 transition-colors"
                >
                  bitconeanos.com
                </Link>
              </li>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-700 transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-700 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-700 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-orange-700 transition-colors">
                  <Send className="w-5 h-5" />
                </Link>
              </div>
            </ul>
          </div>

         
          <div className="bg-slate-950/50 border border-orange-600 rounded-2xl p-8 content-center">
            <h3 className="text-2xl font-semibold text-white text-center  mb-8">
            {t("funete")}
            </h3>
            <Link href={`https://t.me/+DBo_c8QjRDcwNDYx`} target="_blank">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
           <FaDiscord />
           {t("funirme")}
            </Button>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-700 mt-16 pt-8 text-center">
          <p>{t("copy")}</p>
        </div>
      </div>
    </footer>
  )
}

