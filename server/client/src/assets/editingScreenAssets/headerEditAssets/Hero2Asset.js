import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'
import Hero2Css from './Hero2Asset.module.css'
export default function Hero2Asset({ displayDevice }) {
  const editorRef = useRef(null);
  return (
    <>
      <section className={displayDevice ? `flex justify-evenly items-center ${Hero2Css.hero}` : `flex justify-evenly items-center ${Hero2Css.heroM}`}>
        <div className={`w-full ml-20 ${Hero2Css.headtext}`}>
          {/* <h1>Security Guards for your Everyday needs</h1> */}
          <h1 className={displayDevice ? `text-4xl w-11/12 font-bold text-blue-700 ${Hero2Css.headtext} ` : `text-4xl w-11/12 font-bold text-blue-700 ${Hero2Css.headtext1} `}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='hero4ed1'
              tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
              initialValue="Security Guards for your Everyday needs"
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
          {/* <p>Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p> */}
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='hero4ed2'
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue={`<p class="text-xl w-4/5">Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p>`}
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
        </div>
        <div className="w-full">
          {/* <img src="https://i.ibb.co/0ZMZXfV/guard4.png" alt="guard4" style={{ width: "48rem", height: "50rem" }} class="object-cover" /> */}
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Service4Im1'
            initialValue={`<img src="https://i.ibb.co/0ZMZXfV/guard4.png" alt="guard4" class="object-cover ${Hero2Css.bgImg}"/>`}
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
      </section>
    </>
  )
}
