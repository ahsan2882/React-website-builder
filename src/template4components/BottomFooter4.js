import { Editor } from '@tinymce/tinymce-react';
import React,{useRef} from 'react'
import BottomFooter4Css from './BottomFooter4.module.css'

export default function BottomFooter4() {
    const editorRef = useRef(null);
    return (
        <footer className="bg-black w-full">
            <div className={`${BottomFooter4Css.container1} ${BottomFooter4Css.footerWrapper}`}>
                {/* <TextPara classStyle="text-white" text="Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved." /> */}
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='footer4ed3'
                    tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                    initialValue="<p>Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved.</p>"
                    init={{
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | formatselect',
                    }}
                />
            </div>
        </footer>
    );
}
