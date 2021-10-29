import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

import Pricing2Css from './Pricing2.module.css'
export const Pricing2 = () => {
  const editorRef = useRef();
  return (
    <>
      <section className={Pricing2Css['head-main']}>
      <h1 class={`${Pricing2Css.MainHeading}`}> 
<Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='About(2)48'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue={`<span class="${Pricing2Css.SpanColor}">Our </span> Services`}
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />   
                        </h1>     <div className={Pricing2Css['spanDesc']}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Prixing(2)1'
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

      </section>
      <section className={Pricing2Css['price-cards']} data-aos="fade">

        <div className={Pricing2Css['container']}>

          <div className={Pricing2Css['row']}>
            <div className={Pricing2Css['card']}>
              <div className={Pricing2Css['card-header']}>
                <h1 className={Pricing2Css['card-main']}>

                  <h1>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Prixing(2)2'
                      tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                      initialValue="Starter"
                      init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                      }}
                    />
                  </h1>




                </h1>
                <div className={Pricing2Css['card-child']}>For small business</div>
              </div>
              <div className={Pricing2Css['card-body']}>
                <p className={Pricing2Css['price1']}>

                  <span className={Pricing2Css['nb1']}>$29</span>
                  <small className={Pricing2Css['year1']}>/yr</small>
                </p>
                <ul className={Pricing2Css['price-ser']}>
                  <li>
 
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)23'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />

                  </li>
                  <li>
                  
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)24'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                  <li>

                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)24'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />


                  </li>
                  <li>
                    
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)24'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                  <li>
                    
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)23'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                  <li>
                    
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)23'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Physical Protections"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)23'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="01 Security With Dogs"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />

                    
                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)23'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Change on Complain"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                </ul>
                <button className={Pricing2Css['btnb-3']}>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Prizing(2)3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="Get quote"
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
            <div className={Pricing2Css['card mid']}>
              <div className={Pricing2Css['card-header']}>
                <h1 className={Pricing2Css['card-main']}>
                
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)7'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="INTERMEDIATE"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    </h1>
                <div className={Pricing2Css['card-child']}>For INTERMEDIATE business</div>
              </div>
              <div className={Pricing2Css['card-body']}>
                <p className={Pricing2Css['price1']}>
                  <span className={Pricing2Css['nb1']}>$29</span>
                  <small className={Pricing2Css['year1']}>/yr</small>
                </p>
                <ul className={Pricing2Css['price-ser']}>
                  <li>
                
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)8'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  
                    
                    
                    
                    </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)9'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="02 Security Guard"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />






                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)10'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Physical Protections"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)11'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />




                    
                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)12'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="02 Security Guard"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />


                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)12'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Physical Protections"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />


                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)13'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="01 Security With Dogs"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />

                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)14'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Change on Complain"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                  </li>
                </ul>
                <button className={Pricing2Css['btnb-2']}>
                <Editor
          onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Prizing(2)5'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Get quote"
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
            <div className={Pricing2Css['card']}>
              <div className={Pricing2Css['card-header']}>
                <h1 className={Pricing2Css['card-main']}>
                  
                <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)8'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Professional"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                
                
                
                
                </h1>
                <div className={Pricing2Css['card-child']}>For Large scale business</div>
              </div>
              <div className={Pricing2Css['card-body']}>
                <p className={Pricing2Css['price1']}>
                  <span className={Pricing2Css['nb1']}>$29</span>
                  <small className={Pricing2Css['year1']}>/yr</small>
                </p>
                <ul className={Pricing2Css['price-ser']}>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)14'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)15'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="02 Security Guard"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />





                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)16'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Physical Protections"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)17'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="10 CCTV Cameras"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)18'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="02 Security Guard"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />


                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)19'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue=">No Physical Protections"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />




                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)20'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="01 Security With Dogs"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />




                  </li>
                  <li>
                  <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Prizing(2)21'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="No Change on Complain"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                  </li>
                </ul>
                <button className={Pricing2Css['btnb-3']} >
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Prizing(2)4'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="Get quote"
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
        </div>
      </section>
    </>
  )
}
