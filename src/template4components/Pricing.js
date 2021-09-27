import React from 'react'
import Pricing4Css from'./Pricing.module.css'

export default function Pricing() {
    return (
        <div className="py-20 px-0">
            <div className={Pricing4Css.containerMainPrice}>
                <div className="flex flex-col items-center py-10 px-0">
                    <h2 className={`text-2xl ${Pricing4Css.pricingPlanHead}`}>Reasonable Pricing Plans</h2>
                    <h1 className={`text-5xl text-center ${Pricing4Css.pricingPlanSubhead}`}>Our Pricing</h1>
                </div>

                <div className={`flex flex-wrap justify-center px-0 ${Pricing4Css.container1}`}>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Personal security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>Start</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1">
                                <i className="fas fa-times"></i> Alarm signaling
                            </li>
                            <li className="p-1">
                                <i className="fas fa-check"></i> Access control
                            </li>
                            <li className="p-1">
                                <i className="fas fa-times"></i> Alarm signaling
                            </li>
                        </ul>
                        <div className="p-5">
                            <button className={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`}>Get Quote</button>
                        </div>
                    </div>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>Medium</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`}>Get Quote</button>
                        </div>
                    </div>
                    <div className={`border-2 border-solid border-black bg-black flex flex-col items-center p-5 m-2 ${Pricing4Css.pricingCards}`}>
                        <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Full Services</h1>
                        <h2 className="flex justify-center items-center text-5xl text-white text-center">
                            <span>Pro</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="text-white p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="text-white p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="text-white p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="text-white p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`}>Get Quote</button>
                        </div>
                    </div>
                    <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                        <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1>
                        <h2 className="flex justify-center items-center text-5xl text-black text-center">
                            <span>All in one</span>
                        </h2>
                        <ul className="p-5 list-none">
                            <li className="p-1"><i className="fas fa-check"></i> CCTV service</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                            <li className="p-1"><i className="fas fa-check"></i> Access control</li>
                            <li className="p-1"><i className="fas fa-times"></i> Alarm signaling</li>
                        </ul>
                        <div className="p-5">
                            <button className={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`}>Get Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
