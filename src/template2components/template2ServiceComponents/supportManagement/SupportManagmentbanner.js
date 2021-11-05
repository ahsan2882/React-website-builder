import React, { useRef } from 'react'
import SupportManagmentbannerCss from './Supportmanagmentbanner.module.css'
// import Img1 from '../../../assets/template2images/supportandmanagement-banner.jpg'
import { Editor } from '@tinymce/tinymce-react';
import { Navbar2 } from '../../Navbar2';

export default function SupportManagmentbanner({ displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    return (
        <section className={SupportManagmentbannerCss['header-img-serv']}>
            <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc} />
            <div class={SupportManagmentbannerCss['head-img-text']}>
                <h1 className={SupportManagmentbannerCss.head1}><b>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Guard1'
                        initialValue=" Support & Managment"
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
                </b></h1>
                <div className={SupportManagmentbannerCss.dash}></div>
            </div>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='EventSecurity4'
                initialValue={`<img src="https://i.ibb.co/frDN0dy/supportandmanagement-banner.jpg" alt="supportandmanagement-banner" class="w-full h-full object-cover"/>`}
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


        </section>
    )
}
