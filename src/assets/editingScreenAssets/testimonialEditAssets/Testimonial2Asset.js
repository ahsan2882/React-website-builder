import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Image1 from './person.png'
export default function Testimonial2Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section class="text-gray-50 bg-UB-400 ">
                <div class="container p-3 ">
                    <h1 class="text-3xl font-medium title-font text-gray-50 mb-12 text-center ">
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="What our fantastic user say"
                            init={{
                                forced_root_block: "",
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
                    </h1>
                </div>

                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Image1} />
                    <p class="leading-relaxed py-50">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset2"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                             Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                            init={{
                                forced_root_block: "",
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

                    <h2 class="text-gray-50 font-medium title-font tracking-wider text-sm mt-5">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset3"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="Alex"
                            init={{
                                forced_root_block: "",
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
                      </h2>
                    <p class="text-gray-50">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset4"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue=" Designer"
                            init={{
                                forced_root_block: "",
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

            </section>
        </>
    )
}
