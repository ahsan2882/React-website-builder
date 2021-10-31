import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';

import Hero2moduleCss from './Hero2.module.css'
export const Hero2 = ({displayDevice}) => {
    const editorRef = useRef();

    return (
        <>
            <section style={{ background: `#c0272d` }} className={`${Hero2moduleCss['slider-temp2']}`}>
                <div className={`${Hero2moduleCss['slider__warpper']}`}>
                    <div className={`${Hero2moduleCss['flex__container']} ${Hero2moduleCss['flex--pikachu']} ${Hero2moduleCss['flex--active']}`}>
                        <img className={`${Hero2moduleCss['bg-line']}`} src="https://i.ibb.co/VwB7mhG/Path-7.png" alt="" />

                        <div className={`${Hero2moduleCss['{flex__item']} ${Hero2moduleCss['flex__item--left']}`}>
                            <img className={displayDevice ? `${Hero2moduleCss.pokemonimg}` : `${Hero2moduleCss.pokemonimgM}`} src="https://i.ibb.co/9Wt8w45/guarg.png" alt="rhuis " />
                            <div className={`${Hero2moduleCss['flex__content']}`}>

                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='hero4ed2'
                                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                    initialValue={displayDevice ? `<p class="${Hero2moduleCss.textSub}">Security</p>` : `<p class="${Hero2moduleCss.textSubM}">Security</p>`}
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

                                <h1 className={displayDevice ? `${Hero2moduleCss['text--big']}` : `${Hero2moduleCss['text--bigM']}`}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='hero(2)33'
                                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                        initialValue="GUARD"
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
                            <p className={`${Hero2moduleCss['text__background']}`}>Security</p>

                        </div>


                    </div>



                </div>


            </section>
        </>
    )
}


