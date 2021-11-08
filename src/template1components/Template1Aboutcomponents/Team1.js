import React, { useRef, useState} from 'react'
import Team1moduleCss from './Team1.module.css'
import ourteam from './ourteam.jpg'
import ourteam2 from './ourteam2.jpg'
import ourteam3 from './ourteam3.jpg'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';
export default function Team1({ showPopup, overSection }) {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [currentBackground1, setCurrentBackground1] = useState("white");
    const [currentBackground2, setCurrentBackground2] = useState("white");
    const [currentBackground3, setCurrentBackground3] = useState("white");
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
<>

<div style={{ background: currentBackground }} id="ourteam" className={`${Team1moduleCss['cards-contain']}`}>
        <h1 className={`${Team1moduleCss.headings}`}>
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
        <div className={`${Team1moduleCss.subhead}`}>
        
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
        <div style={{ background: currentBackground }} className={`${Team1moduleCss.wrapper2}`}>
          <div className={`${Team1moduleCss.blog2}`}>
            <div style={{ background: currentBackground1}} className={`${Team1moduleCss['single-blog']}`} onClick={() => setShowPopup1(state => !state)}>
              <div className={`${Team1moduleCss['blog-img']}`}>
                <img src={ourteam} alt="Temp1Img2" />

              </div>

              <div className={`${Team1moduleCss['blog-content']}`}>
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
            <div style={(showPopup1) ?   { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground1(color.hex);
                    }}
                />
            </div>
            <div  style={{ background: currentBackground2}} className={`${Team1moduleCss['single-blog']}`} onClick={() => setShowPopup2(state => !state)}>
              <div className={`${Team1moduleCss['blog-img']}`}>
                <img src={ourteam2} alt="Temp1Img3" />

              </div>

              <div className={`${Team1moduleCss['blog-content']}`}>
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
            <div style={(showPopup2)   ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground2(color.hex);
                    }}
                />
            </div>
            <div style={{ background: currentBackground3}} className={`${Team1moduleCss['single-blog']}`} onClick={() => setShowPopup3(state => !state)}>
              <div className={`${Team1moduleCss['blog-img']}`}>
                <img src={ourteam3} alt="Temp1Img4" />

              </div>

              <div className={`${Team1moduleCss['blog-content']}`}>
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
            <div style={(showPopup3) ?  { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground3(color.hex);
                    }}
                />
            </div>
          </div>
        </div>
      </div>
      <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
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
