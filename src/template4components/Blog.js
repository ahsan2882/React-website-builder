import React from 'react';
import news1 from '../assets/template4images/news1.jpg';
import news2 from '../assets/template4images/news2.jpg';
import news3 from '../assets/template4images/news3.jpg';
import Blog4Css from './Blog.module.css';

export default function Blog() {
    return (
        <section className="bg-black py-28 px-0">
            <div className="text-center">
                <h3 className={Blog4Css.blogMainHead}>WHATS NEW</h3>
                <h1 className="text-white font-black mb-12 text-5xl">Latest News</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap justify-around w-4/5">
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news1} alt="news 1"/>
                        <h1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`}>Personal Security Services</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            <button className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`}>Read More</button>
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news2} alt="news 2"/>
                        <h1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`}>Personal Security Services</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            <button className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`}>Read More</button>
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news3} alt="news 3"/>
                        <h1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`}>Security For Bussiness</h1>
                        <p className="text-white text-center">
                            vamus tristique ligula quis orci malesuada tincidunt. Praesent
                            magna purus, pharetra eu eleifend non, euismod vitae leo.
                            Interdum et malesuada fames ac ante ipsum ...
                        </p>
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            <button className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
