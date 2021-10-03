
import React, { useRef } from 'react';
import news1 from '../assets/template4images/news1.jpg';
import news2 from '../assets/template4images/news2.jpg';
import news3 from '../assets/template4images/news3.jpg';
import { Editor } from '@tinymce/tinymce-react';
import Blog4Css from './Blog4.module.css';

export default function Blog4() {
    const editorRef = useRef(null);
    return (
        <section className="bg-black py-28 px-0 w-full">
            <div className={`text-center ${Blog4Css.headingWrapper}`}>
                {/* <TextH3 classStyle={Blog4Css.blogMainHead} text="WHATS NEW" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='blog4ed1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<h3>WHATS NEW</h3>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | formatselect',
                    }}
                />
                {/* <TextH1 className="text-white font-black mb-12 text-5xl" text="Latest News" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='blog4ed2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<h1>Latest News</h1>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | formatselect',
                    }}
                />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap justify-around w-4/5">
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news1} alt="news 1" />
                        {/* <TextH1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        {/* <TextPara className="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed4'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed5'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news2} alt="news 2" />
                        {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed6'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed7'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed8'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news3} alt="news 3" />
                        {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed9'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed10'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed11'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
