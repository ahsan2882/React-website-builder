import { Editor } from '@tinymce/tinymce-react'
import React, {useRef} from 'react'

export default function Faq1Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="text-grey-700  ">
                <div className="container px-6 py-24  mx-auto bg-teal-500 bg-black mt-9 ">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-50 mb-4">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="faq1asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Frequently Asked Question"
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
                        </h1>
                        <p className="text-base text-gray-50 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="faq1asset2"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="The most common questions about how our business works and what
                            can do for you."
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
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="How Long is this site live?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset4"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset5"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue=" Can I install/upload anything I want on there?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset6"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset7"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="How can I migrate to another site?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset8"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 py-2">
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset9"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Can I change the domain you give me?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset10"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset11"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="How many sites I can create at once?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset12"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                            <details className="mb-4">
                                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset13"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="How can I communicate with you?"
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
                                </summary>

                                <span className="text-gray-50">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq1asset14"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Laboris qui labore cillum culpa in sunt quis sint veniam.
                                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                                    minim velit nostrud pariatur culpa magna in aute."
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
                                </span>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
