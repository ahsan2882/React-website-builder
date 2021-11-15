import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';

import Blog2moduleCss from './Blog2.module.css'

export const Blog2 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const [currentBackground0, setCurrentBackground0] = useState("#c0272d");
  const [showPopup0, setShowPopup0] = useState(false);
  const [currentBackground1, setCurrentBackground1] = useState("#c0272d");
  const [showPopup1, setShowPopup1] = useState(false);
  const [currentBackground2, setCurrentBackground2] = useState("#c0272d");
  const [showPopup2, setShowPopup2] = useState(false);
  const editorRef = useRef();

  return (
    <>
      <section style={{ background: currentBackground }}>
        <section style={{ background: currentBackground }}>
          <section className={`${Blog2moduleCss['head-main']}`} style={{ background: currentBackground }}>
            <h1 className={`${Blog2moduleCss.MainHeading}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='About(2)48'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<span class="${Blog2moduleCss.SpanColor}">Latest </span> News`}
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
            <div className={`${Blog2moduleCss.spanDesc}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Pblog(2)1'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`<p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>`}
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
            <div className={`${Blog2moduleCss.divMainHeading}`}>
              <div className={`${Blog2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div>
              <img className={`${Blog2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="dot" />
              <div className={`${Blog2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
            </div>
          </section>
          <div className={`${Blog2moduleCss.wrapper2}`} style={{ background: currentBackground }}>
            <div className={`${Blog2moduleCss.blog2}`}>
              <div className={`${Blog2moduleCss['single-blog']}`} data-aos="fade-right">
                <div className={`${Blog2moduleCss['blog-img']}`}>

                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='AccreIm1'
                    initialValue={`<img src="https://i.ibb.co/Xbp3jt5/news1.jpg" alt="news1" class="w-96 h-60 object-cover"/>`}
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

                <div className={`${Blog2moduleCss['blog-content']} relative`} onClick={() => setShowPopup0(state => !state)} style={{ background: currentBackground0 }}>
                  <h4>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Pblog(2)6'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Mobilies UX Treend"
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
                  </h4>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Pblog(2)1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Blog2moduleCss.postpara}">Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>`}
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

                  <div className={`${Blog2moduleCss['btn-post']}`}>
                    <button className={`${Blog2moduleCss['btnb-2']}`}>

                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Pblog(2)7'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
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
                      <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i></button>
                  </div>
                  <div style={(showPopup0) ? { position: "absolute", top: "2rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                    <GithubPicker
                      triangle="top-right"
                      onChangeComplete={(color) => {
                        setCurrentBackground0(color.hex);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={`${Blog2moduleCss['single-blog']}`} data-aos="zoom-in">

                <div className={`${Blog2moduleCss['blog-img']}`}>

                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='AccreIm1'
                    initialValue={`<img src="https://i.ibb.co/fCtnB7P/news2.jpg" alt="news2" class="w-96 h-60 object-cover"/>`}
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

                <div className={`${Blog2moduleCss['blog-content']} relative`} onClick={() => setShowPopup1(state => !state)} style={{ background: currentBackground1 }}>
                  <h4>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Pblog(2)5'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Mobilies UX Treend"
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
                  </h4>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Pblog(2)2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Blog2moduleCss.postpara}">Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>`}
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
                  <div className={`${Blog2moduleCss['btn-post']}`}>
                    <button className={`${Blog2moduleCss['btnb-2']}`}>

                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Pblog(2)8'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
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
                      <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i></button>
                  </div>
                  <div style={(showPopup1) ? { position: "absolute", top: "2rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                    <GithubPicker
                      triangle="top-right"
                      onChangeComplete={(color) => {
                        setCurrentBackground1(color.hex);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={`${Blog2moduleCss['single-blog']}`} data-aos="fade-left">
                <div className={`${Blog2moduleCss['blog-img']}`}>

                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='AccreIm1'
                    initialValue={`<img src="https://i.ibb.co/6XHDXXN/news3.jpg" alt="news3" class="w-96 h-60 object-cover"/>`}
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

                <div className={`${Blog2moduleCss['blog-content']} relative`} onClick={() => setShowPopup2(state => !state)} style={{ background: currentBackground2 }}>
                  <h4>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Pblog(2)4'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Mobilies UX Trend"
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
                    key='Pblog(2)3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Blog2moduleCss.postpara}">Athena was regarded as the patron and protectress of various cities across Greece,
            particularly the city of Athens, from which she most likely received her name.</p>`}
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
                  <div className={`${Blog2moduleCss['btn-post']}`}>
                    <button className={`${Blog2moduleCss['btnb-2']}`}>

                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Pblog(2)9'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
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
                      <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i></button>
                  </div>
                  <div style={(showPopup2) ? { position: "absolute", top: "2rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                    <GithubPicker
                      triangle="top-right"
                      onChangeComplete={(color) => {
                        setCurrentBackground2(color.hex);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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

