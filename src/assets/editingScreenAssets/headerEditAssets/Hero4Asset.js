import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import Hero4Css from './Hero4Asset.module.css'

export default function Hero4Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="relative" style={{width: "100%", height: "90vh"}}>
                {/* <img src="https://i.ibb.co/r60q0YL/services11.jpg" alt="services11" border="0"> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Service4Im1'
                    initialValue={`<img src="https://i.ibb.co/r60q0YL/services11.jpg" alt="services11" class="object-cover ${Hero4Css.bgImg}"/>`}
                    init={{
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        forced_root_block: "",
                        menubar: false,
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <div className="absolute top-1/2 left-20 text-white">
                    <h1 className="text-6xl font-bold mb-12">
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Security Solutions"
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
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p class="text-xl w-1/2">Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p>`}
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
                    <button className="mt-16 text-xl font-semibold px-5 py-3 bg-BL-600 rounded-xl">Contact Us</button>
                </div>
            </section>
        </>
    )
}
