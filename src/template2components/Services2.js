import React , {useRef}  from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Services2moduleCss from './Services2.module.css'
import dot from '../assets/template2images/dot.png'
export const Services2 = () => {
  const editorRef = useRef();
    return (
       <>

<section className={`${Services2moduleCss['section-serv']}`}>
    <section className={`${Services2moduleCss['head-main']}`}>
      <div className={`${Services2moduleCss.MainHeading}`}><span className={`${Services2moduleCss.SpanColor}`}> OUR </span> SERVICES</div>
      <div className={`${Services2moduleCss.spanDesc}`}>
      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='service2(1)'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />

        {/* <p>
        Our Services are best in town and premium Lorem ipsum dolor sit amet.
          </p> */}
      </div>
      <div className={`${Services2moduleCss.divMainHeading}`}>
        <div className={`${Services2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> 
        <img src={dot} alt="dot images"/>
        <div className={`${Services2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
      </div>
    </section>
    <div className={`${Services2moduleCss.wrapperflex}`}>
      <div className={`${Services2moduleCss['container-services']}`} data-aos="fade-right">
          
   
      
        <div className={`${Services2moduleCss['container-text']}`}>

          <h1 className={`${Services2moduleCss.name}`}>
          <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='services2(2)'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Private Security"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
  
            </h1>
      <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p class="${Services2moduleCss.description}"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut 
                        officiis iste similique optio animi nostrum.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
     

          <button className={`${Services2moduleCss.btnb}`}>
          <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='services(2)7'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
          <i className="fas fa-long-arrow-alt-right"></i>
          
          </button>

        </div>
      </div>

      <div className={`${Services2moduleCss['container-services']}`} data-aos="zoom-in">
       
        <div className={`${Services2moduleCss['container-text']} ${['container-text-2']}`}>
          <h1 className={`${Services2moduleCss.name} ${Services2moduleCss.name-2}}`}>
            <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='services2(3)'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Guard House"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
         
            </h1>
<Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='services(2)4'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p class="${Services2moduleCss['description-2']}"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut */}
                        officiis iste similique optio animi nostrum.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />


          <button className={`${Services2moduleCss['btnb-2']}`}> 
          <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='services(2)5'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
          <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <div className={`${Services2moduleCss['container-services']}`} data-aos="fade-left">
        
        <div className={`${Services2moduleCss['container-text']}`}>
          <h1 className={`${Services2moduleCss.name}`}>
          <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='services2(3)'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="24/7 Surveillance"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
          
            </h1>
       

          <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p class="${Services2moduleCss.description}"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto natus facere quae provident aut */}
                        officiis iste similique optio animi nostrum.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
       
     

          <button className={`${Services2moduleCss.btnb}`}>
        
          <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='services(2)6'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="learn more"
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
          <i className="fas fa-long-arrow-alt-right"></i>
          
          
          </button>
        </div>
      </div>
    </div>
  </section>

       </>
    )
}
