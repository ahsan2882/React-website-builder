import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import background from '../assets/template4images/blog_15-770x545.png'
import Hero4Css from './HeroSection4.module.css'

export default function HeroSection4({displayDevice}) {
    const editorRef = useRef(null);
    return (
        <>
            <section className={displayDevice ? `w-full ${Hero4Css.sectionHero}` : `w-full ${Hero4Css.sectionHero} bg-top min-h-screen items-center`} style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                url(${background})`
            }}>
                <div className="w-full">
                    {/* <TextH1 classStyle={Hero4Css.secHeroH1} text="Security Services"></TextH1> */}
                    <h1 className={displayDevice ? `text-7xl font-semibold` : `text-4xl font-semibold leading-none`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='heroed1'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Security Services"
                        init={{
                            forced_root_block:"",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                        }}
                    />
                    </h1>
                    {/* <TextPara text="For your personal safety" classStyle={Hero4Css.paragraphHero} /> */}
                    {/* <p style={{ lineHeight:`28px`,marginBottom:`2em`}}> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='heroed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={displayDevice ? `<p>For your personal safety</p>` : `<p class="text-xl leading-none">For your personal safety</p>`}
                        init={{
                            forced_root_block:"",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                    {/* </p> */}
                    <div className={Hero4Css.secHeroBtn}>
                        {/* <ButtonText classStyle={Hero4Css.secBtn} text="Contact Us"></ButtonText> */}
                        <button className={Hero4Css.allbtn}> 
                       
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='heroed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Contact Us"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
