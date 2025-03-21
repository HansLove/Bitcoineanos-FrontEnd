'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface KPIData {
    title: string;
    value: string;
    description: string;
}

const kpiData: KPIData[] = [
    {
        title: 'Value Growth (%)',
        value: '+65%',
        description: 'Your investment grown since you bought it.'
    },
    {
        title: 'Time to end the hold',
        value: '31/36',
        description: 'Your total months holding BTC'
    },
    {
        title: 'Fiat Savings',
        value: '$5420',
        description: 'The amount you would have spent if you hadnt held BTC'
    }
];

export default function KPI() {
    const [selectedPoint, setSelectedPoint] = useState(0);

    return (
        <div className="relative w-full h-full bg-[#1b2139] rounded-xl p-3">
            {/* KPI Points */}
            {/* KPI Points */}
            <div className="absolute radio-input right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                {[0, 1, 2].map((index) => (
                    <input
                        name="radio"
                        type="radio"
                        key={index}
                        onClick={() => setSelectedPoint(index)}
                        className={cn(
                            "input",
                            selectedPoint === index ? "input" : "input"
                        )}
                        defaultChecked={index === 0} // ← Esto selecciona el primer input por defecto
                    />
                ))}
            </div>


            <div className="flex items-center  text-white max-w-[70%] my-auto transition-all duration-300">
                <div className="pt-2">
                    <h3 className="text-orange-400 text-xs font-semibold mb-2">
                        {kpiData[selectedPoint].title}
                    </h3>
                    <div className="text-5xl font-bold mb-2">
                        {kpiData[selectedPoint].value}
                    </div>
                    <p className="text-gray-400 text-xs">
                        {kpiData[selectedPoint].description}
                    </p>
                </div>
            </div>

        </div>
    );
}