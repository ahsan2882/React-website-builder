import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import AboutPolicy3Css from '../template3about/AboutPolicy3.module.css'
import Img1 from '../../assets/template3images/kala.jpg'
import { Editor } from '@tinymce/tinymce-react';
export default function AboutPolicy3() {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
        <section class={AboutPolicy3Css['our-policy']} style={{ background: currentBackground }}>
            <div class={AboutPolicy3Css['container-main']}>

                <section class={AboutPolicy3Css['heading-sec']}>

                    <div class={AboutPolicy3Css['heading2-main-title']}>
                        <div class={AboutPolicy3Css['sub-title2']}>
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
                            initialValue="<h1>OUR POLICY</h1>"
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

                <div class={AboutPolicy3Css['policy-wrap']}>
                    <div class={AboutPolicy3Css['policy_top']}>
                        <div class={AboutPolicy3Css['policy-content']}>
                            <Editor

                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service3'
                                initialValue="<h1>Our Security Planing</h1>"
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
                            <Editor

                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service3'
                                initialValue=" <p> We always provide tested & proven Security security system to our customers. Our best offer give for home security, business security, information security and also give great support. Advertising best quality of access complete visibility along with your device.
                                We provide a full range of security solutions, day and night sight to improve security and upgrade capabilities.</p>"
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
                        <div class={AboutPolicy3Css['policyimg']}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service4'
                                initialValue={` <img src=${Img1} alt="image" />`}
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
            </div>
        </section>
    )
}
