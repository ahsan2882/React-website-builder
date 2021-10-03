import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import rsswifi from '../assets/template4images/rsswifi.png'
import Subscribe4Css from './Subscribe4.module.css'

export default function Subscribe4() {
    const editorRef = useRef(null);
    return (
        <div className={`${Subscribe4Css.container1} ${Subscribe4Css.subscribeSection} w-full`}>
            <div className={Subscribe4Css.subscribeWrapper}>
                <img src={rsswifi} alt="subscribe logo" />
                <div className={Subscribe4Css.rightContainer}>
                    <div className={Subscribe4Css.offer}>
                        {/* <TextH3 classStyle={Subscribe4Css.offerH3} text="Want to know about our offers first?" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='subsc4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h3>Want to know about our offers first?</h3>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                        {/* <TextH1 classStyle={Subscribe4Css.offerH1} text="Subscribe our newsletter" /> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='subsc4ed2'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<h1>Subscribe our newsletter</h1>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                    </div>
                    <div className={Subscribe4Css.inputEmail}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email-address"
                            className={Subscribe4Css.emailField}
                        />
                        {/* <button className={Subscribe4Css.subscribeBtn}>SUBSCRIBE</button> */}
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='subsc4ed3'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="<button>SUBSCRIBE</button>"
                            init={{
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | formatselect',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
