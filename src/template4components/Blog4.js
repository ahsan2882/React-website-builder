
import React, { useRef ,useState } from 'react';
import { GithubPicker } from 'react-color';
import news1 from '../assets/template4images/news1.png';
import news2 from '../assets/template4images/news2.png';
import news3 from '../assets/template4images/news3.png';
import { Editor } from '@tinymce/tinymce-react';
import Blog4Css from './Blog4.module.css';

export default function Blog4({ showPopup, overSection }) {
    const [currentBackground, setCurrentBackground] = useState("black");

    const editorRef = useRef(null);
    return (
        <>
        <section className={` py-28 px-0 w-full ${Blog4Css.sectionBlog}`} style={{ background: currentBackground }}>
            <div className={`text-center ${Blog4Css.headingWrapper}`}>
                {/* <TextH3 classStyle={Blog4Css.blogMainHead} text="WHATS NEW" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='blog4ed1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<h3>WHATS NEW</h3>"
                    init={{
                        forced_root_block:"",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                    }}
                />
                {/* <TextH1 className="text-white font-black mb-12 text-5xl" text="Latest News" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='blog4ed2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<h1>Latest News</h1>"
                    init={{
                        forced_root_block:"",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                    }}
                />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap justify-around items-center">
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news1} alt="news 1" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blogIm1'
                            initialValue={`<img src=${news1} alt="news 1" class="${Blog4Css.contImg} border-b-4 border-solid mx-auto my-8"/>`}
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <TextH1 className={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        {/* <TextPara className="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed4'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText className={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed5'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    forced_root_block:"",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news2} alt="news 2" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blogIm2'
                            initialValue={`<img src=${news2} alt="news 2" class="${Blog4Css.contImg} border-b-4 border-solid mx-auto my-8"/>`}
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed6'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed7'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed8'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    forced_root_block:"",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </div>
                    </div>
                    <div className={`${Blog4Css.blogArticWrap} bg-transparent flex flex-col justify-center`}>
                        {/* <img className={`${Blog4Css.contImg} border-b-4 border-solid mb-8`} src={news3} alt="news 3" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blogIm3'
                            initialValue={`<img src=${news3} alt="news 3" class="${Blog4Css.contImg} border-b-4 border-solid mx-auto my-8"/>`}
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                plugins: [
                                    "image"
                                ],
                                toolbar: 'image'
                            }}
                        />
                        {/* <TextH1 classStyle={`${Blog4Css.blogArticH1} text-2xl p-3 mb-8 hover:text-white`} text="Personal Security Services" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed9'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Personal Security Services</h1>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        {/* <TextPara classStyle="text-white text-center" text="vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ..."/> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='blog4ed10'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<p>vamus tristique ligula quis orci malesuada tincidunt. Praesent
                                    magna purus, pharetra eu eleifend non, euismod vitae leo.
                                    Interdum et malesuada fames ac ante ipsum ...</p>"
                            init={{
                                forced_root_block:"",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                            }}
                        />
                        <div className={`${Blog4Css.btnPost} flex justify-center items-center py-5 px-4 mt-4`}>
                            {/* <ButtonText classStyle={`${Blog4Css.postBtn} py-3 px-6 border-0 w-full hover:text-black hover:bg-white`} text="Read More" /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='blog4ed11'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<button>Read More</button>"
                                init={{
                                    forced_root_block:"",
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
        <div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
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
