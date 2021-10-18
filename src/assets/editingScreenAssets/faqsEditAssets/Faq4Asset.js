import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function Faq4Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <div className="pt-16">
                <div className="container mx-auto pt-16 bg-blue-500 dark-indigo-700">
                    <div className="text-center pb-3 md:pb-10 xl:pb-20">
                        <p className="text--900 text-white text-base lg:text-lg uppercase leading-tight mb-4">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="faq4asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="start with the basics"
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
                        <h1 className="px-2 xl:px-0 xl:text-5xl md:text-3xl text-2xl font-extrabold text-white">
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="faq4asset2"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="Frequently Asked Questions"
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
                    </div>
                    <div className="w-10/12 mx-auto">
                        <ul>
                            <li className="py-6 border-gray-900 border-solid border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-white text-base md:text-xl xl:text-2xl w-10/12 font-semibold">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="faq4asset3"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="What does lorem ipsum actually mean?"
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
                                    <button data-menu className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full">
                                        <div aria-label="open">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-circle-plus " width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="12" y1="9" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div aria-label="close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <p className="pt-2 md:pt-3 lg:pt-5 text-gray-100 bg-blue-500 text-sm md:text-base xl:text-lg rounded-b-lg">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq4asset4"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised."
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
                            </li>
                            <li className="py-6 border-gray-900 border-solid border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-white text-base md:text-xl xl:text-2xl w-10/12 font-semibold">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="faq4asset5"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="How do we know what kind of sounds dinosaurs made?"
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
                                    <button data-menu className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full">
                                        <div aria-label="open">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="12" y1="9" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div aria-label="close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-circle-minus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="##ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-100 bg-blue-500 text-sm md:text-base xl:text-lg rounded-b-lg">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq4asset6"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised."
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
                            </li>
                            <li className="py-6 border-gray-900 border-solid border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-white text-base md:text-xl xl:text-2xl w-10/12 font-semibold">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="faq4asset7"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Why work from home is not as fun as we thought it would be?"
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
                                    <button data-menu className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full">
                                        <div aria-label="open">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="12" y1="9" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div aria-label="close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-circle-minus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <p className="pt-2 md:pt-3 lg:pt-5 text-gray-100 bg-blue-500 text-sm md:text-base xl:text-lg rounded-b-lg">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq4asset8"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised."
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
                            </li>
                            <li className="py-6 border-gray-900 border-solid border-b">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-white text-base md:text-xl xl:text-2xl w-10/12 font-semibold">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="faq4asset9"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="In what way did human beings started using words?"
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
                                    <button data-menu className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full">
                                        <div aria-label="open">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="12" y1="9" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div aria-label="close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-circle-minus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-100 bg-blue-500 text-sm md:text-base xl:text-lg rounded-b-lg">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq4asset10"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised."
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
                            </li>
                            <li className="py-6 ">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-white text-base md:text-xl xl:text-2xl w-10/12 font-semibold">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="faq4asset11"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Which is the least developed area in the world"
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
                                    <button data-menu className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full">
                                        <div aria-label="open">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                                <line x1="12" y1="9" x2="12" y2="15" />
                                            </svg>
                                        </div>
                                        <div aria-label="close">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="hidden icon icon-tabler icon-tabler-circle-minus" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <line x1="9" y1="12" x2="15" y2="12" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                <p className="hidden pt-2 md:pt-3 lg:pt-5 text-gray-100 bg-blue-500 text-sm md:text-base xl:text-lg rounded-b-lg">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="faq4asset12"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event. Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised."
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
