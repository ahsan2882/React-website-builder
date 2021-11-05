import React, { useRef } from 'react'
import About2Css from './About2banner.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { Navbar2 } from '../Navbar2';
export default function About2bannercomponent({ displayDevice }) {
    const editorRef = useRef(null);
    return (
        <>
            <Navbar2 displayDevice={displayDevice} />
            <section className={About2Css['header-img-serv']}>
                <div className={About2Css['head-img-text']}>
                    <h1 className={displayDevice ? About2Css['head1'] : About2Css['headM']}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='About1'
                            initialValue="About Us"
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
                    <div className={About2Css.dash}></div>
                </div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About2'
                    initialValue={`<img src="https://i.ibb.co/Fmz3cdv/about-us-banner.jpg" alt="about-banner" />`}
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
            </section>
        </>

    )
}

