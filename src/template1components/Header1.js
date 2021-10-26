import React, { useRef } from 'react'
import Header1Css from './Header1.module.css'
import bgcover from '../assets/template1images/bghero.png'
import { Editor } from '@tinymce/tinymce-react';
export const Header1 = () => {
  const editorRef = useRef(null);

  return (
    <>

      <header className={`${Header1Css.template1Header}`}>
        <nav>
          <div className={`${Header1Css.navbar}`}>

            <div className={`${Header1Css['logo']}`}><button >Security</button></div>
            <div className={`${Header1Css['nav-links']}`}>
              <div className={`${Header1Css['sidebar-logo']}`}>
                <i className={`${Header1Css['fas fa-times']}`}></i>
              </div>
              <ul className={`${Header1Css.menus}`}>
                <li><button className={`${Header1Css.line}`} >home</button></li>
                <li><button className={`${Header1Css.line}`} >about</button>
                  <ul className={`${Header1Css['sub-menu']}`}>
                    <li><button className={`${Header1Css.pnt}`} >Our Vision</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Experience</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Policies</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Prices</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Accreditations</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Team</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Our Partners</button></li>

                  </ul>

                </li>
                <li><a className={`${Header1Css.line}`} href={2}>services</a>
                  <ul className={`${Header1Css['sub-menu']}`}>
                    <li><button className={`${Header1Css.pnt}`} >Static Security</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Mobile Patrolling</button></li>
                    <li><button className={`${Header1Css.pnt}`} >CCTV Monitoring</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Lock & unlock</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Vacant Unit Checks</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Technology Product</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Manned Guarding</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Support & Management</button></li>
                    <li><button className={`${Header1Css.pnt}`} >Event Security</button></li>
                  </ul>
                </li>

                <li><button className={`${Header1Css.line}`} >contact us</button></li>


                <li><button className={`${Header1Css['contact-btn']}`} href={2}><span><i className="fas fa-phone-alt"></i></span> 020 7946 0020</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <section className={`${Header1Css.section}`}>
        <div className={`${Header1Css['section-details']}`}>
          <div className={`${Header1Css.left}`}>
            <span className={`${Header1Css['headline_content']}`}
            ><span

            ><b>Security</b> is not a product, it is a process.</span
              ></span
            >
            <div className={`${Header1Css['headline-para']}`}>
              <p>
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="To prevent tampering and unauthorized entry into the premises by
            our engineers developed a burglar alarm system in the house."
                  init={{
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                  }}
                />
              </p>
            </div>

            <a className={`${Header1Css.btna}`} href={2}>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='Header2'
                initialValue="DISCOVER MORE"
                init={{
                  forced_root_block: "",
                  menubar: false,
                  toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | fontselect',
                  fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                  font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
              />
            </a>
          </div>
          <span className={`${Header1Css.right}`}>
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='About5'
              initialValue={` <img src=${bgcover} alt="bg-cover" />`}
              init={{
                forced_root_block: "",
                menubar: false,
                plugins: [
                  "image"
                ],
                toolbar: 'image'
              }}
            />

          </span>
        </div>
      </section>


    </>
  );
}