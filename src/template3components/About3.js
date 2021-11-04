import React, { useRef, useState } from 'react'
import About3Css from './About3.module.css'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';
import news3 from '../assets/template3images/news3.png'
export default function About3({ showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("white");
  const [currentBackground1, setCurrentBackground1] = useState("#c01120");

  

  const editorRef = useRef(null);
  return (
    <>
      <section style={{ background: currentBackground }} className={About3Css['heading-sec']}>

        <div className={About3Css['heading-main-title']}>
          <div className={About3Css['sub-title']}>
            <h3>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='about1'
                initialValue="We are Best"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </h3>
          </div>
          <h1>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='about2'
              initialValue="About Us"
              init={{
                forced_root_block: "",
                menubar: false,
                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
              }}
            />
          </h1>
        </div>
      </section>
     
      <div style={{ background: currentBackground }} className={About3Css['about-sec']}>
        <div className={About3Css['about-container']}>
          <div className={About3Css['about-wrap']}>
            <div style={{background: currentBackground1}} className={About3Css['ab-img']}>
            <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='About3'
            initialValue={`<img src=${news3} alt="news3" class="w-full" />`}
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
            <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground1(color.hex);
                    }}
                />
            </div>
            <div className={About3Css['about-content']}>
              <h1>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='about4'
                  initialValue=" Commited to your business"
                  init={{
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />
              </h1>
          
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='about5'
                initialValue="<p>Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and
                guidelines, ending up with an effective, functioning team is downright amazing.</p>"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              /> 
         
              <button className={About3Css['button-sq-red']}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='about6'
                initialValue="Read More"
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
