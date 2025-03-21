import Calculator from "@/components/calculator";
import { Footer } from "@/components/footer";
import KPI from "@/components/KPI";
import Rank from "@/components/rank";
import { BiInfoCircle } from "react-icons/bi";

export default function Profile({ params }: { params: { locale: string } }) {
    return (
        <div className="h-full w-full bg-gradient-to-bl from-[#1d243a] via-[#161a2c] to-[#0b0d19] pt-10">
            <div className=" max-w-screen-2xl mx-auto md:p-10 p-6 mt-2 ">

                <div className="flex justify-between text-xs items-center w-full">
                    <h1>Hey Bitcoiner!</h1>
                    <div className="flex items-center">
                        <p className="text-slate-400">Hello <span className="text-white">Aaron</span></p>
                        <img src="/avatar.png" className="w-8 h-8 mx-2" />
                        <p className="text-slate-400"> Welcome to your Dashboard</p>
                    </div>
                </div>

                <div className="cryptohopper-web-widget" data-id="2" data-chart_color="#dd6500" data-text_color="#ffffff" data-background_color="#1B2138" data-theme="custom"></div>

                <div className="grid grid-cols-12 gap-4 mt-6">

                    <div className="md:col-span-3 col-span-12 rounded-xl w-full">
                        <Rank />
                        
                    </div>

                    <div className="md:col-span-3 col-span-12 rounded-xl">
                       <KPI/>
                    </div>

                    <div className="md:col-span-6 h-full col-span-12">
                        <div className="relative bg-[url('/holding.jpg')] h-full bg-cover bg-center border border-slate-900 shadow-xl md:p-8 p-4 rounded-xl">
                            <div className="absolute inset-0 bg-black opacity-50 z-0 rounded-xl"></div>
                            <div className="relative z-20">
                                <p className="text-xs mb-6 text-slate-400 flex items-center">
                                    Your holding time <BiInfoCircle className="w-4 h-4 ml-2" />
                                </p>
                                <div className="justify-between flex">
                                    <p className="text-sm ">
                                        Years <span className="text-lg bg-black/50 md:px-10 px-6 mx-2 my-2 rounded-lg py-2">2</span>
                                    </p>
                                    <p className="text-sm">
                                        Months <span className="text-lg bg-black/50 md:px-10 px-6 mx-2  rounded-lg py-2">7</span>
                                    </p>
                                    <p className="text-sm">
                                        Days <span className="text-lg bg-black/50 md:px-10 px-6 mx-2  rounded-lg py-2">21</span>
                                    </p>
                                    <p className="text-sm">
                                        Hours <span className="text-lg bg-black/50 md:px-10 px-6 mx-2  rounded-lg py-2">13</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid-cols-12 grid gap-4 mt-4">
                    <div className="col-span-12 md:col-span-3">
                        <div className="cryptohopper-web-widget " data-id="3" data-text_color="#ffffff" data-background_color="#1b2139" data-fullwidth="1" data-coins="bitcoin" data-theme="custom"></div>
                        <Calculator/>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <div className="relative bg-[url('/rank.jpg')]  text-right bg-cover bg-center md:p-8 p-4 text-white  justify-end items-baseline rounded-xl mb-3">
                            <div className="absolute inset-0 bg-black  opacity-80 rounded-xl"></div>
                            <div className="flex items-center relative">
                                <p className="text-2xl font-bold uppercase">Join to<br></br> Betesda</p>
                                <p className="relative text-sm text-white px-6">Betesda it is our program specifically designed for scheduled savings in Bitcoin. With this plan, our users can save in a structured and consistent manner.</p>
                                <button className="button-18" role="button">
                                    <span >Join  NOW</span>
                                </button>
                            </div>
                        </div>
                     
                        <div className="cryptohopper-web-widget " data-id="9" data-text_color="#ffffff" data-theme="custom" data-background_color="#191F32" data-coins="bitcoin,ethereum,tether,cardano,litecoin,bitcoin-cash" data-multi_currencies="BTC,EUR,GBP,USD" data-atid="1"></div>

                      

                    </div>
                </div>
                <Footer/> 
            </div>
            
        </div>
    );
}
