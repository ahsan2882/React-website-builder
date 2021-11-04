import React, { useRef, useState } from 'react'
import About2moduleCss from './About2.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';

export const About2 = ({ displayDevice, showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef();

  return (
    <>
      <section style={{ background: currentBackground }}>
        <section style={{ background: currentBackground }}>
          <section className={`${About2moduleCss['head-main']}`} style={{ background: currentBackground }}>

            <h1 className={`${About2moduleCss.MainHeading}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About(2)2'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<span class="${About2moduleCss.SpanColor}">About </span> Us`}
                init={{
                  plugins: [
                    "link"
                  ],
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
              {/* <span class={`${About2moduleCss.SpanColor}`}>About </span> Us */}
            </h1>
            <div className={`${About2moduleCss.spanDesc}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About(2)1'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<p>  Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>`}
                init={{
                  plugins: [
                    "link"
                  ],
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </div>
            <div className={`${About2moduleCss.divMainHeading}`}>
              <div className={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div>
              <img className={`${About2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="dot" />
              <div className={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
            </div>
          </section>
          <section className={displayDevice ? `${About2moduleCss['about-sec']}` : `${About2moduleCss['aboutSecM']}`} data-aos="fade" style={{width: "90%", marginLeft: "auto", marginRight:"auto"}}>
            <div className={displayDevice ? `${About2moduleCss['about-post']}` : `${About2moduleCss['aboutPostM']}`}>
              <div className={displayDevice ? `${About2moduleCss['about-post-img']}` : `${About2moduleCss['aboutPostImgM']}`}>
                {/* <img className={`${About2moduleCss['about-img']}`} src={service} alt="this is "/> */}
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='AccreIm1'
                  initialValue={`<img src="https://i.ibb.co/NWGbFbP/service-05-1280x960.jpg" alt="Service1" class="w-96 h-60 object-cover"/>`}
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
              <div className={`${About2moduleCss['about-content']}`}>
                <h1 className={`${About2moduleCss['about-title']}`}>  Commited To
                  Your Business</h1>
                <p className={`${About2moduleCss['about-para']}`}>Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.</p>
                <a href={2} className={`${About2moduleCss.btnb}`}>View Our Portfolio</a>
              </div>
            </div>
          </section>
        </section>
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
  )
}
