
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react';
import cl1 from '../assets/template4images/client1.png';
import cl2 from '../assets/template4images/client2.png';
import cl3 from '../assets/template4images/client3.png';
import cl4 from '../assets/template4images/client4.png';
import Accre4Css from './Accreditation.module.css';

export default function Accreditation() {
    const editorRef = useRef(null);
    return (
        <section className="py-28 px-0 w-full">
            <div className={Accre4Css.containerMain}>
                <div className="flex flex-col items-center py-10 px-0">
                    {/* <TextH2 classStyle={`${Accre4Css.accreMainH2} text-2xl`} text="we are verified" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h2>we are verified</h2>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify |',
                        }}
                    />
                    {/* <TextH1 classStyle={`${Accre4Css.accreMainH1} text-5xl text-center`} text="Our Accreditation" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h1>Our Accreditation</h1>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                'alignright alignjustify |',
                        }}
                    />
                </div>
                <div className="flex flex-wrap justify-center my-0 mx-auto mb-8">
                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <div className="p-5 flex flex-col items-center">
                            <img src={cl1} alt="client 1" className="w-full" />
                            {/* <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum." /> */}
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify |',
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <div className="p-5 flex flex-col items-center">
                            <img src={cl2} alt="client 2" className="w-full" />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify |',
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <div className="p-5 flex flex-col items-center">
                            <img src={cl3} alt="client 3" className="w-full" />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify |',
                                }}
                            />
                        </div>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <div className="p-5 flex flex-col items-center">
                            <img src={cl4} alt="client 4" className="w-full" />
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic backcolor | alignleft aligncenter ' +
                                        'alignright alignjustify |',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
