import React, { useRef, useState } from 'react'
import Partner4Css from './Partners4.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
// import cli1 from './client1.png'
// import cli2 from './client3.png'
// import cli3 from './client3.png'




export default function Partners4({ showPopup, overSection }) {
    const [currentBackground, setCurrentBackground] = useState("black");
    const [currentBackground1, setCurrentBackground1] = useState("#00C1CF");
    const [showPopup1, setShowPopup1] = useState(false);
    const editorRef = useRef(null);
    return (

        <>

            <section className={`${Partner4Css.accwrap}`}>
                <div style={{ background: currentBackground, maxWidth: "74rem;" }} className={`${Partner4Css['text-2']}`}>
                    {/* <img src="https://i.ibb.co/8crhHN4/client5.png" alt="client5" border="0"> */}
                    {/* <p>  Collaboration</p> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='abouted4'
                        tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                        initialValue={` <p>Collaboration</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                            content_style:
                                "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                        }}
                    />
                    {/* <h1> Our Partners</h1> */}
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted4'
                            tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                            initialValue="Our Partners"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                content_style:
                                    "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                            }}
                        />
                    </h1>
                    <div style={{ background: currentBackground1 }} className={`${Partner4Css.row3} relative`} onClick={() => setShowPopup1((state) => !state)} onMouseLeave={() => setShowPopup1(false)}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted1'
                            initialValue={`<img src="https://i.ibb.co/8crhHN4/client5.png" alt="client5" class="${Partner4Css.aboutImg} w-60 h-32 object-cover"/>`}
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
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted1'
                            initialValue={`<img src="https://i.ibb.co/6FrcdjF/client3.png" alt="client3" class="${Partner4Css.aboutImg} w-60 h-32 object-cover"/>`}
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
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted1'
                            initialValue={`<img src="https://i.ibb.co/71cQhtd/client2.png" alt="client2" class="${Partner4Css.aboutImg} w-60 h-32 object-cover"/>`}
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
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='abouted1'
                            initialValue={`<img src="https://i.ibb.co/pjQK9VG/client4.png" alt="client4" class="${Partner4Css.aboutImg} w-60 h-32 object-cover"/>`}
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
                        <div style={(showPopup1) ? { position: "absolute", top: "2rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                            <GithubPicker
                                triangle="top-right"
                                onChangeComplete={(color) => {
                                    setCurrentBackground1(color.hex);
                                }}
                            />
                        </div>
                    </div>
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
        </>

    );
}