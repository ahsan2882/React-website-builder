import { Editor, Frame } from '@craftjs/core';
import React from 'react';
import news1 from '../assets/template4images/news1.jpg';
import news2 from '../assets/template4images/news2.jpg';
import news3 from '../assets/template4images/news3.jpg';
import { ButtonText, TextH1, TextH3, TextPara } from '../myComponents/CraftText';
import Blog4Css from './Blog.module.css';

export default function Blog() {
    return (
        <Editor resolver={{TextH1, TextH3, TextPara, ButtonText}}>
            <Frame>
                <section className="bg-black py-28 px-0 w-full">
                    <div className="text-center">
                        <TextH3 classStyle={Blog4Css.blogMainHead} text="WHATS NEW"/>
                        <TextH1 classStyle="text-white font-black mb-12 text-5xl"text="Latest News"/>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-wrap justify-around w-4/5">
                            <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                                <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news1} alt="news 1" />
                                <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services"/>
                                <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/>
                                <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                    <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More"/>
                                </div>
                            </div>
                            <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                                <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news2} alt="news 2" />
                                <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" />
                                <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/>
                                <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                    <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" />
                                </div>
                            </div>
                            <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                                <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news3} alt="news 3" />
                                <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" />
                                <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/>
                                <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                                    <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Frame>
        </Editor>
    );
}
