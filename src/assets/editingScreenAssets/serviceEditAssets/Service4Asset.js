import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'

export default function Service4Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-400 tracking-widest font-medium title-font mb-1">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="service4asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Services"
                                init={{
                                    plugins: [
                                        "link"
                                    ],
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                        }}
                            />
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="service4asset2"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Our services are best in town and premium"
                                init={{
                                    plugins: [
                                        "link"
                                    ],
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                        }}
                            />
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">

                                    <h2 className="text-white text-lg title-font font-medium">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset3"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Static Security"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                       }}
                                        />
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset4"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Settle a guard house behind your facility and we'll monitor the activity around the house. Settle a guard house behind your facility and we'll monitor the activity around the house."
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                       }}
                                        />
                                    </p>
                                    <button className="mt-3 text-blue-400 inline-flex items-center">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset5"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Read More"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                      }}
                                        />
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">

                                    <h2 className="text-white text-lg title-font font-medium">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset6"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Mobile Patrolling"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                        }}
                                        />
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset7"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Settle a guard house behind your facility and we'll monitor the activity around the house. Settle a guard house behind your facility and we'll monitor the activity around the house."
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                       }}
                                        />
                                    </p>
                                    <button className="mt-3 text-blue-400 inline-flex items-center">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset8"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Read More"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                       }}
                                        />
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                                <div className="flex items-center mb-3">

                                    <h2 className="text-white text-lg title-font font-medium">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset9"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="CCTV Monitoring"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                      }}
                                        />
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset10"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="our strong men and professionals will do 24/7 security surveillance of your house with focus . our strong men and professionals will do 24/7 security surveillance of your house with focus ."
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                      }}
                                        />
                                    </p>
                                    <button className="mt-3 text-blue-400 inline-flex items-center">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="service4asset11"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Read More"
                                            init={{
                                                plugins: [
                                                    "link"
                                                ],
                                                forced_root_block: "",
                                                menubar: false,
                                                toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                    'alignright alignjustify | fontselect',
                                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                       }}
                                        />
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
