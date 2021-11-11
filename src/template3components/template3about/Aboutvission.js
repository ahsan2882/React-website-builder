import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import About3vissionCss from '../template3about/About3vission.module.css'
// import Img1 from '../../assets/template3images/annie-spratt-QckxruozjRg-unsplash.jpg'
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
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect | lineheight',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                            }}
                                        />

                                    </div>
                                    <Editor

                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='Service2'
                                        initialValue="<h1>VISION</h1>"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

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
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                    }}
                                />

                            </div>


                        </div>
                        <div class={About3vissionCss['vision-img']}>
                            {/* <img src="https://i.ibb.co/3YWyJcw/annie-spratt-Qckxruozj-Rg-unsplash.jpg" alt="annie-spratt-Qckxruozj-Rg-unsplash" border="0"> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service4'
                                initialValue={` <img src="https://i.ibb.co/3YWyJcw/annie-spratt-Qckxruozj-Rg-unsplash.jpg" alt="annie-spratt-Qckxruozj-Rg-unsplash" /> `}
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
