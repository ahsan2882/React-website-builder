import React, { useRef, useState } from 'react'
import ExpermoduleCss from './Experince1.module.css'
// import Service from './services11.jpg'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
export default function Experince1({ showPopup, overSection }) {
    const editorRef = useRef(null);
    const [currentBackground, setCurrentBackground] = useState("transperent");
    return (
<>

<section style={{ background: currentBackground }}  className={`${ExpermoduleCss['services-sec']}`}>
        <div style={{display:`flex`,justifyContent:`space-around`}} className={`${ExpermoduleCss['grid-contact']}`}>
            <div className={`${ExpermoduleCss['services-text']}`}>
                <div className="back">
                <h1 className={`${ExpermoduleCss['main-heading']}`}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Pricing3'
                  initialValue="      OUR EXPERIENCE"
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
                /> </h1>
                </div>
           
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Pricing3'
                  initialValue={`<p className="${ExpermoduleCss.para}">
                  Our security agency is committed to helping every client who is at risk. We owe our lives to save the one of a client. We know everything about security. Our staff has valuable experience, doing this job for almost twenty years.
                  <br/>
                  Each security agent goes through a set of instructions and challenges to join our professional team. We promise that we won't let you down no matter how tough a situation may be.
                </p>`}
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




        
            </div>
            <div   className={`${ExpermoduleCss['service-img']}`}>
              {/* src="https://i.ibb.co/8zsQjgJ/services11.jpg" alt="services11" */}
              <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='News3'
                  initialValue={`  <img src="https://i.ibb.co/8zsQjgJ/services11.jpg" alt="services11"  class="w-72 h-60 object-cover" />`}
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
        
        </div>
        <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
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
