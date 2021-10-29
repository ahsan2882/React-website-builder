import React, { useRef } from 'react'
import About2moduleCss from './About2.module.css'
import  service from '../assets/template2images/service_05-1280x960.jpg'
import logo from '../assets/template2images/dot.png'
import { Editor } from '@tinymce/tinymce-react';

export const About2 = () => {
  const editorRef = useRef();

    return (
    <>
     <section class={`${About2moduleCss['head-main']}`}>
     
<h1 class={`${About2moduleCss.MainHeading}`}> 
<Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='About(2)2'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue={`<span class="${About2moduleCss.SpanColor}">About </span> Us`}
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
          {/* <span class={`${About2moduleCss.SpanColor}`}>About </span> Us */}
           </h1>
        <div class={`${About2moduleCss.spanDesc}`}>
        <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='About(2)1'
            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
            initialValue={`<p>  Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>`}
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
        <div class={`${About2moduleCss.divMainHeading}`}>
          <div class={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div><img className={`${About2moduleCss.dot}`} src={logo} data-aos="fade" alt="this is"/>
          <div class={`${About2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
        </div>
      </section>
 <section className={`${About2moduleCss['about-sec']}`} data-aos="fade">
    <div className={`${About2moduleCss['about-post']}`}>
      <div className={`${About2moduleCss['about-post-img']}`}>
        {/* <img className={`${About2moduleCss['about-img']}`} src={service} alt="this is "/> */}
        <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='AccreIm1'
                                    initialValue={`<img src="${service}" alt="Service1" class="w-96 h-60 object-cover"/>`}
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
      <div className={`${About2moduleCss['about-content']}`}>
        <h1 className={`${About2moduleCss['about-title']}`}>  Commited To 
          Your Business</h1>
        <p className={`${About2moduleCss['about-para']}`}>Given the complexity of forming a team including consciously or unconsciously developing team interaction norms and guidelines, ending up with an effective, functioning team is downright amazing.</p>
        <a href={2} className={`${About2moduleCss.btnb}`}>View Our Portfolio</a>
      </div>
    </div>
  </section>


    </>
    )
}
