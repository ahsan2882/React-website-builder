import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
// import Test from '../assets/template1images/testiEdit.png'
import Testimonial1Css from './Testimonials1.module.css'
import { GithubPicker } from 'react-color';

export const Testimonials1 = ({ showPopup, overSection }) => {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef(null);
  return (
    <>
      <div style={{ background: currentBackground }} className={`${Testimonial1Css['text-main-text']}`}>
        <h1 style={{ color: `black` }} className={`${Testimonial1Css.headings}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Testimonal1'
            initialValue="What Our Clients Says"
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
        <div className={`${Testimonial1Css.subhead}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Testimonal2'
            initialValue="<p>Read honest testimonials of our clients who got secured thanks to our
            services.</p>"
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

      <div style={{ background: currentBackground }} className={`${Testimonial1Css.container8}`}>

        <div className={`${Testimonial1Css['container8-content']}`}>
          <div>
            <h2 className={`${Testimonial1Css['testimonial-heading']}`}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Testimonal3'
                initialValue="What Our Clients Say"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </h2>
          </div>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Testimonal4'
            initialValue="<p>When I saw how these guys prepare themselves to any operation, I
            realized that it was it! I must hire them! I was scared. Now I am
            feeling safe because there is always the strongmen team with me and
            my folks.</p>"
            init={{
              forced_root_block: "",
              menubar: false,
              toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
            }}
          />


          <div className={`${Testimonial1Css.author}`}>

            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Testimonal5'
              initialValue={`<p class="${Testimonial1Css['testimonial-author']}"> Alicia McKanzey</p>`}
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
          </div>
        </div>

        <div className={`${Testimonial1Css['container10-image']}`}>

          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Testimal6'
            initialValue={`<img  src="https://i.ibb.co/HTpZQ9p/testi-Edit.png" alt="testi-Edit" class="w-96 h-96 object-cover"/>`}
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
