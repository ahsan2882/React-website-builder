import React, { useRef, useState } from 'react'
import Program1Css from './Program1.module.css'
import img1 from '../assets/template1images/1.svg'
import img2 from '../assets/template1images/2.svg'
import img3 from '../assets/template1images/3.svg'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';

export const Program1 = ({ showPopup, overSection }) => {
   const [showPopup1, setShowPopup1] = useState(false);
   const [showPopup2, setShowPopup2] = useState(false);
   const [showPopup3, setShowPopup3] = useState(false);
   const [currentBackground1, setCurrentBackground1] = useState("white");
   const [currentBackground2, setCurrentBackground2] = useState("white");
   const [currentBackground3, setCurrentBackground3] = useState("white");
  const [currentBackground, setCurrentBackground] = useState("white");

   const editorRef = useRef(null);
   return (
      <>
      <div style={{ background: currentBackground }}>
         <div className={`${Program1Css['text-main-text']}`}>
            <h1 style={{ color: `black` }} className={`${Program1Css.headings}`}>
               <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Program1'
                  initialValue="Our Programs"
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
            <div className={`${Program1Css.subhead}`}>
               <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Program2'
                  initialValue=" We are able to guarantee your safety 24/7 no matter who you are and whatever you do."
                  init={{
                     forced_root_block: "",
                     menubar: false,
                     toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                     fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                     font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
               />

            </div>
         </div>
         <section style={{ background: currentBackground }} className={`${Program1Css.services}`}>
            <div className={`${Program1Css['service-item-container']}`}>
               <div  className={`${Program1Css['service-item']}  ${Program1Css['fade-in']}`} style={{background:currentBackground1}}onClick={() => setShowPopup1(state => !state)}>
                  <div className={`${Program1Css.bar}`}></div>
                  <div className={`${Program1Css.item}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='About5'
                        initialValue={`<img src=${img1} alt="img"class="w-full" />`}
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
                  <h1 className={`${Program1Css['pro-head']}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program3'
                        initialValue="Cultural Awareness in the Workplace"
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
                  {/* <p className={`${Program1Css['pro-para']}`}> */}
                  <Editor
                     onInit={(evt, editor) => editorRef.current = editor}
                     inline={true}
                     key='Program4'
                     initialValue={`<p class="${Program1Css['pro-para']}">Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. 
                     Watch this video to learn about cultural awareness in the workplace</p>`}

                     init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                           'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                     }}
                  />

                  <a style={{ marginBottom: `20px` }} className={`${Program1Css.btnb}`} href={2}>

                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program4'
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
                     <i className="fas fa-long-arrow-alt-right"></i></a>
               </div>
               <div style={(showPopup1) ?   { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground1(color.hex);
                    }}
                />
            </div>
               <div style={{ background: currentBackground2}} className={`${Program1Css['service-item']}  ${Program1Css['fade-in']}`} onClick={() => setShowPopup2(state => !state)}>
                  <div className={`${Program1Css.bar}`}></div>
                  <div className={`${Program1Css.item}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='About5'
                        initialValue={`<img src=${img2} alt="img"class="w-full" />`}
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
                  <h1 className={`${Program1Css['pro-head']}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program5'
                        initialValue="Military Virtual Awareness Training"
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

                  {/* <p className={`${Program1Css['pro-para']}`}> */}
                  <Editor
                     onInit={(evt, editor) => editorRef.current = editor}
                     inline={true}
                     key='Program6'
                     initialValue={`<p class="${Program1Css['pro-para']}">Watch this video to see one of the Department of Defense's approaches to building cultural awareness and
                        reducing risk in culturally diverse environments.</p>`}
                     init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                           'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                     }}
                  />
                  {/* </p> */}
                  <a style={{ marginBottom: `20px` }} className={`${Program1Css.btnb}`} href={2}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program7'
                        initialValue="Read More "
                        init={{
                           forced_root_block: "",
                           menubar: false,
                           toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                              'alignright alignjustify | fontselect',
                           fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                           font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                     />
                     <i className="fas fa-long-arrow-alt-right"></i></a>
               </div>
               <div style={(showPopup2)   ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground2(color.hex);
                    }}
                />
            </div>
               <div style={{ background: currentBackground3}} className={`${Program1Css['service-item']}  ${Program1Css['fade-in']}`} onClick={() => setShowPopup3(state => !state)}>
                  <div className={`${Program1Css.bar}`}></div>
                  <div className={`${Program1Css.item}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='About5'
                        initialValue={`<img src=${img3} alt="img"class="w-full" />`}
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
                  <h1 className={`${Program1Css['pro-head']}`}>
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program7'
                        initialValue="Insider Threat: Resilience "
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
                  {/* <p className={`${Program1Css['pro-para']}`}> */}
                 
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program7'
                        initialValue= {`<p class="${Program1Css['pro-para']}">Resilience allows individuals to bounce back from setbacks and stressful situations.
                        Without this quality,some people may develop increased risks associated with an insider</p>`}
                        init={{
                           forced_root_block: "",
                           menubar: false,
                           toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                              'alignright alignjustify | fontselect',
                           fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                           font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                     />
                  {/* </p> */}
                  <a style={{ marginBottom: `20px` }} className={`${Program1Css.btnb}`} href={2}>
                  <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program7'
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
                      <i className="fas fa-long-arrow-alt-right"></i></a>
               </div>
               <div style={(showPopup3) ?  { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground3(color.hex);
                    }}
                />
            </div>
            </div>
         </section>
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