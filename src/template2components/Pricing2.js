import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';

import Pricing2Css from './Pricing2.module.css'
export const Pricing2 = ({ displayDevice, showPopup, overSection }) => {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef();
    return (
        <>
            <section style={{ background: currentBackground }}>
                <section style={{ background: currentBackground }}>
                    <section className={Pricing2Css['head-main']} id="our-prices" style={{ background: currentBackground }} >
                        <h1 className={`${Pricing2Css.MainHeading}`}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='About(2)48'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue={`<span class="${Pricing2Css.SpanColor}">Our </span> Pricing`}
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
                        </h1>     <div className={Pricing2Css['spanDesc']}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Prixing(2)1'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue={`<p>  Our Pricing are best in town and premium Lorem ipsum dolor sit amet.</p>`}
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

                        </div>

                    </section>
                    <section className={Pricing2Css['price-cards']} data-aos="fade" style={{ background: currentBackground }}>

                        <div className={Pricing2Css['container']}>

                            <div className={displayDevice ? Pricing2Css['row'] : `${Pricing2Css.rowM} text-center`}>
                                <div className={displayDevice ? Pricing2Css['card'] : `${Pricing2Css['cardM']}`}>
                                    <div className={Pricing2Css['card-header']}>
                                        <h1 className={Pricing2Css['card-main']}>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prixing(2)2'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="Starter"
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
                                        <h3 className={Pricing2Css.cardchild}>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Pricing(2)55'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="For small business"
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
                                        </h3>
                                    </div>
                                    <div className={Pricing2Css['card-body']}>
                                        <div className="price1">
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Pricing(2)09'
                                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                                initialValue={`<span  class="${Pricing2Css['nb1']} text-5xl text-red-700 font-bold">$29</span> <span class="font-light text-red-500 text-4xl">/yr</span>`}
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
                                        </div>
                                        <ul className={Pricing2Css['price-ser']}>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)23'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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

                                            </li>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)24'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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
                                            </li>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)24'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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


                                            </li>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)24'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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
                                            </li>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)23'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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
                                            </li>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)23'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Physical Protections"
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
                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)23'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="01 Security With Dogs"
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


                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)23'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Change on Complain"
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
                                            </li>
                                        </ul>
                                        <button className={Pricing2Css['btnb-3']}>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prizing(2)3'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="Get quote"
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
                                            <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={Pricing2Css['card mid']}>
                                    <div className={Pricing2Css['card-header']}>
                                        <h1 className={Pricing2Css['card-main']}>

                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prizing(2)7'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="INTERMEDIATE"
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
                                    <h3 style={{ color: `#c0272d`, paddingTop: `15%`, textTransform: `uppercase` }}>
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='Pricing(2)56'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="For INTERMEDIATE business"
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
                                    </h3>
                                    <div className={Pricing2Css['card-body']}>
                                        <div className="price1">
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Price(2)44'
                                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                                initialValue={`<span  class="${Pricing2Css['nb1']} text-5xl text-red-700 font-bold">$29</span> <span class="font-light text-red-500 text-4xl">/yr</span>`}
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
                                        </div>
                                        <ul className={Pricing2Css['price-ser']}>
                                            <li>

                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)8'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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




                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)9'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="02 Security Guard"
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






                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)10'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Physical Protections"
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



                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)11'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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





                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)12'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="02 Security Guard"
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


                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)12'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Physical Protections"
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


                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)13'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="01 Security With Dogs"
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

                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)14'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Change on Complain"
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



                                            </li>
                                        </ul>
                                        <button className={Pricing2Css['btnb-2']}>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prizing(2)5'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="Get quote"
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
                                            <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className={displayDevice ? Pricing2Css['card'] : `${Pricing2Css['cardM']}`}>
                                    <div className={Pricing2Css['card-header']}>
                                        <h1 className={Pricing2Css['card-main']}>

                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prizing(2)8'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="Professional"
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

                                        <h3 className={Pricing2Css.cardchild}>
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Pricing(2)59'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="For Scale large bussiness"
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
                                        </h3>
                                    </div>
                                    <div className={Pricing2Css['card-body']}>
                                        <div className="price1">
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='(pricing(2)33'
                                                tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                                initialValue={`<span  class="${Pricing2Css['nb1']} text-5xl text-red-700 font-bold">$29</span> <span class="font-light text-red-500 text-4xl">/yr</span>`}
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
                                        </div>

                                        <ul className={Pricing2Css['price-ser']}>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)14'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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
                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)15'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="02 Security Guard"
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





                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)16'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Physical Protections"
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



                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)17'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="10 CCTV Cameras"
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



                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)18'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="02 Security Guard"
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


                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)19'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue=">No Physical Protections"
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




                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)20'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="01 Security With Dogs"
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




                                            </li>
                                            <li>
                                                <Editor
                                                    onInit={(evt, editor) => editorRef.current = editor}
                                                    inline={true}
                                                    key='Prizing(2)21'
                                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                    initialValue="No Change on Complain"
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



                                            </li>
                                        </ul>
                                        <button className={Pricing2Css['btnb-3']} >
                                            <Editor
                                                onInit={(evt, editor) => editorRef.current = editor}
                                                inline={true}
                                                key='Prizing(2)4'
                                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                                initialValue="Get quote"
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
                                            <i style={{ margin: `0.35rem` }} className="fas fa-long-arrow-alt-right"></i>
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
        </>
    )
}
