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
                    <p>  Collaboration</p>
                    <h1> Our Partners</h1>
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