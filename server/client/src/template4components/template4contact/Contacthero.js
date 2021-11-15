import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import ContactheroCss from './Contacthero.module.css'
export default function Contacthero() {
    const editorRef = useRef(null);
    return (
<>

<section className={`relative ${ContactheroCss.hero}`}>
<Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted1'
                            initialValue={`<img src="https://i.ibb.co/QH3ksQx/gPeonv.png" alt="gPeonv" class="w-full h-96 object-cover"/>`}
                            init={{
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
                     <div className={`absolute top-1/2 left-36 text-white ${ContactheroCss.head}`}>
                        <h1 className="text-6xl tracking-tight">
                    <Editor

                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Service1'
                        initialValue="Contact Us"
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
                <h2 className="text-2xl tracking-tight mt-2">
                    <Editor

                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Service1'
                        initialValue="Home&nbsp;&nbsp;&nbsp;>>&nbsp;&nbsp;&nbsp;Contact Us"
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

                </h2>
                        </div>


</section>




</>
    )
}
