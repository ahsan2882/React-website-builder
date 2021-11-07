import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import Hero1Css from './Hero1Asset.module.css'
import { GithubPicker } from 'react-color';

export default function Hero1Asset({ displayDevice, overSection, showPopup }) {
  const [backgroundType, setBackgroundType] = useState("image");
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState("black");
  return (
    <>
      <section className="overflow-hidden">
        {/* {backgroundType === "color" ? <HeroSection4ComponentColorImage color={currentBackgroundColor} /> : (backgroundType === "image" ? <HeroSection4ComponentColorImage image={currentBackgroundImage} /> : <HeroSection4ComponentVideo />)} */}
        {backgroundType === "color" ? <HeroAsset1ComponentColor color={currentBackgroundColor} displayDevice={displayDevice} /> : null}
        {backgroundType === "image" ? <HeroAsset1ComponentImage displayDevice={displayDevice} /> : null}
        {backgroundType === "video" ? <HeroAsset1ComponentVideo displayDevice={displayDevice} /> : null}
        <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
          <div className="flex flex-col justify-center items-center border-2 border-black w-64 rounded-lg bg-white">
            <button className="py-4" onClick={() => setBackgroundType("color")}>Color</button>
            {backgroundType === "color" ? <GithubPicker
              triangle="top-right"
              onChangeComplete={(color) => {
                setBackgroundType("color")
                setCurrentBackgroundColor(color.hex);
              }}
            /> : null}
            <button className="py-2" onClick={() => setBackgroundType("image")}>Image</button>
            <button className="py-4" onClick={() => setBackgroundType("video")}>Video</button>

          </div>
        </div>
      </section>
    </>
  )
}



const HeroAsset1ComponentColor = ({ color, displayDevice }) => {
  const editorRef = useRef(null);
  return (
    <>
      
    </>
  )
}

const HeroAsset1ComponentImage = ({ displayDevice }) => {
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
              toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
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
                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | fontselect',
                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
              }}
            />
          </h1>
        </div>
      </section>
    </>
  )
}


const HeroAsset1ComponentVideo = ({ displayDevice }) => {
  const editorRef = useRef(null);
  return (
    <>

    </>
  )
}

