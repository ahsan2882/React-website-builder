import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color'; 
import Aboutservices3Css from '../template3about/Aboutservices3.module.css'
import { Editor } from '@tinymce/tinymce-react';

export default function AboutService3() {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
        <section className={Aboutservices3Css['about_our-services']} style={{ background: currentBackground }}>
            <div className={Aboutservices3Css['container-main']}>
                <section className={Aboutservices3Css['heading-sec']}>

                    <div className={Aboutservices3Css['heading-main-title']}>
                        <div className={Aboutservices3Css['sub-title']}>
                            <Editor

                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service1'
                                initialValue="<h3>Best In Town</h3>"
                                init={{
                                    plugins: [
                                        "link"
                                    ],
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                }}
                            />

                        </div>
                        <Editor

                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service2'
                            initialValue="<h1>SERVICES</h1>"
                            init={{
                                plugins: [
                                    "link"
                                ],
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                            }}
                        />

                    </div>
                </section>


                <div className={Aboutservices3Css['service-card-wrap']}>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }}
                            style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']}>
                            <Editor

                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service2'
                                initialValue="<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, deleniti?lorem200</p>"
                                init={{
                                    plugins: [
                                        "link"
                                    ],
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                }}
                            />


                        </div>
                    </div>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/usjxhgom.json" trigger="loop" colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }}
                            style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']}>

                        </div>
                    </div>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/gqzfzudq.json" trigger="loop" colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }}
                            style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']}>

                        </div>
                    </div>
                </div>
                <div className={Aboutservices3Css['service-card-wrap']}>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/tvafngxn.json" trigger="loop"
                            colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }} style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']}>
                            <Editor

                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service3'
                                initialValue="<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, deleniti?lorem200</p>"
                                init={{
                                    plugins: [
                                        "link"
                                    ],
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                }}
                            />
                            

                        </div>
                    </div>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/uneninia.json" trigger="loop"
                            colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }} style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']}>

                        </div>
                    </div>
                    <div className={Aboutservices3Css['box']}>

                        <lord-icon src="https://cdn.lordicon.com/nxaaasqe.json" trigger="loop"
                            colors={{ "primary": "#c01120", "secondary": "var(--clr-secondary)" }} style={{ "width": "150px", "height": "150px" }}>
                        </lord-icon>
                        <div className={Aboutservices3Css['box_content-hover']} >

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
