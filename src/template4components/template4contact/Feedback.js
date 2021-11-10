import React, { useRef, useState } from 'react'
import FeedbackmoduleCss from './Feedback.module.css'
// import img from './news3.jpg'
import { GithubPicker } from 'react-color';

import { Editor } from '@tinymce/tinymce-react';

export default function Feedback({ showPopup, overSection }) {
    const [currentBackground, setCurrentBackground] = useState("black");

    const editorRef = useRef(null);

    return (

        <>
            <section style={{ background: currentBackground }} className={`${FeedbackmoduleCss['feeback-wrap']}`}>
                <section style={{ background: currentBackground }} className={`${FeedbackmoduleCss.feedback} ${FeedbackmoduleCss.container}`}>

                    {/* <img src={img} className="feedbackimg" alt="this is"/> */}
                    {/* <img src="https://i.ibb.co/6Y2JjXp/news3.jpg" alt="news3" border="0"> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='abouted1'
                        initialValue={`<img  src="https://i.ibb.co/6Y2JjXp/news3.jpg" alt="news3" class="${FeedbackmoduleCss.feedbackimg} filter drop-shadow-AHS w-96 h-80 object-cover"/>`}
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
                    <div className={`${FeedbackmoduleCss['feedback-wrapper']}`}>
                        <h1>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted4'
                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                initialValue="Your Feedback"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />
                        </h1>


                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue={`   CIS strives to achieve excellence in customer services to all
                            stakeholders: clients, consumers, visitors, contractors, internal
                            and external customers and the general public. Any feedback will
                            be acknowledged within 10 days of receipt. Anyone wishing to make
                            a commendation, suggestion or complaint is kindly asked to do so
                            by downloading and completing the Feedback Form, and return to our
                            offices via the above email address, fax number or post/hand
                            deliver to our offices at CIS Security Ltd, 418-426 Lewisham High`}
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                            }}
                        />

                        <button className="text-white font-normal border flex justify-center w-40 items-center border-solid py-2 px-8 hover:text-black hover:bg-white">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted4'
                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                initialValue="Download Form"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />

                            <i style={{ marginLeft: `.3rem` }} className="fas fa-arrow-right"></i>

                        </button>


                    </div>

                </section>
                <div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                    <GithubPicker
                        triangle="top-right"
                        onChangeComplete={(color) => {
                            setCurrentBackground(color.hex);
                        }}
                    />
                </div>
            </section>


        </>
    )
}
