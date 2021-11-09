import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';
import Hero1Css from './Hero1Asset.module.css'

export default function Hero1Asset({ displayDevice }) {
  const editorRef = useRef(null);
  return (
    <>
      <section className={`relative`}
      >
        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          inline={true}
          disabled={displayDevice ? false : true}
          key='Service4Im1'
          initialValue={displayDevice ? `<img src="https://i.ibb.co/C8ZPc41/blog-15-770x545.png" alt="london" class=" ${Hero1Css.bgImg} object-cover "/>` : `<img src="https://i.ibb.co/C8ZPc41/blog-15-770x545.png" alt="london" class=" ${Hero1Css.bgImgM} object-cover "/>`}
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
        <h1 className={displayDevice ? `text-7xl text-white font-bold absolute top-80 left-96 ${Hero1Css.mainHead1}` : `text-7xl text-white font-bold absolute top-80 left-96 ${Hero1Css.mainHead1M}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='hero4ed1'
            disabled={displayDevice ? false : true}
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue="Security"
            init={{
              plugins: [
                "link"
              ],
              forced_root_block: "",
              menubar: false,
              toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect | lineheight',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

            }}
          />
        </h1>
        <div className={displayDevice ? `bg-BL-400 absolute top-0 right-0 ${Hero1Css.bgClr}` : `bg-BL-400 absolute top-0 right-0 ${Hero1Css.bgClrM}`}>
          <h1 className={displayDevice ? `text-7xl text-black font-bold absolute ${Hero1Css.mainHead2}` : `text-7xl text-black font-bold absolute ${Hero1Css.mainHead2M}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='hero4ed1'
              disabled={displayDevice ? false : true}
              tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
              initialValue="Solutions"
              init={{
                plugins: [
                  "link"
                ],
                forced_root_block: "",
                menubar: false,
                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect | lineheight',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

              }}
            />
          </h1>
        </div>
      </section>
    </>
  )
}