import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
import PartnermoduleCss from './Partner.module.css'
export default function Partner({ showPopup, overSection }) {
    const editorRef = useRef(null);
    const [currentBackground, setCurrentBackground] = useState("white");

    return <>
        <section style={{ background: currentBackground }} className={`${PartnermoduleCss.content}`}>
            <div className={`${PartnermoduleCss.textedit}`}>
                <h1 className={`${PartnermoduleCss.headings}`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Guard1'
                        initialValue=" Our Partners"
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
                <h2 div className={`${PartnermoduleCss.subhead}`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Guard2'
                        initialValue="<p>Team That you can Rely on</p>"
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
                </h2>
            </div>

            <div style={{ background: currentBackground }} className={`${PartnermoduleCss['row-1']}`}>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About5'
                    initialValue={`<img src="https://i.ibb.co/VY1YxB8/client01.png" alt="client01"  class="w-60 h-34 object-cover" />`}
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

                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About5'
                    initialValue={`<img  src="https://i.ibb.co/qk1FGDV/client02.png" alt="client02" class="w-60 h-34 object-cover" />`}
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
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About5'
                    initialValue={`<img  src="https://i.ibb.co/bBQPSv3/client03.png" alt="client03" class="w-60 h-34 object-cover" />`}
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
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About5'
                    initialValue={`<img src="https://i.ibb.co/6PWYVmV/client04.png" alt="client04" class="w-60 h-34 object-cover" />`}
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


            </div>



        </section>
        <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
            <GithubPicker
                triangle="top-right"
                onChangeComplete={(color) => {
                    setCurrentBackground(color.hex);
                }}
            />
        </div>

    </>

}
