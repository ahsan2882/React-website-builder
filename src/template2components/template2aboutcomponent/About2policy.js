import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import AboutpolicyCss from './About2policy.module.css'
import { Editor } from '@tinymce/tinymce-react';

export default function About2policy({ showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef(null);
  return (
    <>

      <section className={`${AboutpolicyCss['policies']} ${AboutpolicyCss['head-main']}`} id="our-policies" style={{ background: currentBackground }}>
        <div className={AboutpolicyCss['MainHeading']}>
          <Editor

            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Service1'
            initialValue={` <span className=${AboutpolicyCss.SpanColor}> OUR </span> Policy`}
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
        <div className={AboutpolicyCss['spanDesc']}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Aboutpolicy1'
            initialValue="<p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>"
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


      </section>
      <section className={AboutpolicyCss['policy']}>
        <div className={AboutpolicyCss['section-our-policies']}>
          <div className={AboutpolicyCss['container-policies']}>
            <div className={AboutpolicyCss['parent']}>
              <div className={AboutpolicyCss['policy-top']}>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Aboutpolicy2'
                  initialValue="<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse asperiores suscipit at quos, ipsum vero magni explicabo temporibus unde quaerat?</p>"
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
              <div className={AboutpolicyCss['paradiv']}>
                <div className={AboutpolicyCss['flexi-row']}>
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy1'
                      initialValue="  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy3'
                      initialValue="<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
            saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
                <div className={AboutpolicyCss['flexi-row']}>
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy4'
                      initialValue=" <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
                                      saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy5'
                      initialValue=" <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
                      saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
                <div className={AboutpolicyCss['flexi-row']}>
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy6'
                      initialValue=" <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
                      saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
                  <div className={`${AboutpolicyCss['divi']} ${AboutpolicyCss['contain-sub']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy7'
                      initialValue="<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo
                      saepe.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sed optio, dignissimos aliquam explicabo saepe</p>"
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
              </div>

            </div>

            <div className={`${AboutpolicyCss['div8']} ${AboutpolicyCss['container-sub-b']}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Feeback7'
                initialValue={` <img src="https://i.ibb.co/6XHDXXN/news3.jpg" alt="news3" />`}
                init={
                  {
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


              <div className={AboutpolicyCss['sub-content-head']}>
                <h5>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Aboutpolicy8'
                    initialValue="Lorem, ipsum."
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
                </h5>
                <h3>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Aboutpolicy9'
                    initialValue='spider<span style={{ "color": "#c0272d" }}>woman</span>'
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
                </h3>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Aboutpolicy10'
                  initialValue="  <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tempore asperiores nostrum voluptates fuga
                      aspernatur maiores consequatur sequi nisi veniam?</p>"
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

              <div className={AboutpolicyCss['icon-policy']}>
                <div className={AboutpolicyCss['icon-line']}>
                  <i className="fas fa-map-pin fa-2x"></i>
                  <div className={AboutpolicyCss['handp']}>
                    <h3>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Aboutpolicy11'
                        initialValue="Lorem, ipsum."
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
                    </h3>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy12'
                      initialValue="<p>Lorem, ipsum.</p>"
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
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy13'
                      initialValue="<p>Lorem, ipsum.</p>"
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
                <div className={AboutpolicyCss['icon-line']}>
                  <i className="fas fa-file-contract fa-2x"></i>
                  <div className={AboutpolicyCss['handp']}>
                    <h3>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Aboutpolicy14'
                        initialValue="Lorem, ipsum."
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
                    </h3>

                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy14'
                      initialValue="<p>Lorem, ipsum.</p>"
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
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy15'
                      initialValue="<p>Lorem, ipsum.</p>"
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
                <div className={AboutpolicyCss['icon-line']}>
                  <i className="fas fa-user-friends fa-2x"></i>
                  <div className={AboutpolicyCss['handp']}>
                    <h3>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Aboutpolicy14'
                        initialValue="Lorem, ipsum."
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
                    </h3>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy15'
                      initialValue="<p>Lorem, ipsum.</p>"
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
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Aboutpolicy15'
                      initialValue="<p>Lorem, ipsum.</p>"
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
              </div>
            </div>
          </div>
        </div>
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
