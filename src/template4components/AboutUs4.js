import React, { useRef ,useState } from 'react'
import aboutimg from '../assets/template4images/news3.png'
import About4Css from './AboutUs4.module.css'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';

export default function AboutUs4({ showPopup, overSection, displayDevice }) {
    const [currentBackground, setCurrentBackground] = useState("black");
    const editorRef = useRef(null);
    return (
        <>
            <div className={displayDevice ? `${About4Css.container02} py-32 px-12 flex items-center justify-evenly` : `${About4Css.container02} py-32 px-12 flex items-center justify-evenly flex-col`} style={{ background: currentBackground }}>
                <div className={displayDevice ? `${About4Css.box1} flex flex-col max-w-lg` : `${About4Css.box1} flex flex-col max-w-lg w-4/5 text-center`}>
                    {/* <img className={`${About4Css.aboutImg} w-11/12`} src={aboutimg} alt="about" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='abouted1'
                        initialValue={`<img  src=${aboutimg} alt="about" className="${About4Css.aboutImg} w-96 h-64 object-cover"/>`}
                        init={{
                            forced_root_block:"",
                            menubar: false,
                            images_upload_handler: function (blobInfo, success, failure) {
                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                            },
                            images_upload_url: '/upload-images',
                            plugins: [
                                "image"
                            ],
                            toolbar: 'image'
                        }}
                    />
                </div>
                <div className={displayDevice ? `${About4Css.box1} flex flex-col max-w-lg` : `${About4Css.box1} flex flex-col max-w-lg w-4/5 text-center`}>
                    <section>
                        <article>
                            <div className={About4Css.editableAbout}>
                                <h6 className="About4Css">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted1'
                                    initialValue="About Us"
                                    init={{
                                        forced_root_block:"",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />
                                </h6>
                                {/* <h3 className="text-white text-3xl w-full mb-6">CCTV For your Safety</h3> */}
                                <h3 className="About4Css">
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted2'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="CCTV For your Safety"
                                    init={{
                                        forced_root_block:"",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                    }}
                                />
                                </h3>
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
                                        forced_root_block:"",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                    }}
                                />
                            </div>
                            <div className="py-5">
                                <button className={`${About4Css.btnReadMore} text-white font-normal border flex justify-center w-40 items-center border-solid py-2 px-8 hover:text-black hover:bg-white`}>
                          
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='abouted4'
                                        tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                        initialValue=" Read More"
                                        init={{
                                            forced_root_block:"",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                        }}
                                    />
                                          <i style={{marginLeft:`4px`}} className="fas fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
            <div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
        </>
    );
}
