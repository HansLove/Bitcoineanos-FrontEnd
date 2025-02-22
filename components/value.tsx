'use client'
import { useTranslations } from "next-intl";
import { useState, useEffect } from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface BitcoinData {
    current_price: number
    price_change_percentage_24h: number
}

export function Value() {
    const t = useTranslations(); 
    const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchBitcoinData = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
                const data = await response.json()
                setBitcoinData(data[0])
                setLoading(false)
            } catch (error) {
                console.error('Error fetching Bitcoin data:', error)
                setLoading(false)
            }
        }

        fetchBitcoinData()
        const interval = setInterval(fetchBitcoinData, 60000) // Update every minute

        return () => clearInterval(interval)
    }, [])

    if (loading) {
        return (
            <div className="bg-gray-900/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-800 animate-pulse">
                <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-16 bg-gray-700 rounded w-full"></div>
            </div>
        )
    }

    if (!bitcoinData) {
        return (
            <div className="bg-gray-900/50 max-w-screen-2xl rounded-2xl p-6 backdrop-blur-sm border border-gray-800">
                <p className="text-white">Failed to load Bitcoin data</p>
            </div>
        )
    }

    const priceChangeColor = bitcoinData.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'
    const PriceChangeIcon = bitcoinData.price_change_percentage_24h >= 0 ? ArrowUp : ArrowDown

    return (

        <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-2xl p-6 max-w-md  backdrop-blur-sm border border-orange-500/20" >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="size-12 rounded-lg bg-orange-500 flex items-center justify-center">
                        <span className="text-white font-bold">BTC</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">Bitcoin</h3>
                        <p className="text-gray-400 text-xs">{t("precioactual")}</p>
                    </div>
                </div>
                <div className="flex items-end justify-between">
                    <div>
                    </div>
                    <div className={`flex items-center ${priceChangeColor}`}>
                        <PriceChangeIcon className="mr-1" size={20} />
                        <span className="text-xl font-semibold">
                            {Math.abs(bitcoinData.price_change_percentage_24h).toFixed(2)}%
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-4xl font-bold text-orange-500">
                ${bitcoinData.current_price.toLocaleString()}
            </p>

        </div>



    )
}

