import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import About3vissionCss from '../template3about/About3vission.module.css'
import Img1 from '../../assets/template3images/annie-spratt-QckxruozjRg-unsplash.jpg'
import { Editor } from '@tinymce/tinymce-react';
export default function Aboutvission({ showPopup, overSection }) {
    const editorRef = useRef(null);
    const [currentBackground, setCurrentBackground] = useState("white");
    return (
        <>
            <section>
                <div class={About3vissionCss['container-main']} style={{ background: currentBackground }}>
                    <div class={About3vissionCss['vision-wrap']}>
                        <div class={About3vissionCss['content-vision']}>
                            <section class={About3vissionCss['heading-sec']}>

                                <div class={About3vissionCss['heading2-main-title']}>
                                    <div class={About3vissionCss['sub-title2']}>
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
                                        initialValue="<h1>VISION</h1>"
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
                            <div class={About3vissionCss['pragraph-vision']}>
                                <Editor

                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Service3'
                                    initialValue="<p> We are a residential and commercial security provider and introducing all types of the most easiest security systems for give smart security.</p>
                                    <p>Latest technology with security solutions to provide you the high level of protection security in your home and business also.</p>"
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
                        <div class={About3vissionCss['vision-img']}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service4'
                                initialValue={` <img src=${Img1} alt="news1"/> `}
                                init={
                                    {
                                        forced_root_block: "",
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
                    </div>
                </div>
            </section>
        </>
    )
}
