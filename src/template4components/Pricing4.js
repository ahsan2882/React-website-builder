import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Pricing4Css from './Pricing4.module.css'

export default function Pricing4({ showPopup, overSection, displayDevice }) {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
        <>
            <div className="py-20 px-0 w-full relative" style={{ background: currentBackground }}>
                <div>
                    <div className=
                        "flex flex-col items-center py-10 px-0"
                    >
                        {/* <TextH2 className={`text-2xl ${Pricing4Css.pricingPlanHead}`} text="Reasonable Pricing Plans" /> */}
                        <h2 style={{ color: `black`, fontSize: `24px`, margin: `0 auto`, fontWeight: `400`, fontFamily: `sans-serif` }}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='price4ed1'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Reasonable Pricing Plans"
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
                        {/* <TextH1 className={`text-5xl text-center ${Pricing4Css.pricingPlanSubhead}`} text="Our Pricing" /> */}
                        <h1 style={{ color: `rgb(26, 195, 224)`, fontSize: `48px`, margin: `0 auto`, fontWeight: `600` }}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='price4ed2'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Our Pricing"
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

                    <div className={displayDevice ? `${Pricing4Css.container1} ${Pricing4Css.cardsWrapper}` : `${Pricing4Css.cardsWrapperM} ${Pricing4Css.container1}`}>
                        <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                            {/* <TextH1 className={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Personal security" /> */}
                            <h1 style={{ fontSize: `25px`, color: `rgb(26, 195, 224)`, fontWeight: `bold` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed3'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Personal Security"
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
                            {/* <TextH2 className="flex justify-center items-center text-5xl text-black text-center" text="Start" /> */}
                            <h2 style={{ fontSize: `48px`, color: `black` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed4'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Start"
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
                            <div>
                                <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>

                                        {/* <p className="Pricing4Css"> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed5'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="CCTV Service"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>

                                        {/* <i className="fas fa-times"></i> Alarm signaling */}
                                        {/* <IconText classNameStyle="fas fa-times" text=" Alarm signaling" /> */}
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed6'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <i className="fas fa-check"></i> Access control */}
                                        {/* <IconText classStyle="fas fa-check" text=" Access Control" /> */}
                                        {/* <p className="Pricing4Css"> */}


                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed7'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Access Control"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <i className="fas fa-times"></i> Alarm signaling */}
                                        {/* <IconText classNameStyle="fas fa-times" text=" Alarm signaling" /> */}
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed8'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <button className={`${Pricing4Css['price-btn']}`}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed9'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Get Quote"
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
                                </button>
                            </div>
                        </div>
                        <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                            {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1> */}
                            {/* <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>Medium</span>
                                </h2> */}
                            {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" /> */}
                            {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="Medium" /> */}
                            <h1 style={{ fontSize: `25px`, color: `rgb(26, 195, 224)`, fontWeight: `bold` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed10'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Home Security"
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
                            <h2 style={{ fontSize: `48px`, color: `black` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed11'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Medium"
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
                            <div>
                                <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>

                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <li className="p-1"><IconText classNameStyle="fas fa-check" text=" CCTV Service" /></li> */}
                                        {/* <p> */}
                                        <Editor
                                            key='price4ed12'
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="CCTV Service"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed13'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>

                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed14'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Access Control"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed15'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <button className={`${Pricing4Css['price-btn']}`}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed16'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Get Quote"
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
                                </button>
                            </div>
                        </div>
                        <div className={`border-2 border-solid border-black bg-black flex flex-col items-center p-5 m-2 ${Pricing4Css.pricingCards}`}>
                            {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Full Services</h1>
                                <h2 className="flex justify-center items-center text-5xl text-white text-center">
                                    <span>Pro</span>
                                </h2> */}
                            {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Full Services" /> */}
                            {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-white text-center" text="Pro" /> */}
                            <h1 style={{ fontSize: `25px`, color: `rgb(26, 195, 224)`, fontWeight: `bold` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed17'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Personal Security"
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
                            <h2 style={{ fontSize: `48px`, color: `white` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed18'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Pro"
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
                            <div>
                                <ul className="p-5 list-none">
                                    <li className="text-white p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed19'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="CCTV Service"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="text-white p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed20'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="text-white p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed21'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Access Control"
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
                                        {/* </p> */}
                                    </li>
                                    {/* <li className="text-white p-1"><IconText classStyle="fas fa-times" text=" Alarm signaling" /></li> */}
                                    <li className="text-white p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed22'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <button className={`${Pricing4Css['price-btn']}`}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='price4ed23'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Get Quote"
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
                                </button>
                            </div>
                        </div>
                        <div className={`${Pricing4Css.pricingCards} bg-white border-2 border-solid border-black flex flex-col items-center p-5 m-2`}>
                            {/* <h1 className={`text-2xl text-center ${Pricing4Css.cardH1}`}>Home Security</h1>
                                <h2 className="flex justify-center items-center text-5xl text-black text-center">
                                    <span>All in one</span>
                                </h2> */}
                            {/* <TextH1 classStyle={`text-2xl text-center ${Pricing4Css.cardH1}`} text="Home Security" /> */}
                            {/* <TextH2 classStyle="flex justify-center items-center text-5xl text-black text-center" text="All in one" /> */}
                            <h1 style={{ fontSize: `25px`, color: `rgb(26, 195, 224)`, fontWeight: `bold` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed24'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Personal Security"
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
                            <h2 style={{ fontSize: `48px`, color: `black` }}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='price4ed25'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Start"
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
                            <div>
                                <ul className={`p-5 list-none ${Pricing4Css.pricingList}`}>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p className="Pricing4Css"> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed26'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="CCTV Service"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed27'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed28'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Access Control"
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
                                        {/* </p> */}
                                    </li>
                                    <li className="p-1 flex">
                                        <i style={{ margin: `3px` }} class="fas fa-times icon-price"></i>
                                        {/* <p> */}
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key='price4ed29'
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Alarm Signaling"
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
                                        {/* </p> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="p-5">
                                <button className={`${Pricing4Css['price-btn']}`}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        key='price4ed30'
                                        inline={true}
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Get Quote"
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
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex w-10 justify-evenly items-center" style={overSection ? { position: "absolute", top: "1rem", right: "1.4rem", zIndex: "9999999" } : { display: "none" }}>
                <button className="bg-red-500 p-3" onClick={() => {
                    setShowPopup((popup) => !popup);
                }}><i className="far fa-images text-white"></i></button>
            </div> */}
            <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
        </>
    );
}
