import React, { useRef } from 'react'
import aboutimg from '../assets/template4images/news3.jpg'
import About4Css from './AboutUs4.module.css'
import { Editor } from '@tinymce/tinymce-react';

export default function AboutUs4() {
    const editorRef = useRef(null);
    return (
        <div className={`${About4Css.container02} py-28 px-12 flex items-center justify-center bg-black w-full`}>
            <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                <img className={`${About4Css.aboutImg} w-11/12`} src={aboutimg} alt="about" />
            </div>
            <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                <section>
                    <article>
                        <div className={About4Css.editableAbout}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted1'
                                initialValue="<h1>About Us</h1>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                }}
                            />
                            {/* <h3 className="text-white text-3xl w-full mb-6">CCTV For your Safety</h3> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted2'
                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                initialValue="<h3>CCTV For your Safety</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                }}
                            />
                            {/* <p className="text-white text-xl py-3 px-0">Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                                dolor sit amet leo malesuada scelerisque. Sed sed tortor
                                lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                                accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                                bibendum nibh facilisis ac.</p> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted3'
                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                initialValue="<p>Nunc pretium nibh non aliquam scelerisque. Integer porttitor dolor sit amet leo malesuada scelerisque. Sed sed tortor lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper accumsan sem sit amet aliquam. Cras euismod mauris felis, eget bibendum nibh facilisis ac.</p>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | formatselect',
                                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                }}
                            />
                        </div>
                        <div className="py-5">
                            <button className={`${About4Css.btnReadMore} text-white border flex justify-center w-40 items-center border-solid py-2 px-8 hover:text-black hover:bg-white`}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted4'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="<p>Read More</p>"
                                    init={{
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | formatselect',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                                    }}
                                />
                            </button>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    );
}
