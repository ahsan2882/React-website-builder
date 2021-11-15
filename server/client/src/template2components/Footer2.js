import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';
import Footer2moduleCss from './Footer2.module.css'
export const Footer2 = ({ displayDevice, showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("#c0272d");
  const editorRef = useRef();

  return (
    <>
      <footer className={`${Footer2moduleCss.footer2}`} style={{ background: currentBackground }}>
        <div className={Footer2moduleCss.footer} style={{ background: currentBackground }}>
          <div className={displayDevice ? Footer2moduleCss['row-foot'] : Footer2moduleCss['row-footM']} style={{ background: currentBackground }}>
            <div className={displayDevice ? Footer2moduleCss['column-foot'] : Footer2moduleCss['columnFootM']} style={{ background: currentBackground }}>
              <div className={Footer2moduleCss.span}></div>
              <h2 className={displayDevice ? Footer2moduleCss.hh1 : Footer2moduleCss.hh1M}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)1'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue="Citrix"
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
              </h2>
              <h1 className={Footer2moduleCss.hh2}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)4'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue="Consultancy"
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
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='footer(2)10'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<p class="${Footer2moduleCss.mainpara}">Visualize quality intellectual capital without superior collaboration and idea sharing installed base portals.</p>`}
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
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-black mr-2"></i>

                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)11'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue={`<p>Address:4010 Feeney Way</p>`}
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
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-black mr-2"></i>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)13'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue={`<p>020 7946 0020 </p>`}
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
              <div className="flex items-center">
                <i className="fas fa-envelope text-black mr-2"></i>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)16'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue={`<p>critrixconsultancy@gmail.com</p>`}
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
            <div className={displayDevice ? Footer2moduleCss['column-foot'] : Footer2moduleCss['columnFootM']} >
              <div className={Footer2moduleCss.span}></div>
              <h2 className={displayDevice ? Footer2moduleCss.hh1 : Footer2moduleCss.hh1M}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)2'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue=" Our Locations"
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


              </h2>
              <h1 className={Footer2moduleCss.hh2} >
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)5'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue="Where to find us?"
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
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='AccreIm1'
                initialValue={displayDevice ? `<img class="${Footer2moduleCss.footimg}" src="https://i.ibb.co/L0HJLvC/img-footer-map.png"  alt="client 1" class="w-72 h-36 object-cover"/>` : `<img class="${Footer2moduleCss.footImgM}" src="https://i.ibb.co/L0HJLvC/img-footer-map.png"  alt="client 1" class="w-72 h-36 object-cover"/>`}
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
            <div className={displayDevice ? Footer2moduleCss['column-foot'] : Footer2moduleCss['columnFootM']} style={{ backgroundColor: "transparent" }}>
              <div className={displayDevice? Footer2moduleCss.col : Footer2moduleCss.colM}>
                <div className="flex items-center mt-2">
                  <i className="fas fa-map-marker-alt i1 text-black mr-2"></i>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer(2)18'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p>San Diego: 619 270 8578  </p> `}
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
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-black mr-2"></i>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer(2)20'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p> Ontario: 613 285 5534  </p>
                        `}
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
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-black mr-2"></i>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer(2)22'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p>London: 020 7946 0020 </p> 
                        `}
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
            </div>
            <div>
              <div className={displayDevice ? Footer2moduleCss['column-foot'] : Footer2moduleCss['columnFootM']}>
                <div className={Footer2moduleCss.span}></div>
                <h2 className={displayDevice ? Footer2moduleCss.hh1 : Footer2moduleCss.hh1M}>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer(2)3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="Get in touch"
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
                </h2>
                <h1 className={Footer2moduleCss.hh2}>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer(2)7'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="Citrix Social links"
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
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='footer(2)10'
                  tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                  initialValue={`<p class="${Footer2moduleCss.mainpara}">Taking seamless key performance indicators offline to maximise the long tail</p>`}
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

                <p style={{ fontSize: `3rem`, display: `flex` }}>
                  <i style={{ marginLeft: `0.75rem` }} className="fab fa-facebook i"></i>
                  <i style={{ marginLeft: `0.75rem` }} className="fab fa-twitter-square i "></i>
                  <i style={{ marginLeft: `0.75rem` }} className="fab fa-pinterest i "></i>
                  <i style={{ marginLeft: `0.75rem` }} className="fab fa-linkedin i"></i>
                </p>
              </div>
            </div>
          </div>
          <div className={displayDevice ? Footer2moduleCss['bottom-foot'] : Footer2moduleCss['bottom-footM']}>
            <div className={Footer2moduleCss.copy}>

              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='footer(2)22'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<p class="w-full">Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved. </p> 
                        `}
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
        </div>
      </footer>
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
