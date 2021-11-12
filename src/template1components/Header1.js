import React, { useRef, useState } from 'react'
import Header1Css from './Header1.module.css'
// import bgcover from '../assets/template1images/bghero.png'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
import Navbar1 from './Navbar1';
export const Header1 = ({ showPopup, overSection, displayDevice, linksfunc }) => {
  const [currentBackground, setCurrentBackground] = useState("white");

  const editorRef = useRef(null);

  return (
    <>
      <Navbar1 displayDevice={displayDevice} linksfunc={ linksfunc}/>


      <section style={{ background: currentBackground }} className={displayDevice ? `${Header1Css.section}` : `${Header1Css.sectionM}`}>
        <div className={`${Header1Css['section-details']}`}>
          <div className={displayDevice ? Header1Css.left : Header1Css.leftM}>
            {/* <span className={`${Header1Css['headline_content']}`}><span>
              
              <b>Security</b> is not a product, it is a process.</span ></span> */}
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Header1'
              initialValue={displayDevice ? `<span class="${Header1Css.headlineContent}"> Security </span><span class="${Header1Css.headlineContent1}">is not a product, it is a process.</span>` : `<span class="${Header1Css.headlineContentM}"> Security </span><span class="${Header1Css.headlineContent1M}">is not a product, it is a process.</span>`}
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


            <div className={displayDevice ? `${Header1Css['headline-para']}` : `${Header1Css['headline-para']} w-full`}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="<p>To prevent tampering and unauthorized entry into  the premises by
            our engineers developed a burglar alarm system in the house.</p>"
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

            <button className={`${Header1Css.btna}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Header2'
                initialValue="DISCOVER MORE"
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
          <div className={displayDevice ? `${Header1Css.right}` : `${Header1Css.rightM}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About5'
              initialValue={` <img src="https://i.ibb.co/yNDDf8B/bghero.png" alt="bghero" class="${Header1Css.dil}" />`}
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

          </div>
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
  );
}