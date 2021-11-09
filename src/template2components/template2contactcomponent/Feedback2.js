import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import FeedbackCss from './Feedback.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Feedback2({ showPopup, overSection }) {
  const [currentBackground, setCurrentBackground] = useState("white");
  const editorRef = useRef(null);
  return (
    <>
      <section className={FeedbackCss.feedback} style={{ background: currentBackground }}>

        <div className={FeedbackCss['feed-contain']}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Feeback 6'
            initialValue={`<img class=${FeedbackCss.feedImg} src="https://i.ibb.co/Xbp3jt5/news1.jpg" alt="feedback"  />`}
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
                    'alignright alignjustify | fontselect | lineheight',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

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
                    'alignright alignjustify | fontselect | lineheight',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

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
                  'alignright alignjustify | fontselect | lineheight',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

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
                    'alignright alignjustify | fontselect | lineheight',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                }}
              />
            </button>

          </div>
        </div>
      </section>
      <section className={FeedbackCss.mapsec}>
        <div className={FeedbackCss.map}><iframe width="100%" height="100%" title="map" class="" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe></div>
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
