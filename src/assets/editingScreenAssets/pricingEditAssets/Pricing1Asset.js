
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function Pricing1Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section className="text-gray-600 body-font">
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
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset3"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Plan"
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
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">

                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset4"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Speed"
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
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        <Editor
                                            onInit={(evt, editor) => (editorRef.current = editor)}
                                            inline={true}
                                            key="pricing1asset5"
                                            tinymceScriptSrc={
                                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                            }
                                            initialValue="Storage"
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
                                    </th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                                        <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset6"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Price"
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
                                    </th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset7"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Price"
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



                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset8"
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
                                    </td>
                                    <td className="px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset9"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="5 Mb/s"
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
                                    </td>
                                    <td className="px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset10"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="15GB"
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
                                    </td>
                                    <td className="px-4 py-3 text-lg text-gray-900">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset11"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="$56/yr"
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

                                    </td>
                                    <td className="w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset12"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="PROFESSIONAL"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset13"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="25 Mb/s"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset14"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="25 GB"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset15"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="$59/yr"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset16"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="ADVANCED"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset17"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue=" 36 Mb/s"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset18"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="40 GB"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset19"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="$60/yr"
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
                                    </td>
                                    <td className="border-t-2 border-gray-200 w-10 text-center">
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset20"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="SPECIAL"
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
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset21"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="48 Mb/s"
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
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset22"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="120 GB"
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
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900"> 
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset23"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="$72/yr"
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
                                    </td>
                                    <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                        
                                        <input name="plan" type="radio" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">

                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                        <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="pricing1asset24"
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue="Buy Now"
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
                        
                            </button>
                    </div>
                </div>
            </section>
        </>
    )
}
