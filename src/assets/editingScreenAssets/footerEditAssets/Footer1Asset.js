import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import logo from '../footerEditAssets/logo.png'

export default function Footer1Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <footer className="text-gray-400 bg-blue-500 body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <button className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                            <img src={logo} alt="Header logo"/>


                        </button>
                        <p className="mt-2 text-sm text-gray-900">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="footer1asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="For your personal safety"
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
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-green-200 tracking-widest text-sm mb-3">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="footer1asset2"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="SERVICES"
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
                            <nav className="list-none mb-10">
                                <li>
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset3"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Mobile Petrolling"
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
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset4"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Static Security"
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
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset5"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="CCTV Monitoring"
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
                                    </button>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-green-200 tracking-widest text-sm mb-3">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="footer1asset6"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="INFORMATION"
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
                            <nav className="list-none mb-10">
                                <li>
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset7"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="About"
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
                                    </button>
                                </li>
                                <li>
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset8"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Services"
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
                                    </button>
                                </li>
                                <li>
                                    {/* <button className="text-white hover:text-gray-200">Sectors</button> */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset9"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Sectors"
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
                                    </button>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            {/* <h2 className="title-font font-medium text-green-200 tracking-widest text-sm mb-3"></h2> */}
                            <h2 className="title-font font-medium text-green-200 tracking-widest text-sm mb-3">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="footer1asset10"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="LATEST NEWS"
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
                            <nav className="list-none mb-10">
                                <li>
                                    {/* <button className="text-white hover:text-gray-200">CCTV Installation Tricks.</button> */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset11"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="CCTV Installation Tricks."
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
                                    </button>
                                </li>
                                <li>
                                    {/* How To Monitor Your Facility. */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset12"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="How To Monitor Your Facility."
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
                                    </button>
                                </li>
                                <li>
                                    {/* Outdoor Security Process. */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset13"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Outdoor Security Process."
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
                                    </button>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            {/* OUR PROGRAMS */}
                            <h2 className="title-font font-medium text-green-200 tracking-widest text-sm mb-3">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="footer1asset14"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="OUR PROGRAMS"
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
                            <nav className="list-none mb-10">
                                <li>
                                    {/* Cultural Awareness Show */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset15"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Cultural Awareness Show"
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
                                    </button>
                                </li>
                                <li>
                                    {/* Military Virtual Training */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset16"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Military Virtual Training"
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
                                    </button>
                                </li>
                                <li>
                                    {/* Insider Threat Resilience */}
                                    <button className="text-white hover:text-gray-200">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="footer1asset17"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Insider Threat Resilience"
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
                                    </button>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-blue-900 bg-opacity-75">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            {/* © 2021 Security Guard — */}
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="footer1asset18"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="© 2021 Security Guard —"
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
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <button className="text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </button>
                            <button className="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </button>
                            <button className="ml-3 text-gray-400">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </button>
                            <button className="ml-3 text-gray-400">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
