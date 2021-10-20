import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Contact3AssetCss from './Contact3Asset.module.css'
export default function Contact3Asset() {
    const editorRef = useRef(null);
    return (
        <>


            <div className={Contact3AssetCss['contact-sec']}>
                <div className={Contact3AssetCss['container-main']}>
                    <div className={Contact3AssetCss['form-wrap']}>
                        <div className={Contact3AssetCss['contact-info']}>
                            <div className={Contact3AssetCss['c-info']}>
                                <div className={Contact3AssetCss['icon-head']}>
                                    <lord-icon src="https://cdn.lordicon.com/xtkehzkm.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "70px", "height": "70px" }}></lord-icon>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact1asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="<h1> Address </h1>"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />

                                </div>
                                <div className={Contact3AssetCss['separator-one']}></div>
                                <p className={Contact3AssetCss.paragraph}> <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="Contact2asset3"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="London Office"
                                    init={{
                                        menubar: false,
                                        toolbar:
                                            "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                            "alignright alignjustify | fontselect",
                                        fontsize_formats:
                                            "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats:
                                            "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                    }}
                                />

                                    <br />
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact3asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue=" 418-426 Lewisham High Street, SE13 6LJ"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />

                                </p>
                                <p className={Contact3AssetCss.paragraph}>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact4asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Birmingham Office"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />
                                    <br />
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact4asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="3 Brindley Place, B1 2JB"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />
                                </p>
                                <p className={Contact3AssetCss.paragraph}>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact5asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue=" 3 Brindley Place, B1 2JBManchester Office"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />

                                    <br />
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact6asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Chancery Place, 50 Brown Street, M2 2JG"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />

                                </p>


                            </div>
                            <div className={Contact3AssetCss['c-info']}>
                                <div className={Contact3AssetCss['icon-head']}>
                                    <lord-icon src="https://cdn.lordicon.com/ltxkhbfa.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "70px", "height": "70px" }}>
                                    </lord-icon>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact6asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="<h1> Phone </h1>"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />


                                </div>
                                <div className={Contact3AssetCss['separator-one']}></div>
                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact7asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="London: 020 8690 1903"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />  
                                    </p>


                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact8asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Birmingham: 0121 824 1075"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />    
                                    </p>

                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact9asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Birmingham: 0121 824 1076"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />    
                                </p>

                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact10asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Manchester: 0161 511 3397"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />    
                                </p>
                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact11asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Manchester: 0161 511 3398"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />    
                                </p>

                              
                            </div>
                            <div className={Contact3AssetCss['c-info']}>
                                <div className={Contact3AssetCss['icon-head']}>
                                    <lord-icon src="https://cdn.lordicon.com/jshbewmb.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "70px", "height": "70px" }}>
                                    </lord-icon>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact12asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="<h1> Email </h1>"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />    
                                    
                                </div>
                                <div className={Contact3AssetCss['separator-one']}></div>
                                <p className={Contact3AssetCss.paragraph}>
                                <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact13asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="info@critrixconsultancy.com"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    /> 
                                     </p>



                            </div>
                        </div>
                        <div className={Contact3AssetCss['contact-form']}>
                            <section className={Contact3AssetCss['heading-sec']}>

                                <div className={Contact3AssetCss['heading2-main-title']}>
                                    <div className={Contact3AssetCss['sub-title2']}>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact14asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="<h3>Best In Town</h3>"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />
                                      
                                    </div>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="Contact14asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="<h1>CONTACT</h1>"
                                        init={{
                                            menubar: false,
                                            toolbar:
                                                "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                                "alignright alignjustify | fontselect",
                                            fontsize_formats:
                                                "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats:
                                                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                        }}
                                    />
                                  
                                </div>
                            </section>

                            <div className={Contact3AssetCss['form-c']}>
                                <form action="index.html">
                                    <div className={Contact3AssetCss['flex']}>
                                        <input className={Contact3AssetCss['input-f']} type="text" placeholder="Full Name" />
                                        <input className={Contact3AssetCss['input-f']} type="text" placeholder="Company Name" />
                                    </div>
                                    <div className={Contact3AssetCss['flex']}>
                                        <input className={Contact3AssetCss['input-f']} type="text" placeholder="Email" />
                                        <input className={Contact3AssetCss['input-f']} type="text" placeholder="Number" />
                                    </div>

                                    <div className={Contact3AssetCss['flex']}>
                                        <textarea className={Contact3AssetCss['input-f']} type="text" placeholder="Message" ></textarea>
                                    </div>
                                    <div className={`${Contact3AssetCss['buttons']} ${Contact3AssetCss['pad']}`}>
                                        <a href="#" className={Contact3AssetCss['button-sqr']}>Send</a>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
