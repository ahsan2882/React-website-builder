import React, { useRef } from 'react'
import Feedback3Css from './Contact3feedback.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Contact3feedback() {
    const editorRef = useRef(null);
     return (
        <section className={Feedback3Css['feedback']}>
            <div className={Feedback3Css['container-main']}>
                <div className={Feedback3Css['feedback-wrap']}>
                    <div className={Feedback3Css['feed-img']}>
                        <img src="https://i.ibb.co/tJdb2JZ/news1.png" alt="news1" />
                    </div>
                    <div className={Feedback3Css['feed-content']}>
                        <section className={Feedback3Css['heading-sec']}>

                            <div className={Feedback3Css['heading2-main-title']}>
                                <div className={Feedback3Css['sub-title2']}>
                                    <h3>
                                        
                                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted3'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Best In Town"
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
                                        </h3>
                                </div>
                                <h1>
                                <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted3'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="CONTACT"
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
                                    </h1>
                            </div>
                        </section>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted3'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita obcaecati debitis earum dolore alias veniam, vitae sint, 
                         ad nesciunt dicta molestias labore accusantium! Ab nam illo dolores 
                         quos hic impedit saepe praesentium! Harum quasi cum odio quidem esse rem eligendi 
                         nemo hic neque sed voluptatibus mollitia veniam iure, est amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Expedita obcaecati debitis earum dolore alias veniam, vitae sint,
                            ad nesciunt dicta molestias labore accusantium! Ab nam illo dolores
                            quos hic impedit saepe praesentium! Harum quasi cum odio quidem esse rem eligendi
                            nemo hic neque sed voluptatibus mollitia veniam iure, est amet.</p>"
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

                        <div className={Feedback3Css.buttons}>
                            <button className={Feedback3Css['button-sqr']}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted3'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="Feed Back"
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
