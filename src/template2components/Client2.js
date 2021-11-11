import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Client2moduleCss from './Client2.module.css'
import { Editor } from '@tinymce/tinymce-react';

export const Client2 = ({ displayDevice, showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const [currentBackground0, setCurrentBackground0] = useState("#292929");
  const [showPopup0, setShowPopup0] = useState(false);
  const [currentBackground1, setCurrentBackground1] = useState("#c0272d");
  const [showPopup1, setShowPopup1] = useState(false);
  const [currentBackground2, setCurrentBackground2] = useState("#292929");
  const [showPopup2, setShowPopup2] = useState(false);
  const editorRef = useRef();
  return (
    <>
      <section style={{ background: currentBackground }}>
        <section className={`${Client2moduleCss['head-main']}`} style={{ background: currentBackground }}>
          <h1 className={`${Client2moduleCss.MainHeading}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About(2)48'
              tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
              initialValue={`<span class="${Client2moduleCss.SpanColor}">OUR    </span> CLIENT SAYS`}
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
          <div className={`${Client2moduleCss.spanDesc}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Client(2)1'
              tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
              initialValue={`<p>  Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>`}
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
          <div className={`${Client2moduleCss.divMainHeading}`}>
            <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div>
            <img className={`${Client2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="Dot" />
            <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
          </div>
        </section>
        <section className={`${Client2moduleCss['test-sec']}`} data-aos="fade" style={{ background: currentBackground }}>

          <div className={`${Client2moduleCss['container-test']}`}>
            <div className={displayDevice ? `${Client2moduleCss['row-test']}` : `${Client2moduleCss['rowTestM']}`}>
              <div className={`${Client2moduleCss['test-card']} relative`} onClick={() => setShowPopup0(state => !state)} style={{ background: currentBackground0 }}>
                <div className={`${Client2moduleCss['test-body']}`}>
                  <div className={`${Client2moduleCss.test}`}>
                    {/* <img className={`${Client2moduleCss['testlogo']}`} src={client1} alt="1" /> */}
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Client(2)96'
                      initialValue={`<img src="https://i.ibb.co/cXXJYMk/client1.png" alt="client1" class="${Client2moduleCss.testlogo} w-36 h-18 object-cover"/>`}
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
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Client(2)4'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`   <p class="${Client2moduleCss.testpara}"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur vel esse veniam commodi saepe amet veritatis quam,
                        dolore error, inventore modi tenetur ullam eligendi eveniet,
                        soluta perferendis dicta aperiam molestias qui voluptas
                        reprehenderit nemo placeat. Quia similique temporibus autem odio
                        repellat nisi doloribus dicta praesentium?
                        </p>`}
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
                  <div className={`${Client2moduleCss['test-line']}`}>
                    <div className={`${Client2moduleCss.line}`}></div>
                  </div>
                  <div className={`${Client2moduleCss['test-footer']}`}>
                    <h1 style={{ color: `white` }} className={`${Client2moduleCss['test-main']}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)5'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Shams W.pawel"
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
                    <h2 className={`${Client2moduleCss.testchild}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)11'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Founder & CEO of Speed Studio"
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



                    </h2>
                  </div>
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
              <div className={`${Client2moduleCss['test-card']} ${Client2moduleCss['t-mid']} relative`} onClick={() => setShowPopup1(state => !state)} style={{ background: currentBackground1 }}>
                <div className={`${Client2moduleCss['test-body']}`}>
                  <div className={`${Client2moduleCss.test}`}>
                    {/* <img className={`${Client2moduleCss['testlogo']}`} src={client2} alt="2" /> */}
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Client(2)97'
                      initialValue={`<img src="https://i.ibb.co/dBjdw5Z/client2.png" alt="client2" class="${Client2moduleCss.testlogo} w-36 h-18 object-cover"/>`}
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
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Client(2)2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`   <p class="${Client2moduleCss.testpara}"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur vel esse veniam commodi saepe amet veritatis quam,
                        dolore error, inventore modi tenetur ullam eligendi eveniet,
                        soluta perferendis dicta aperiam molestias qui voluptas
                        reprehenderit nemo placeat. Quia similique temporibus autem odio
                        repellat nisi doloribus dicta praesentium?
                        </p>`}
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


                  <div className={`${Client2moduleCss['test-line']}`}>
                    <div className={`${Client2moduleCss.line}`}></div>
                  </div>
                  <div className={`${Client2moduleCss['test-footer']}`}>
                    <h1 className={`${Client2moduleCss['test-main']}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)6'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Shams W.pawel"
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
                      /></h1>
                    <h2 className={`${Client2moduleCss.testchild}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)9'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Founder & CEO of Speed Studio"
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



                    </h2>
                  </div>
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
              <div className={`${Client2moduleCss['test-card']} relative`} onClick={() => setShowPopup2(state => !state)} style={{ background: currentBackground2 }}>
                <div className={`${Client2moduleCss['test-body']}`}>
                  <div className={`${Client2moduleCss.test}`}>
                    {/* <img className={`${Client2moduleCss['testlogo']}`} src={client3} alt="3" /> */}
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Client(2)98'
                      initialValue={`<img src="https://i.ibb.co/4P60VRN/client3.png" alt="client3" class="${Client2moduleCss.testlogo} w-36 h-18 object-cover"/>`}
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
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Client(2)3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={`<p class="${Client2moduleCss.testpara}"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur vel esse veniam commodi saepe amet veritatis quam,
                        dolore error, inventore modi tenetur ullam eligendi eveniet,
                        soluta perferendis dicta aperiam molestias qui voluptas
                        reprehenderit nemo placeat. Quia similique temporibus autem odio
                        repellat nisi doloribus dicta praesentium?
                        </p>`}
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
                  <div className={`${Client2moduleCss['test-line']}`}>

                    <div className={`${Client2moduleCss.line}`}></div>
                  </div>
                  <div className={`${Client2moduleCss['test-footer']}`}>
                    <h1 className={`${Client2moduleCss['test-main']}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)8'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Shams W.pawel"
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
                      /></h1>


                    <h2 className={`${Client2moduleCss.testchild}`}>
                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Client(2)9'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Founder & CEO of Speed Studio"
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



                    </h2>

                  </div>
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
