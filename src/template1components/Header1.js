import React, { useRef, useState } from 'react'
import Header1Css from './Header1.module.css'
import bgcover from '../assets/template1images/bghero.png'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
import Navbar1 from './Navbar1';
export const Header1 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");

  const editorRef = useRef(null);

  return (
    <>
<Navbar1/>


      <section style={{ background: currentBackground }} className={`${Header1Css.section}`}>
        <div className={`${Header1Css['section-details']}`}>
          <div className={`${Header1Css.left}`}>
            {/* <span className={`${Header1Css['headline_content']}`}><span>
              
              <b>Security</b> is not a product, it is a process.</span ></span> */}
              <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue={`<span class="${Header1Css.headlineContent}"> Security </span><span class="${Header1Css.headlineContent1}">is not a product, it is a process.</span>`}
                  init={{
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />


            <div style={{width:`30rem`}} className={`${Header1Css['headline-para']}`}>
              <p>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="To prevent tampering and unauthorized entry into  the premises by
            our engineers developed a burglar alarm system in the house."
                  init={{
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />
              </p>
            </div>

            <button className={`${Header1Css.btna}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Header2'
                initialValue="DISCOVER MORE"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </button>
          </div>
          <div className={`${Header1Css.right}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About5'
              initialValue={` <img src=${bgcover} alt="Temp1Img5" class="${Header1Css.dil}" />`}
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