import { Editor, Frame } from '@craftjs/core';
import React from 'react'
import aboutimg from '../assets/template4images/news3.jpg'
import {TextH1, TextH3, TextPara} from '../myComponents/CraftText';
import About4Css from './AboutUs.module.css'

export default function AboutUs() {
    return (
        <Editor resolver={{TextH1, TextPara, TextH3}}>
            <Frame>
                <div className={`${About4Css.container02} py-28 px-12 flex items-center justify-center bg-black w-full`}>
                    <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                        <img className={`${About4Css.aboutImg} w-11/12`} src={aboutimg} alt="about"/>
                    </div>
                    <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                        <section>
                            <article>
                                <TextH1 classStyle={`${About4Css.artH1} w-full`} text="About Us"></TextH1>
                                <TextH3 classStyle="text-white text-3xl w-full mb-6" text="CCTV for your Safety"/>
                                <TextPara classStyle="text-white text-xl py-3 px-0"
                                    text="Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                                    dolor sit amet leo malesuada scelerisque. Sed sed tortor
                                    lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                                    accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                                    bibendum nibh facilisis ac."/>
                                <div className="py-5">
                                    <button className={`${About4Css.btnReadMore} text-white border flex justify-between w-40 items-center border-solid py-2 px-8 hover:text-black hover:bg-white`}>
                                        <TextPara text="Read More"/>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </Frame>
        </Editor>
    );
}
