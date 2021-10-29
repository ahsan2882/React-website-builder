import React, { useRef} from 'react'
import Guard1Css from './Guard1.module.css'
import ourteam from '../assets/template1images/ourteam.png'
import ourteam2 from '../assets/template1images/ourteam2.png'
import ourteam3 from '../assets/template1images/ourteam3.png'
import { Editor } from '@tinymce/tinymce-react';
export const Guard1 = () => {
  const editorRef = useRef(null);
  return (
    <>
      <div id="ourteam" className={`${Guard1Css['cards-contain']}`}>
        <h1 className={`${Guard1Css.headings}`}>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Guard1'
            initialValue=" Our Guards"
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
        <div className={`${Guard1Css.subhead}`}>
        
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='Guard2'
              initialValue="<p>Team That you can Rely on</p>"
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
        <div className={`${Guard1Css.wrapper2}`}>
          <div className={`${Guard1Css.blog2}`}>
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam} alt="Temp1Img2" />

              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard3'
                    initialValue=" Bianca B.Rooney"
                    init={{
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />
                </h4>
                
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard4'
                    initialValue="<p>Head Of Security Team</p>"
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
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam2} alt="Temp1Img3" />

              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard5'
                    initialValue="ADALBERTO"
                    init={{
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />
                </h4>
               
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard6'
                    initialValue=" <p>Senior Guard</p>"
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
            <div className={`${Guard1Css['single-blog']}`}>
              <div className={`${Guard1Css['blog-img']}`}>
                <img src={ourteam3} alt="Temp1Img4" />

              </div>

              <div className={`${Guard1Css['blog-content']}`}>
                <h4>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard7'
                    initialValue="AMBROSE"
                    init={{
                      forced_root_block: "",
                      menubar: false,
                      toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                      fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                    }}
                  />
                  </h4>
                  <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Guard7'
                    initialValue="<p>Private Investigator</p>"
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
          </div>
        </div>
      </div>


    </>
  );
}