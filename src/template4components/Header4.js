import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import Header4Css from './Header4.module.css'


export default function Header4() {

    const editorRef = useRef(null);

    return (

        <header className={`${Header4Css.header} w-full`}>
            <section className={`flex justify-between items-center py-2 ${Header4Css.container1}`}>
                <ul className={`list-none flex p-0 justify-between items-center ${Header4Css.contactHeader}`}>
                    <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                        <div className="mr-1">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        {/* <DivText className="mr-1" text="+10800-33-000"></DivText> */}
                        <div>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='headed1'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="+10800-33-000"
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
                    </li>
                    <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                        <div className="mr-1">
                            <i className="fab fa-skype"></i>
                        </div>
                        {/* <div className="mr-1">security</div> */}
                        {/* <DivText className="mr-1" text="security"></DivText> */}
                        <div>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='headed2'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="security"
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
                    </li>
                    <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                        <div className="mr-1">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        {/* <div className="mr-1">21 Newstreet, New York, 269-24</div> */}
                        {/* <DivText className="mr-1" text="21 Newstreet, New York, 269-24"></DivText> */}
                        <div>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='headed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="21 Newstreet, New York, 269-24"
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
                    </li>
                </ul>
                <ul className="list-none flex p-0 justify-between items-center w-72">
                    <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                        <div className="ml-3">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="ml-3 w-5 h-5 bg-black font-black flex justify-center items-center border-rad-050">0</div>
                    </li>
                    <li className={`${Header4Css.HeaderLinks} flex justify-around items-center ml-3 border-b border-solid border-white`}>
                        <i className="fas fa-search pr-2"></i>
                        <input
                            type="text"
                            name="search-bar"
                            placeholder="Search"
                            className="search-bar-header w-full outline-none border-0 bg-black placeholder-white"
                        />
                    </li>
                </ul>
            </section>
        </header>

    );
}
