import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Accreditation2moduleCss from './Accreditation2.module.css'
import { Editor } from '@tinymce/tinymce-react';



export const Accreditation2 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef();
  const Accreditation2Array = [
    "https://i.ibb.co/mzv3r2W/accrediation1.jpg",
    "https://i.ibb.co/L8Cd7Rc/accrediation2.jpg",
    "https://i.ibb.co/64Y67mm/accrediation3.jpg",
    "https://i.ibb.co/wQ0F5Wx/accrediation4.jpg",
    "https://i.ibb.co/qm8c9hZ/accrediation5.jpg",
    "https://i.ibb.co/MBTshjL/accrediation6.jpg",
    "https://i.ibb.co/gmxmDgF/accrediation7.jpg"
  ]
  const [accred2, setAccred2] = useState([...Accreditation2Array]);
  const [accredKey, setAccredKey] = useState("")
  const addAccred = () => {
    setAccred2([...accred2, Accreditation2Array[1]])
  }
  const removeAccred = (index) => {
    let newArray = [...accred2];
    newArray.splice(index, 1);
    setAccred2([...newArray])
  }

  return (
    <>
      <section style={{ background: currentBackground }}>
        <section style={{ background: currentBackground }}>
          <section className={`${Accreditation2moduleCss['head-main']}`} id="our-accreditations" style={{ background: currentBackground }}>
            <h1 className={`${Accreditation2moduleCss.MainHeading}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About(2)45'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<span class="${Accreditation2moduleCss.SpanColor}">Our </span> Accrediation`}
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
            </h1>
            <div className={`${Accreditation2moduleCss.spanDesc}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Program(2)1'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<p>  Accrediation are best in town and premium Lorem ipsum dolor sit amet.</p>`}
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
            <div className={`${Accreditation2moduleCss.divMainHeading}`}>
              <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left" />
              <img className={`${Accreditation2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="Dot" />
              <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
            </div>
          </section>
          <section className={`${Accreditation2moduleCss['our-accrediation']}`}>

            <div className={`${Accreditation2moduleCss['brand-carousel']} ${Accreditation2moduleCss['section-padding']} ${Accreditation2moduleCss['owl-carousel']}`}>
              {accred2.map((item, index) =>
                <div className="relative"
                  onMouseEnter={() => setAccredKey(String(index))}
                  onMouseLeave={() => setAccredKey("")}
                >
                  <div className={`${Accreditation2moduleCss.accrediation}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key={`AccreImgEditor${index}`}
                      initialValue={`<img src="${item}" alt="accreditation${index + 1}" class="w-72 h-48 object-contain" />`}
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
                    <div className={`${Accreditation2moduleCss['accre-content']}`}>
                      <h4>
                        <Editor
                          onInit={(evt, editor) => editorRef.current = editor}
                          inline={true}
                          key={`AccreHeadEditor${index}`}
                          tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                          initialValue="Lorem ipsum dolor sit amet."
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
                      </h4>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key={`AccreParaEditor${index}`}
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>`}
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
                  </div>
                  <div className="toBeRemoved" style={accredKey === String(index) ? {position:"absolute", top:"2%", right:"2%"} : {display: "none"}}>
                      <button className="w-8 h-8 bg-BL-600" onClick={() => removeAccred(index)}><i className="fas fa-trash-alt"></i></button>
                  </div>
                </div>
              )}
              <button onClick={() => addAccred()} className="border-2 border-gray-400 text-gray-500 toBeRemoved w-40 h-40 flex justify-evenly flex-col text-center items-center">
                <i className="fas fa-plus text-3xl"></i>
                <h2>Add another Accreditation</h2>
              </button>
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



