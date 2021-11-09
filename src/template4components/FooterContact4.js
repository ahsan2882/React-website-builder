import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import FooterContact4Css from './FooterContact4.module.css'

export default function FooterContact4({ displayDevice }) {
    const editorRef = useRef(null);
    return (
        <div className={displayDevice ? `${FooterContact4Css.contactFooterWrapper}` : `${FooterContact4Css.contactFooterWrapperM}`}>
            <div className={`${FooterContact4Css.container1} flex flex-col justify-around items-center`}>
                {/* <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`}
                    text="Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam."/> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer4ed1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={displayDevice ? `<p class="${FooterContact4Css.contactParaFooter}">Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam.</p>` : `<p class="${FooterContact4Css.contactParaFooterM}">Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam.</p>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                    }}
                />
                {/* <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`} text="021-34556899" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer4ed2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue={displayDevice ? `<p class="${FooterContact4Css.contactParaFooter}">021-34556899</p>` : `<p class="${FooterContact4Css.contactParaFooterM}">021-34556899</p>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                    }}
                />
                <div className={displayDevice ? `${FooterContact4Css.contactBottomLink}` : `${FooterContact4Css.contactBottomLinkM}`}>
                    <i className="fab fa-twitter p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-facebook p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-instagram p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-youtube p-4 bg-black text-white rounded-full"></i>
                </div>
            </div>
        </div>
    );
}
