import React, { useRef } from 'react'
import Contact2Css from './Contact2.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { Navbar2 } from '../Navbar2';
export default function Contact2({ displayDevice, linksfunc, nav2Service, setNav2Services, nav2Sector, setNav2Sector }) {
    const editorRef = useRef(null);
    return (
        <>
            <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc} nav2Service={nav2Service} setNav2Services={setNav2Services}
                nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} />
            <section className={Contact2Css['header-img-serv']}>

                <div className={displayDevice ? Contact2Css['head-img-text'] : Contact2Css['head-img-textM']}>
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Contact1'
                            initialValue="Contact Us"
                            init={{
                                plugins: [
                                    "link"
                                ],
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                            }}
                        />
                    </h1>
                    <div className={Contact2Css.dash}></div>
                </div>

                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Contact2'
                    initialValue={`<img src="https://i.ibb.co/n0LTNT3/contact-banner.jpg" alt="contact-banner" />`}
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
