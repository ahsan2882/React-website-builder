import React, { useRef, useState } from 'react'
// import image from './news1.jpg'
import { Editor } from '@tinymce/tinymce-react';
import { GithubPicker } from 'react-color';

import RetailmoduleCss from './Retail.module.css'
export const Retail = ({ showPopup, overSection }) => {
    const editorRef = useRef();
    const [currentBackground, setCurrentBackground] = useState("white");

    return (
<>

<section style={{backgroundColor: currentBackground}} class={`${RetailmoduleCss.sector}`}>
    <div class={`${RetailmoduleCss['sector-container']}`}>
        <div class={`${RetailmoduleCss['sector_left-content']}`}>
            <h1>
            
            <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='ABcd'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Retail Site Security: Protect Your Most Valuable Assets"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                        </h1>
            <h4>
            <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='ABcde'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Sector Details"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />

                
            </h4>
      
            <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={`<p>      Retail sites are some of the largest targets of theft and vandalism in the country. In fact, statistics from the
                        National Insurance Crime Bureau estimate that the total value of stolen equipment in 2016 was nearing $300 million. And
                        what makes these statistics even more alarming is that the rate of recovery for heavy equipment is only about 20%.
                        
                        For someone who is responsible for a Retail site, these numbers indicate just how critical Retail site
                        security is to the overall safety and success of your project. No matter the size or scope of your Retail project,
                        the potential financial risks of theft and vandalism are high. The side effects of these crimes are much more than just
                        property loss – they can have a serious impact on your ability to complete the job on time and on budget.</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                        }}
                    />

                <ul>
                    <li>
                        <lord-icon
                            src="https://cdn.lordicon.com/etqwxxml.json"
                            trigger="hover"
                            colors="primary:#121331,secondary:#c0272d"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhhh'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Heavy equipment theft and vandalism"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                        
                        
                        
                        
                        </li>
                    <li><lord-icon
                        src="https://cdn.lordicon.com/nwjadubb.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#c0272d"
                        style={{ width: "50px", height: "50px" }}>
                    </lord-icon>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhhg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Site access control and monitoring"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    
                    
                    
                    
                    </li>
                    <li><lord-icon
                        src="https://cdn.lordicon.com/boagnaty.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#c0272d"
                        style={{ width: "50px", height: "50px" }}>
                    </lord-icon>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhtg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Detecting hazards that could result in injury"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    </li>
                    <li><lord-icon
                        src="https://cdn.lordicon.com/efdggetp.json"
                        trigger="hover"
                        colors="primary:#121331,secondary:#c0272d"
                        style={{ width: "50px", height: "50px" }}>
                    </lord-icon>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhdfg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Detecting hazards that could result in injury"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    
                    
                    </li>
                </ul>
        </div>
        <div class={`${RetailmoduleCss['sector_right-cards']}`}>
            <div class={`${RetailmoduleCss['sector-cards-row']}`}>
            <div class={`${RetailmoduleCss['sector-card']}`}>
            <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/c8STtRy/news3.png" alt="about" class=" w-24 h-36 object-cover"/>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <div class={`${RetailmoduleCss['sector-card-content']}`}>
                    <h2>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhjdfg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Removal of loiterers."
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />



                    </h2>
                    <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted3'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, repudiandae!</p>
                                    "
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
                </div>
                
            </div>
            <div class={`${RetailmoduleCss['sector-card']}`}>
            <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/c8STtRy/news3.png" alt="about" class=" w-24 h-36 object-cover"/>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <div class={`${RetailmoduleCss['sector-card-content']}`}>
                    <h2>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhjdfg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Site access control and monitoring."
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />


                    </h2>
                    <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted3'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, repudiandae!</p>
                                    "
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
                                />                </div>
                
            </div>
            
        </div>
        <div class={`${RetailmoduleCss['sector-cards-row']}`}>
            <div class={`${RetailmoduleCss['sector-card']}`}>
            <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/c8STtRy/news3.png" alt="about" class=" w-24 h-36 object-cover"/>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <div class={`${RetailmoduleCss['sector-card-content']}`}>
                    <h2>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhjdfg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Mitigating employee theft."
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        /> 
                    </h2>
                    <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted3'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, repudiandae!</p>
                                    "
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
                                />                </div>
                
            </div>
            <div class={`${RetailmoduleCss['sector-card']}`}>
            <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='abouted1'
                    initialValue={`<img  src="https://i.ibb.co/c8STtRy/news3.png" alt="about" class=" w-24 h-36 object-cover"/>`}
                    init={{
                        forced_root_block: "",
                        menubar: false,
                        images_upload_handler: function (blobInfo, success, failure) {
                            success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                        },
                        images_upload_url: '/upload-images',
                        plugins: [
                            "image"
                        ],
                        toolbar: 'image'
                    }}
                />
                <div class={`${RetailmoduleCss['sector-card-content']}`}>
                    <h2>
                    <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hhjdfg'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Unarmed guards."
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />      
                    </h2>
                    <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='abouted3'
                                    tinymceScriptSrc="../assets/tinymce/tinymce.min.js"
                                    initialValue="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, repudiandae!</p>
                                    "
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
                                />                </div>
                
            </div>
            
        </div>
        </div>
    </div>
</section>
<div style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
</>
    )
}
