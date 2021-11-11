import React, { useRef, useState } from 'react'
import About1Css from './About1.module.css'
// import buss from '../assets/template1images/img-commited-to-business.png'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';

export const About1 = ({ showPopup, overSection, displayDevice }) => {
  const editorRef = useRef(null);
  const [currentBackground, setCurrentBackground] = useState("white");

  return (
    <>
      <div style={{ background: currentBackground }}>
        <div className={`${About1Css['text-main-text']}`}>
          <h1 style={{ color: `black` }} className={`${About1Css.headings}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='abouT1'
              initialValue="About Our Company"
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
          <div className={`${About1Css.subhead}`}>


            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About2'
              initialValue="<p>Security was founded by a squad of retired soldiers and friends who wanted to make this world a safer place.</p>"
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
        </div>

        <div style={{ background: currentBackground }} className={`${About1Css.container9}`}>
          <div style={{ background: currentBackground }} className={displayDevice ? ` mt-36 ${About1Css.row}` : ` mt-36 ${About1Css.rowM}`}>
            <div style={{ background: currentBackground }} className="container9-content">

              <span className={`${About1Css['headline_content2']}`}><span><b>Commited To</b> Your Business</span></span>
              {/* <p className={`${About1Css['testimonial-text']}`}> */}
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About3'
                initialValue={`<p class="${About1Css['testimonial-text']}">Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.</p>`}
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

              {/* </p> */}
              <div className={`${About1Css.author2}`}>
                <button className={`${About1Css.btna}`}>

                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About4'
                    initialValue="View our Portfolio"
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
                </button>
              </div>
            </div>

            <div className={`${About1Css['container11-image']}`}>
              {/* <img src="https://i.ibb.co/GJ3Bh1Q/img-commited-to-business.png" alt="img-commited-to-business" border="0"> */}
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About5'
                initialValue={`<img src="https://i.ibb.co/GJ3Bh1Q/img-commited-to-business.png" alt="img-commited-to-business" class="w-18/>`}
                init={
                  {
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

    </>
  )
}