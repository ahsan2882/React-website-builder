import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'

import Hero2Css from './Hero2Asset.module.css'
export default function Hero2Asset() {
  const editorRef = useRef(null);
  return (
    <>
      <section className="flex justify-evenly items-center">
        <div className="w-1/2 text-center">
          {/* <h1>Security Guards for your Everyday needs</h1> */}
          <h1 className="text-6xl w-11/12 font-bold text-blue-700">
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
                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
              }}
            />
          </h1>
          {/* <p>Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p> */}
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='hero4ed2'
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue={`<p class="text-2xl w-4/5">Ad elit magna ipsum ea. Culpa fugiat ipsum laborum in tempor ex ea occaecat qui minim adipisicing anim proident pariatur. Quis cillum proident dolor ipsum quis ea consectetur aliqua commodo.</p>`}
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
        <div className="w-1/2">
          <img src="https://i.ibb.co/0ZMZXfV/guard4.png" alt="guard4" style={{ width: "48rem", height: "50rem" }} class="object-cover" />
        </div>
      </section>
    </>
  )
}
