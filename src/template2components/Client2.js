import React, { useRef } from 'react'
import Client2moduleCss from './Client2.module.css'
import { Editor } from '@tinymce/tinymce-react';

export const Client2 = () => {
  const editorRef = useRef();
  return (
    <>
      <section className={`${Client2moduleCss['head-main']}`}>
        <h1 class={`${Client2moduleCss.MainHeading}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='About(2)48'
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue={`<span class="${Client2moduleCss.SpanColor}"> Client  </span> Says`}
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
                'alignright alignjustify | fontselect',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
            }}
          />

        </div>
        <div className={`${Client2moduleCss.divMainHeading}`}>
          <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div>
          <img className={`${Client2moduleCss.dot}`} src="https://i.ibb.co/VBwYpF5/dot.png" data-aos="fade" alt="Dot" />
          <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
        </div>
      </section>
      <section className={`${Client2moduleCss['test-sec']}`} data-aos="fade">

        <div className={`${Client2moduleCss['container-test']}`}>
          <div className={`${Client2moduleCss['row-test']}`}>
            <div className={`${Client2moduleCss['test-card']}`} >
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
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />



                  </h2>
                </div>
              </div>
            </div>
            <div className={`${Client2moduleCss['test-card']} ${Client2moduleCss['t-mid']}`}>
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
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />



                  </h2>
                </div>
              </div>
            </div>
            <div className={`${Client2moduleCss['test-card']}`}>
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
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />



                  </h2>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
