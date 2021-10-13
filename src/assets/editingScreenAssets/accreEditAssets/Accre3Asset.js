import React, {useRef} from 'react'

import Accre4Css from '../../../template4components/Accreditation4.module.css';
// import cl1 from '../assets/template4images/client1.png';
import cl1 from '../../template4images/client1.png'
import cl2 from '../../template4images/client2.png';
import cl3 from '../../template4images/client3.png';
import cl4 from '../../template4images//client4.png';

import { Editor } from '@tinymce/tinymce-react';

export default function Accre3Asset() {
    const editorRef = useRef(null);
    return (
        // <section className="accre-sec">
        //     <div className="container-main">
        //         <div className="heading-main">
        //             <h2 className="subhead-main">we are verified</h2>
        //             <h1 className="main-head">Our Accrediation</h1>
        //         </div>
        //         <div className="cards-wrapper">
        //             <div className="accre-card">
        //                 <div className="card-contain">
        //                     <img src="images/client1.png" alt="Accrediation 1" />
        //                     <h3>Lorem ipsum.</h3>
        //                 </div>
        //             </div>

        //             <div className="accre-card">
        //                 <div className="card-contain">
        //                     <img src="images/client2.png" alt="Accrediation 2" />
        //                     <h3>Lorem ipsum.</h3>
        //                 </div>
        //             </div>

        //             <div className="accre-card">
        //                 <div className="card-contain">
        //                     <img src="images/client3.png" alt="Accrediation 3" />
        //                     <h3>Lorem ipsum.</h3>
        //                 </div>
        //             </div>

        //             <div className="accre-card">
        //                 <div className="card-contain">
        //                     <img src="images/client4.png" alt="Accrediation 4" />
        //                     <h3>Lorem ipsum.</h3>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="w-full">
            <div className={Accre4Css.containerMain}>
                <div className="flex flex-col items-center py-10 px-0">
                    {/* <TextH2 classStyle={`${Accre4Css.accreMainH2} text-2xl`} text="we are verified" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='accre4ed1'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h2>we are verified</h2>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                        }}
                    />
                    {/* <TextH1 classStyle={`${Accre4Css.accreMainH1} text-5xl text-center`} text="Our Accreditation" /> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='accre4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue="<h1>Our Accreditation</h1>"
                        init={{
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
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
                                key='accre4ed3'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
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
                                key='accre4ed4'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
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
                                key='accre4ed5'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
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
                                key='accre4ed6'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="<h3>Lorem ipsum</h3>"
                                init={{
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
