import React from 'react'
import Pricing4Css from'./Pricing.module.css'
import { Editor, Frame } from '@craftjs/core';
import { TextH1, TextH2, IconText, ButtonText} from '../myComponents/CraftText';

export default function Pricing() {
    return (
        <Editor resolver={{TextH1, TextH2, IconText, ButtonText}}>
            <Frame>
                <div className="py-20 px-0 w-full">
                    <div className={Pricing4Css.containerMainPrice}>
                        <div className="flex flex-col items-center py-10 px-0">
                            <TextH2 classStyle={`text-2xl ${Pricing4Css.pricingPlanHead}`} text="Reasonable Pricing Plans"/>
                            <TextH1 classStyle={`text-5xl text-center ${Pricing4Css.pricingPlanSubhead}`} text="Our Pricing"/>
                        </div>

                        <div className={`flex flex-wrap justify-center px-0 ${Pricing4Css.container1}`}>
                            <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                                <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Personal security"/>
                                <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="Start"/>
                                <ul className="p-5 list-none">
                                    <li className="p-1">
                                        <IconText classStyle="fas fa-check" text=" CCTV Service"/>
                                    </li>
                                    <li className="p-1">
                                        {/* <i className="fas fa-times"></i> Alarm signaling */}
                                        <IconText classStyle="fas fa-times" text=" Alarm signaling" />
                                    </li>
                                    <li className="p-1">
                                        {/* <i className="fas fa-check"></i> Access control */}
                                        <IconText classStyle="fas fa-check" text=" Access Control" />
                                    </li>
                                    <li className="p-1">
                                        {/* <i className="fas fa-times"></i> Alarm signaling */}
                                        <IconText classStyle="fas fa-times" text=" Alarm signaling" />
                                    </li>
                                </ul>
                                <div className="p-5">
                                    <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote"/>
                                </div>
                            </div>
                            <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                                {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1> */}
                                {/* <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>Medium</span>
                                </h2> */}
                                <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" />
                                <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="Medium" />
                                <ul className="p-5 list-none">
                                    <li className="p-1"><IconText classStyle="fas fa-check" text=" CCTV Service"/></li>
                                    <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                    <li className="p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li>
                                    <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                </ul>
                                <div className="p-5">
                                    <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" />
                                </div>
                            </div>
                            <div className={`border-2 border-solid border-black bg-black flex flex-col items-center p-5 m-2 ${Pricing4Css.pricingCards}`}>
                                {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Full Services</h1>
                                <h2 className="flex justify-center items-center text-5xl text-white text-center">
                                    <span>Pro</span>
                                </h2> */}
                                <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Full Services" />
                                <TextH2 classStyle="flex justify-center items-center text-5xl text-white text-center" text="Pro" />
                                <ul className="p-5 list-none">
                                    <li className="text-white p-1"><IconText classStyle="fas fa-check" text=" CCTV Service"/></li>
                                    <li className="text-white p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                    <li className="text-white p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li>
                                    <li className="text-white p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                </ul>
                                <div className="p-5">
                                    <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" />
                                </div>
                            </div>
                            <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                                {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1>
                                <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>All in one</span>
                                </h2> */}
                                <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" />
                                <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="All in one" />
                                <ul className="p-5 list-none">
                                    <li className="p-1"><IconText classStyle="fas fa-check" text=" CCTV Service"/></li>
                                    <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                    <li className="p-1"><IconText classStyle="fas fa-check" text=" Access Control" /></li>
                                    <li className="p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li>
                                </ul>
                                <div className="p-5">
                                    <ButtonText classStyle={`text-base border-2 border-solid py-2 px-9 hover:bg-black hover:text-white ${Pricing4Css.cardBtn}`} text="Get Quote" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Frame>
        </Editor>
    );
}
