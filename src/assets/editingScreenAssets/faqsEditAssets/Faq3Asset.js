import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function Faq3Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <div className="dark bg-indigo-900 py-20 px-4">
                <div className="mx-auto max-w-6xl flex flex-col md:flex-row ">
                    <h2 className="mr-8 w-full md:w-1/3  text-3xl font-extrabold leading-9 text-white">
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="faq3asset1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="Frequently-asked questions"
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
                    <dl className="w-full md:w-2/3">
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold text-white">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset2"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="We already have ongoing projects. Will Valohai easily integrate with them?"
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
                            </h3>
                        </dt>
                        <dd className="mb-16">
                            <p className="text-gray-300">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset3"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="Running existing machine learning projects in Valohai is very simple! Integration only requires adding a valohai.yaml configuration file. Moving projects in and out of Valohai is easy – the integration is only the configuration file."
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
                        </dd>
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold text-white">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset4"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="How do you compare to other data science platforms?"
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
                            </h3>
                        </dt>
                        <dd className="mb-16">
                            <p className="text-gray-300">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset5"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="We don’t. Valohai isn’t a data science platform; it&#x27;s a Machine Learning Management Platform that handles the whole ML pipeline from feature extraction, to training of your model and to deploying it into production in a reproducible manner. Data science platforms offer hosted notebooks and AutoML solutions."
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
                        </dd>
                        <dt className="mb-4">
                            <h3 className="text-xl font-semibold text-white">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset6"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="Does Valohai charge for computation?"
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
                            </h3>
                        </dt>
                        <dd className="mb-16">
                            <p className="text-gray-300">
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="faq3asset7"
                                    tinymceScriptSrc={
                                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                    }
                                    initialValue="Depends. Most of our customers use their own cloud and thus pay for usage according to their own agreements. Valohai doesn&#x27;t charge anything on top of the per-user license fee. If you don&#x27;t have a cloud provider, you can use our AWS, GCP and Azure accounts, and we&#x27;ll only charge you for what you use."
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
                        </dd>
                    </dl>
                </div>
            </div>
        </>
    )
}
