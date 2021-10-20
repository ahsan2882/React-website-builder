import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function Pricing1Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="pricing1asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Our Pricing"
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
                        
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="pricing1asset2"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Our prices can let you secure your business or life with no large expenses."
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
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset3"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="STARTER"
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
                                </h2>
                                
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset4"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="$56"
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
                                    <span className="text-lg ml-1 font-normal text-gray-500">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset5"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="/yr"
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
                                </h1>

                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset6"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="02 CCTV Cameras"
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
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 01 Security Guard */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset7"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="01 Security Guard"
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
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* No Physical Protections */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset8"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="No Physical Protections"
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
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* No Security With Dogs */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset9"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="No Security With Dogs"
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

                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    {/* Sign up */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset10"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Sign up"
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
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="6"
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 28 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                {/* <p className="text-xs text-gray-500 mt-3">FOR SMALL BUSINESS</p> */}
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="pricing1asset11"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="<p>FOR SMALL BUSINESS</p>"
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
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                                    {/* POPULAR */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset12"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="POPULAR"
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
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    {/* Professional*/}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset13"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Professional"
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
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>
                                        {/* $59 */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset14"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="$59"
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
                                    <span className="text-lg ml-1 font-normal text-gray-500">
                                        {/* /yr */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset15"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="/yr"
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
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 20 CCTV Cameras */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset16"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="20 CCTV Cameras"
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
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 08 Security Guard */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset17"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="08 Security Guard"
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
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* Yes Physical Protections */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset18"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Yes Physical Protections"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 04 Security With Dogs */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset19"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="04 Security With Dogs"
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
                                </p>

                                <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                                    {/* Sign up */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset20"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Sign up"
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
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    {/* For Small Bussiness */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset21"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="For Small Bussiness"
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
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    {/* ADVANCED */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset22"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="ADVANCED"
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
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>
                                        {/* $60 */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset23"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="$60"
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
                                    </span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">
                                        {/* /yr */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset24"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="/yr"
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
                                    </span>
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 30 CCTV Cameras */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset25"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="30 CCTV Cameras"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 15 Security Guard */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset26"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="15 Security Guards"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* Yes Physical Protections */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset27"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Yes Physical Protections"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 20 Security With Dogs */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset28"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="20 Security With Dogs"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* Yes Change on Complain */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset29"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Yes Change on complain"
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
                                </p>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    {/* Sign up */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset30"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Sign up"
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
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    {/* For Small Bussiness */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset31"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="For small business"
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
                                </p>
                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                                    {/* SPECIAL */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset32"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Special"
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
                                </h2>
                                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>
                                        {/* $72 */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset33"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="$72"
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
                                    </span>
                                    <span className="text-lg ml-1 font-normal text-gray-500">
                                        {/* /mo */}
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset34"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="/mo"
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
                                    </span>
                                </h1>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 35 CCTV Cameras */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset35"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="35 CCTV Cameras"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 25 Security Guard */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset36"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="25 Security Guard"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* Yes Physical Protections */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset37"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Yes Physical Protections"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* 30 Security With Dogs */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset38"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="30 Security With Dogs"
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
                                </p>
                                <p className="flex items-center text-gray-600 mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2.5"
                                            className="w-3 h-3"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                    {/* Yes Change on Complain */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset39"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Yes Change on Complain"
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
                                </p>
                                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                    {/* Sign up */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset40"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Sign up"
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
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    {/* For Small Bussiness */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset41"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="For Small Bussiness"
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
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
