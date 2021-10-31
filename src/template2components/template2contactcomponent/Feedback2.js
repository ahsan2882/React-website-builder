import React, { useRef } from 'react'
import FeedbackCss from './Feedback.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Feedback2() {
  const editorRef = useRef(null);
  return (
    <>
      <section className={FeedbackCss.feedback}>

        <div className={FeedbackCss['feed-contain']}>
        <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Feeback 6'
            initialValue={`<img class=${FeedbackCss.feedImg} src="https://i.ibb.co/Xbp3jt5/news1.jpg" alt="feedback"  />`}
            init={
              {
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
          <div className={FeedbackCss['feed-content']}>
            <div className={FeedbackCss.MainHeading}>
              <Editor

                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Feedback1'
                initialValue={`<span class="${FeedbackCss.SpanColor}"> YOUR </span> FEEDBACK`}
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
            <div className={FeedbackCss.spanDesc}>
              <Editor

                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Feedback2'
                initialValue="<p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>"
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
            <div className={FeedbackCss.divMainHeading}>
              <div className={FeedbackCss.divMainHeading} data-aos="fade-left"></div>
              <div className={FeedbackCss.divMainHeading} data-aos="fade-right"> </div>
            </div>
            <Editor

              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Feedback3'
              initialValue="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat iure sunt?
                Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam voluptate saepe?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat
                iure sunt?
                Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam
                voluptate saepe?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at nam facere ullam. Obcaecati error sequi quaerat
                iure sunt?
                Dolore suscipit sed quis ullam sint velit esse? Omnis quae dolorem rem at, porro amet quam culpa aliquam magnam
                voluptate saepe?</p>"
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

            <button className={FeedbackCss.btnb}>

              <Editor

                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Feedback3'
                initialValue="Download Form"
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
               </button>

          </div>
        </div>
      </section>
      <section className={FeedbackCss.mapsec}>
        <div className={FeedbackCss.map}><iframe width="100%" height="100%" title="map" class="" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe></div>
      </section>
    </>
  )
}
