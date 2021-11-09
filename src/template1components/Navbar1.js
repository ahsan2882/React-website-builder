import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Navbar1.module.css'
export default function Navbar1({ displayDevice, linksfunc }) {
  const editorRef = useRef(null);
  return (
    <>

      <header className={`${Navbar1moduleCss.template1Header}`}>
        <nav>
          <div className={`${Navbar1moduleCss.navbar}`}>

            <div className={`${Navbar1moduleCss.logo}`}>
              <button style={{ fontWeight: `600` }} >
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="Security"
                  init={{
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />
              </button></div>
            <div className={`${Navbar1moduleCss['nav-links']}`}>
              <div className={`${Navbar1moduleCss['sidebar-logo']}`}>
                <i className={`${Navbar1moduleCss['fas fa-times']}`}></i>
              </div>
              <ul className={`${Navbar1moduleCss.menus}`}>
                <li><button className={`${Navbar1moduleCss.line}`} >Home</button></li>
                <li><button className={`${Navbar1moduleCss.line}`} >About</button>
                  <ul className={`${Navbar1moduleCss['sub-menu']}`}>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Vision</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Experience</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Policies</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Prices</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Accreditations</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Team</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Our Partners</button></li>

                  </ul>

                </li>
                <li><button className={`${Navbar1moduleCss.line}`}>Services</button>
                  <ul className={`${Navbar1moduleCss['sub-menu']}`}>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Static Security</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Mobile Patrolling</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >CCTV Monitoring</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Lock & unlock</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Vacant Unit Checks</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Technology Product</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Manned Guarding</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Support & Management</button></li>
                    <li><button className={`${Navbar1moduleCss.pnt}`} >Event Security</button></li>
                  </ul>
                </li>

                <li><button className={`${Navbar1moduleCss.line}`} >Contact us</button></li>


                <li>



                  <button className={`${Navbar1moduleCss['contact-btn']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Header1'
                      initialValue={`<span> <i class="fas fa-phone-alt"> </i> 020 7946 0020 </span>`}
                      init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />
                  </button>

                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
