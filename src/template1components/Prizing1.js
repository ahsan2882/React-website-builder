import React, { useRef, useState } from 'react'
import React from 'react'
import Prizing1Css from './Prizing1.module.css'
export const Prizing1 = () => {
  const editorRef = useRef(null);
    return (
       <>
         <h1 className={`${Prizing1Css.headings}`}>
         <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Pricing1'
            initialValue="Our Pricing Table"
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
      <div className={`${Prizing1Css.subhead}`}>
        <p>
        <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Pricing2'
            initialValue="Our prices can let you secure your business or life with no large
            expenses."
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
      <div className={`${Prizing1Css['container-1']}`}>
        <div className={`${Prizing1Css.box1}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title1}`}>
            <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Pricing3'
            initialValue=" Starter"
            init={{
              forced_root_block: "",
              menubar: false,
              toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
            }}
          />
          </h2>
            <p className={`${Prizing1Css.subtitle1}`}>
            <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            inline={true}
            key='Pricing4 '
            initialValue=" For small business"
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
          </header>
          <p className={`${Prizing1Css.price1}`}>
            <span className={`${Prizing1Css.nb1}`}>$29</span>
            <small className={`${Prizing1Css.year1}`}>/yr</small>
          </p>

          <ul>
            <li>02 CCTV Cameras</li>
            <li>01 Security Guard</li>
            <li>No Physical Protections</li>
            <li>No Security With Dogs</li>
            <li>No Change on Complain</li>
          </ul>
          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
        <div className={`${Prizing1Css.box2}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title2}`}>Professional</h2>
            <p className={`${Prizing1Css.subtitle2}`}>For small business</p>
          </header>
          <p className={`${Prizing1Css.price2}`}>
            <span className={`${Prizing1Css.nb2}`}>$59</span>
            <small className={`${Prizing1Css.year2}`}>/yr</small>
          </p>

          <ul className={`${Prizing1Css['price-text']}`}>
            <li>20 CCTV Cameras</li>
            <li>08 Security Guard</li>
            <li>Yes Physical Protections</li>
            <li>04 Security With Dogs</li>
            <li>Yes Change on Complain</li>
          </ul>

          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna2}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
        <div className={`${Prizing1Css.box1}`}>
          <header className={`${Prizing1Css['heading-price']}`}>
            <h2 className={`${Prizing1Css.title1}`}>Advance</h2>
            <p className={`${Prizing1Css.subtitle1}`}>For small business</p>
          </header>
          <p className={`${Prizing1Css.price1}`}>
            <span className={`${Prizing1Css.nb1}`}>$29</span>
            <small className={`${Prizing1Css.year1}`}>/yr</small>
          </p>

          <ul>
            <li>10 CCTV Cameras</li>
            <li>02 Security Guard</li>
            <li>No Physical Protections</li>
            <li>01 Security With Dogs</li>
            <li>No Change on Complain</li>
          </ul>

          <div className={`${Prizing1Css['btn-center']}`}>
            <a className={`${Prizing1Css.btna}`} href={2}
              >Sign Up <i className={`${Prizing1Css['fas fa-long-arrow-alt-right']}`}></i
            ></a>
          </div>
        </div>
      </div>
       </>
    )
}
