import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'
import Testimonial1AssetCss from './Testimonial1Asset.module.css'
import Image1 from './person.jpg'

export default function Testimonial1Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className={`container px-5 py-24 mx-auto ${Testimonial1AssetCss.mainHead}`}>
                    {/* <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1> */}
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        inline={true}
                        key="testimonial1asset1"
                        tinymceScriptSrc={
                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                        }
                        initialValue="<h1>Testimonials</h1>"
                        init={{
                            forced_root_block:"",
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
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className={`h-full text-center ${Testimonial1AssetCss.clientRemark}`}>
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                {/* <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset2"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<p> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p>"
                                    init={{
                                        forced_root_block:"",
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
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                {/* <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset3"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<h2>Jean Miguel</h2>"
                                    init={{
                                        forced_root_block:"",
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
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className={`h-full text-center ${Testimonial1AssetCss.clientRemark}`}>
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                {/* <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset4"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<p> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p>"
                                    init={{
                                        forced_root_block:"",
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
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                {/* <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset5"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<h2>Jean Miguel</h2>"
                                    init={{
                                        forced_root_block:"",
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
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className={`h-full text-center ${Testimonial1AssetCss.clientRemark}`}>
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                {/* <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset6"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<p> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.</p>"
                                    init={{
                                        forced_root_block:"",
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
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                {/* <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="testimonial1asset7"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<h2>Jean Miguel</h2>"
                                    init={{
                                        forced_root_block:"",
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
