import React, { useRef, useState } from 'react'
import programAboutmoduleCss from './ProgramAbout.module.css'
// import img1 from './1.svg'
// import img2 from './2.svg'
// import img3 from './3.svg'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
export default function ProgramAbout({ displayDevice, showPopup, overSection }) {
   const [currentBackground, setCurrentBackground] = useState("white");
   const [showPopup1, setShowPopup1] = useState(false);
   const [showPopup2, setShowPopup2] = useState(false);
   const [showPopup3, setShowPopup3] = useState(false);
   const [currentBackground1, setCurrentBackground1] = useState("white");
   const [currentBackground2, setCurrentBackground2] = useState("white");
   const [currentBackground3, setCurrentBackground3] = useState("white");
   const editorRef = useRef(null);

   return (
      <>
         <div style={{ background: currentBackground }}>
            <section style={{ background: currentBackground }} className={`${programAboutmoduleCss.services}`}>
               <div className={displayDevice ? `${programAboutmoduleCss['service-item-container']}` : `${programAboutmoduleCss['service-item-containerM']}`}>
                  <div className={`${programAboutmoduleCss['service-item']}  ${programAboutmoduleCss['fade-in']}`} style={{ background: currentBackground1 }} onClick={() => setShowPopup1(state => !state)}>
                     <div className={`${programAboutmoduleCss.bar}`}></div>
                     {/* <div className={`${programAboutmoduleCss.item}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='About5'
                           initialValue={`<img src="https://svgshare.com/i/bt1.svg" alt="img" class="w-full" />`}
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

                     </div> */}
                     <img src="https://drive.google.com/uc?id=1ZJ4FmeCK5SMnIdX41_XoV7Q_20oLK9EW" alt="img" class="w-full" />
                     <h1 className={`${programAboutmoduleCss['pro-head']}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program3'
                           initialValue="Who We Are"
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
                     {/* <p className={`${programAboutmoduleCss['pro-para']}`}> */}
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program4'
                        initialValue={`<p class="${programAboutmoduleCss['pro-para']}">We are men of word, standing foursquare behind our clients.</p>`}

                        init={{
                           forced_root_block: "",
                           menubar: false,
                           toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                              'alignright alignjustify | fontselect',
                           fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                           font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                     />

                     <button style={{ marginBottom: `20px` }} className={`${programAboutmoduleCss.btnb}`}>

                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program4'
                           initialValue="Read More"
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
                        <i style={{ marginLeft: `5px` }} className="fas fa-long-arrow-alt-right"></i>
                     </button>
                  </div>
                  <div style={(showPopup1) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                     <GithubPicker
                        triangle="top-right"
                        onChangeComplete={(color) => {
                           setCurrentBackground1(color.hex);
                        }}
                     />
                  </div>
                  <div style={{ background: currentBackground2 }} className={`${programAboutmoduleCss['service-item']}  ${programAboutmoduleCss['fade-in']}`} onClick={() => setShowPopup2(state => !state)}>
                     <div className={`${programAboutmoduleCss.bar}`}></div>
                     {/* <div className={`${programAboutmoduleCss.item}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='About5'
                           initialValue={`<img src="https://svgshare.com/i/buV.svg" alt="img" class="w-full" />`}
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

                     </div> */}
                     <img src="https://drive.google.com/uc?id=14hF-fBBEozB0WPP9Hq87JBd2ITPJq5_j" alt="img" class="w-full" />
                     <h1 className={`${programAboutmoduleCss['pro-head']}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program5'
                           initialValue="Our Mission"
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

                     {/* <p className={`${programAboutmoduleCss['pro-para']}`}> */}
                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program6'
                        initialValue={`<p class="${programAboutmoduleCss['pro-para']}">There is no mission we can fail. We provide with the highest security level..</p>`}
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
                     <button style={{ marginBottom: `20px` }} className={`${programAboutmoduleCss.btnb}`}>

                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program7'
                           initialValue="Read More "
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
                        <i style={{ marginLeft: `5px` }} className="fas fa-long-arrow-alt-right"></i>
                     </button>
                  </div>
                  <div style={(showPopup2) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                     <GithubPicker
                        triangle="top-right"
                        onChangeComplete={(color) => {
                           setCurrentBackground2(color.hex);
                        }}
                     />
                  </div>
                  <div style={{ background: currentBackground3 }} className={`${programAboutmoduleCss['service-item']}  ${programAboutmoduleCss['fade-in']}`} onClick={() => setShowPopup3(state => !state)}>
                     <div className={`${programAboutmoduleCss.bar}`}></div>
                     {/* <div className={`${programAboutmoduleCss.item}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='About5'
                           initialValue={`<img src="https://svgshare.com/i/bsp.svg" alt="img"class="w-full" />`}
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
                     </div> */}
                     <img src="https://drive.google.com/uc?id=1DBghzAEv6hvn8s6OpQnVdhsGgC4PVi8B" alt="img" class="w-full" />
                     <h1 className={`${programAboutmoduleCss['pro-head']}`}>
                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program7'
                           initialValue="Our Vision "
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
                     {/* <p className={`${programAboutmoduleCss['pro-para']}`}> */}

                     <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program7'
                        initialValue={`<p class="${programAboutmoduleCss['pro-para']}">We stand against violence, but if necessary we use our force.</p>`}
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
                     <button style={{ marginBottom: `20px` }} className={`${programAboutmoduleCss.btnb}`}>

                        <Editor
                           onInit={(evt, editor) => editorRef.current = editor}
                           inline={true}
                           key='Program7'
                           initialValue="Read More"
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
                        <i style={{ marginLeft: `5px` }} className="fas fa-long-arrow-alt-right"></i>
                     </button>
                  </div>
                  <div style={(showPopup3) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
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
