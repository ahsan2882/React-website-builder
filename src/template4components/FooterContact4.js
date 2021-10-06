import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import FooterContact4Css from './FooterContact4.module.css'

export default function FooterContact4() {
    const editorRef = useRef(null);
    return (
        <div className={`${FooterContact4Css.contactFooterWrapper} w-full`}>
            <div className={`${FooterContact4Css.container1} flex flex-col justify-around items-center py-28`}>
                {/* <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`}
                    text="Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam."/> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer4ed1'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<p>Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam.</p>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                    }}
                />
                {/* <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`} text="021-34556899" /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer4ed2'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<p>021-34556899</p>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                    }}
                />
                <div className={`${FooterContact4Css.contactBottomLink} flex justify-evenly`}>
                    <i className="fab fa-twitter p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-facebook p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-instagram p-4 bg-black text-white rounded-full"></i>
                    <i className="fab fa-youtube p-4 bg-black text-white rounded-full"></i>
                </div>
            </div>
        </div>
    );
}
