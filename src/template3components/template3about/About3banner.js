import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import About3Css from '../template3about/About3.module.css'
import Img1 from '../template3contactcomponents/gPeonv.png'
import { Editor } from '@tinymce/tinymce-react';
export default function About3banner() {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
        <section className={About3Css['header-img-serv']}>
            <div className={About3Css['head-img-text']}>
                <h1 className={About3Css['head1']}>
                    <Editor

                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Service1'
                        initialValue="About"
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
                <div className={About3Css.dash}></div>
            </div>
            <img src={Img1} alt="contact-components" />
        </section>
    )
}
