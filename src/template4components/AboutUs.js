// import { Editor, Frame } from '@craftjs/core';
// import { Editor as TinyEditor } from '@tinymce/tinymce-react'
import React from 'react'
import aboutimg from '../assets/template4images/news3.jpg'
import About4Css from './AboutUs.module.css'
import TextEditor from '../editorScreen/TextEditor'

export default function AboutUs() {
    // const editorRef = useRef(null);
    // <TinyEditor
    //     inline={true}
    //     onInit={(evt, editor) => editorRef.current = editor}
    //     init={{
    //         menubar: false,
    //         plugins: [
    //             'advlist autolink lists link image charmap print preview anchor',
    //             'searchreplace visualblocks code fullscreen',
    //             'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar: 'undo redo | formatselect | ' +
    //             'bold italic backcolor | alignleft aligncenter ' +
    //             'alignright alignjustify |' +
    //             'removeformat | help',
    //         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    //         selector: '.editable'
    //     }}
    // >

    // </TinyEditor>
    return (
        // <Editor>
            // <Frame>
                <div className={`${About4Css.container02} py-28 px-12 flex items-center justify-center bg-black w-full`}>
                    <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                        <img className={`${About4Css.aboutImg} w-11/12`} src={aboutimg} alt="about"/>
                    </div>
                    <div className={`${About4Css.box1} flex flex-col max-w-lg`}>
                        <section>
                            <article>
                                <h1 className={`${About4Css.artH1} w-full editable`}>About Us</h1>
                                <h3 className="text-white text-3xl w-full mb-6 editable">CCTV For your Safety</h3>
                                <p className="text-white text-xl py-3 px-0">Nunc pretium nibh non aliquam scelerisque. Integer porttitor
                                    dolor sit amet leo malesuada scelerisque. Sed sed tortor
                                    lobortis, dictum lacus sed, mollis enim. Aenean ullamcorper
                                    accumsan sem sit amet aliquam. Cras euismod mauris felis, eget
                                    bibendum nibh facilisis ac.</p>
                                <div className="py-5">
                                    <button className={`${About4Css.btnReadMore} text-white border flex justify-between w-40 items-center border-solid py-2 px-8 hover:text-black hover:bg-white`}>
                                        <p>Read More</p>
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            // </Frame>
        // </Editor>
    );
}
