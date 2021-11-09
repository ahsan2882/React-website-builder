import React, { useRef } from 'react'
import RetailheromoduleCss from './Retailhero.module.css'
import { Editor } from '@tinymce/tinymce-react';
// import img from './retail-banner.jpg'
import { Navbar2 } from '../../Navbar2';

export const Retailhero = ({ displayDevice, linksfunc }) => {
    const editorRef = useRef(null);

    return (
        <>
            <section className={RetailheromoduleCss['header-img-serv']}>
                <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc} />
                <div className={`${RetailheromoduleCss['head-img-text']}`}>
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='About1'
                            initialValue="Retail"
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
                    <div className={RetailheromoduleCss.dash}></div>
                </div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About2'
                    initialValue={`<img src="https://i.ibb.co/3Nq1M6B/retail-banner.jpg" alt="retail-banner" />`}
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
