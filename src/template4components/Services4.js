import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import Service4Css from './Services4.module.css';
import { Link } from 'react-router-dom';

export default function Services4({ showPopup, overSection }) {
    const [currentBackground, setCurrentBackground] = useState("black");
    const editorRef = useRef(null);
    return (
        <>
            <div className={`text-center py-32 px-0  ${Service4Css.serviceWrapper} w-full`} style={{ background: currentBackground }}>
                {/* <TextH4 className={`text-center font-black ${Service4Css.serviceMainHead}`} text="WHAT WE DO" /> */}
                <h4 className="Service4Css">
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='service4ed1'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="WHAT WE DO"
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                </h4>
                {/* <TextH2 className="text-center text-5xl opacity-80 text-white font-black" text="Our Services" /> */}
                <h2 style={{ fontSize: `48px`, fontWeight: `600` }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='service4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="Our Services"
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                </h2>
                {/* <TextPara className={`${Service4Css.servicsDesc} text-center text-white my-12 mx-auto leading-6 font-light`} */}

                {/* <p style={{}}> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='service4ed3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<p>Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu
                        scelerisque. Duis vestibulum, dolor sed facilisis laoreet.</p>"
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                    }}
                />
                {/* </p> */}
                <div className="flex flex-wrap my-0 mx-auto justify-center w-4/5">

                    {/* YE WAALI LOGIC HAR JAGA LAGANI HAI */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/ZMDDXxc/service-01-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='service4ed49'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Home CCTV camera"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                    {/* YE WAALI LOGIC HAR JAGA LAGANI HAI */}
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src={serv1} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Home CCTV camera</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src="https://i.ibb.co/9N0CNpd/service-02-778x610.png" alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Office security system</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/9N0CNpd/service-02-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed49'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Office security system"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src="https://i.ibb.co/jgW4wsW/service-03-778x610.png" alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Car parking surveillance</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/jgW4wsW/service-03-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed49'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Car parking surveillance"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src="https://i.ibb.co/NWBwhfY/service-04-778x610.png" alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Resturants surveillance</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/NWBwhfY/service-04-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed49'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Resturants surveillance"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src="https://i.ibb.co/9T0kcPR/service-05-778x610.png" alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Indus security</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/9T0kcPR/service-05-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed49'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Indus Security"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                    {/* <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                        <img src="https://i.ibb.co/Vm1tLj0/service-06-778x610.png" alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                        <div className={Service4Css.layer}>
                            <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Cargo transportation protection</h2>
                            <div className="mb-24 ml-3 text-left">
                                <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className={`${Service4Css.serviceCard} relative w-96 h-64 ml-4 mb-4`}>
                        {/* <img src={serv1} alt="London" className={`${Service4Css.serviceImages} w-full h-full object-cover top-0 z-50 rounded-xl`} /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Service4Im1'
                            initialValue={`<img src="https://i.ibb.co/Vm1tLj0/service-06-778x610.png" alt="london" class="${Service4Css.serviceImages} w-96 h-64 object-cover top-0 z-50 rounded-xl"/>`}
                            init={{
                                images_upload_handler: function (blobInfo, success, failure) {
                                    success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                },
                                images_upload_url: '/upload-images',
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <h2 className="absolute top-12 left-0 w-4/5">Home CCTV camera</h2> */}
                        <h2 className="absolute top-12 left-8 w-4/5 text-left">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed49'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Cargo transportation protection"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h2>
                        <button className="absolute bottom-12 left-8 bg-BL-500 rounded-full px-4 py-1">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='service4ed50'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Read More"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
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
