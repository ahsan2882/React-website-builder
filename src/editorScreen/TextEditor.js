import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor() {
    const editorRef = useRef(null);
    return (
        <>
            <div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    initialValue="<p>ohoghwuiosg</p>"
                    init={{
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify |',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                />
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    initialValue="<h1>efwffweffsgtrehedgb etg tsert t wsea te dfvg</h1>"
                    init={{
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify |',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                />
            </div>
        </>
    )
}
