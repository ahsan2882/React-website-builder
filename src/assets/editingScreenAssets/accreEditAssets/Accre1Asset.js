import React, { useRef } from 'react'
import Accreditation2moduleCss from './Accre1asset.module.css'
import Acc1 from '../../template2images/accrediation1.jpg'
import dot from '../../template2images/dot.png'
import Acc2 from '../../template2images/accrediation2.jpg'
import Acc3 from '../../template2images/accrediation3.jpg'
import Acc4 from '../../template2images/accrediation4.jpg'
import Acc5 from '../../template2images/accrediation5.jpg'
import Acc6 from '../../template2images/accrediation6.jpg'
import Acc7 from '../../template2images/accrediation7.jpg'
import { Editor } from '@tinymce/tinymce-react';
export default function Accre1Asset() {
    const editorRef = useRef();
    return (
        <>
            <section className={`${Accreditation2moduleCss['head-main']}`}>
                <h1 class={`${Accreditation2moduleCss.MainHeading}`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='About(2)45'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<span class="${Accreditation2moduleCss.SpanColor}">Our </span> Accrediation`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                        }}
                    />
                </h1>        <div className={`${Accreditation2moduleCss.spanDesc}`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Program(2)1'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p>  Accrediation are best in town and premium Lorem ipsum dolor sit amet.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />
                </div>
                <div className={`${Accreditation2moduleCss.divMainHeading}`}>
                    <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left" /> <img className={`${Accreditation2moduleCss.dot}`} src={dot} data-aos="fade" alt="Dot" />
                    <div className={`${Accreditation2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
                </div>
            </section>
            <section className={`${Accreditation2moduleCss['our-accrediation']}`}>

                <div className={`${Accreditation2moduleCss['brand-carousel']} ${Accreditation2moduleCss['section-padding']} ${Accreditation2moduleCss['owl-carousel']}`}>
                    <div className={`${Accreditation2moduleCss['single-logo']}`}>
                        <div className={`${Accreditation2moduleCss.accrediation}`}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Acce1'
                                initialValue={`<img src="${Acc1}" alt="Client 3" class=" w-72 h-48 object-contain"/>`}
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
                            {/* <img src={Acc1} alt="acce" /> */}
                            <div className={`${Accreditation2moduleCss['accre-content']}`}>
                                <h4>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='Acc(2)1'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Lorem ipsum dolor sit amet."
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                        }}
                                    />


                                </h4>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)17'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue={`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />                </div>
                        </div>
                    </div>
                    <div className={`${Accreditation2moduleCss['single-logo']}`}>
                        <div className={`${Accreditation2moduleCss.accrediation}`}>
                            {/* <img src={Acc2} alt="" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Acce9'
                                initialValue={`<img src="${Acc2}" alt="Acce2" class=" w-72 h-48 object-contain"/>`}
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
                            <div className={`${Accreditation2moduleCss['accre-content']}`}>
                                <h4>      <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)8'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Lorem ipsum dolor sit amet."
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                    }}
                                /> </h4>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)18'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue={`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={`${Accreditation2moduleCss['single-logo']}`}>
                        <div className={`${Accreditation2moduleCss.accrediation}`}>
                            {/* <img src={Acc3} alt="" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Acce87'
                                initialValue={`<img src="${Acc3}" alt="Acce3" class=" w-72 h-48 object-contain"/>`}
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
                            <div className={`${Accreditation2moduleCss['accre-content']}`}>
                                <h4>      <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)7'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue="Lorem ipsum dolor sit amet."
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                    }}
                                /> </h4>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)19'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue={`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="single-logo">
                        <div className={`${Accreditation2moduleCss.accrediation}`}>
                            {/* <img src={Acc4} alt="" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Acce57'
                                initialValue={`<img src="${Acc4}" alt="Acce4" class=" w-72 h-48 object-contain"/>`}
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
                            <div className={`${Accreditation2moduleCss['accre-content']}`}>
                                <h4>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='Acc(2)2'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Lorem ipsum dolor sit amet."
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                        }}
                                    />
                                </h4>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Acc(2)20'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue={`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, dolorem?</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                   
                   
                    
                   
                </div>
            </section>
        </>
    )
}
