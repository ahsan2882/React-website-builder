import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import guard1 from '../assets/template4images/guard1.jpg';
import guard2 from '../assets/template4images/guard2.jpg';
import guard3 from '../assets/template4images/guard3.jpg';
import guard4 from '../assets/template4images/guard4.jpg';
import Guards4Css from './OurGuards4.module.css';

export default function OurGuards4() {
    const editorRef = useRef(null);
    return (
        <section className="bg-white w-full">
            <div className={`${Guards4Css.container1} ${Guards4Css.teamSection}`}>
                {/* <TextH1 className={`text-5xl m-0 ${Guards4Css.teamH1}`} text="Our Guards" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='guard4ed1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<h1>Our Guards</h1>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | formatselect',
                    }}
                />
                {/* <TextPara className="text-xl text-center mb-12 text-black"
                    text="Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
                            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
                            ligula."/> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='guard4ed2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<p>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien
                            euismod. In id tempus metus. Donec eu volutpat nibh, in maximus
                            ligula.</p>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | formatselect',
                    }}
                />
                <div className={`${Guards4Css.container1} ${Guards4Css.guardsList}`}>
                    <div className={Guards4Css.guards}>
                        <img src={guard1} className={Guards4Css.guardImage} alt="guard 1" />
                        {/* <TextH2 className={`m-0 mt-8 ${Guards4Css.guardName}`} text="John Richards" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>John Richards</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed4'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h4>Lorem ipsum</h4>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard2} className={Guards4Css.guardImage} alt="guard 2" />
                        {/* <TextH2 classStyle={`m-0 mt-8 ${Guards4Css.guardName}`} text="John Richards" /> */}
                        {/* <TextH4 className="m-0 mt-8 text-black" text="Lorem ipsum" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed5'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>John Richards</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed6'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h4>Lorem ipsum</h4>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard3} className={Guards4Css.guardImage} alt="guard 3" />
                        {/* <TextH2 classStyle={`m-0 mt-8 ${Guards4Css.guardName}`} text="John Richards" /> */}
                        {/* <TextH4 className="m-0 mt-8 text-black" text="Lorem ipsum" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed7'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>John Richards</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed8'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h4>Lorem ipsum</h4>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className={Guards4Css.guards}>
                        <img src={guard4} className={Guards4Css.guardImage} alt="guard 4" />
                        {/* <TextH2 classStyle={`m-0 mt-8 ${Guards4Css.guardName}`} text="John Richards" /> */}
                        {/* <TextH4 className="m-0 mt-8 text-black" text="Lorem ipsum" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed9'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h2>John Richards</h2>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='guard4ed10'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h4>Lorem ipsum</h4>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        <div className={Guards4Css.guardSocial}>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <Link to="#" className="flex no-underline py-3 px-6 text-black border-rad1-5r justify-center items-center">
                    <div>View all&emsp;</div>
                    <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </section>
    );
}
