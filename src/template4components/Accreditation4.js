
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import { GithubPicker } from 'react-color';
import cl1 from '../assets/template4images/client1.png';
import cl2 from '../assets/template4images/client2.png';
import cl3 from '../assets/template4images/client3.png';
import cl4 from '../assets/template4images/client4.png';
import Accre4Css from './Accreditation4.module.css';

export default function Accreditation4({ showPopup, overSection, displayDevice }) {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    return (
        <>
            <section className="py-32 px-0 w-full" style={{ background: currentBackground }}>
                <div className={displayDevice ? `${Accre4Css.containerMain}` : `${Accre4Css.containerMain} p-0.5`}>
                    <div className="flex flex-col items-center py-10 px-0">
                        {/* <TextH2 classStyle={`${Accre4Css.accreMainH2} text-2xl`} text="we are verified" /> */}
                        <h2 className="Accre4Css" style={{ fontWeight: `400` }}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='accre4ed1'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="we are verified"
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
                        {/* <TextH1 classStyle={`${Accre4Css.accreMainH1} text-5xl text-center`} text="Our Accreditation" /> */}
                        <h1 className="Accre4Css">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='accre4ed2'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Our Accreditation"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </h1>
                    </div>
                    <div className={displayDevice ? `${Accre4Css.flexWrapped}` : `${Accre4Css.flexWrappedM}`}>
                        <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                            <div className="p-5 flex flex-col items-center">
                                {/* <img src={cl1} alt="client 1" className="w-full" /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='AccreIm1'
                                    initialValue={`<img src=${cl1} alt="client 1" class="w-72 h-36 object-cover"/>`}
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
                                {/* <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum." /> */}
                                <h3 style={displayDevice ? null : { fontSize: "0.8rem" }}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='accre4ed3'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Typing..."
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                        }}
                                    />
                                </h3>
                            </div>
                        </div>

                        <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                            <div className="p-5 flex flex-col items-center">
                                {/* <img src={cl2} alt="client 2" className="w-full" /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='AccreIm2'
                                    initialValue={`<img src=${cl2} alt="client 2" class="w-72 h-36 object-cover"/>`}
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
                                <h3>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='accre4ed4'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Typing..."
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                        }}
                                    />
                                </h3>
                            </div>
                        </div>

                        <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                            <div className="p-5 flex flex-col items-center">
                                {/* <img src={cl3} alt="client 3" className="w-full" /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='AccreIm3'
                                    initialValue={`<img src=${cl3} alt="client 3" class="w-72 h-36 object-cover"/>`}
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
                                <h3>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='accre4ed5'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Typing..."
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                        }}
                                    />
                                </h3>
                            </div>
                        </div>

                        <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                            <div className="p-5 flex flex-col items-center">
                                {/* <img src={cl4} alt="client 4" className="w-full" /> */}
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='AccreIm3'
                                    initialValue={`<img src=${cl4} alt="client 4" class="w-72 h-36 object-cover"/>`}
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
                                <h3>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='accre4ed6'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="Typing..."
                                        init={{
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                        }}
                                    />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
