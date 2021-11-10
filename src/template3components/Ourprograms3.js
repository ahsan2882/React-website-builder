import React, { useRef, useState } from 'react'
import Ourprograms3Css from './Ourprograms.module.css'
import { GithubPicker } from 'react-color';

// import news1 from '../assets/template3images/news1.png'
// import news2 from '../assets/template3images/news2.png'
// import news3 from '../assets/template3images/news3.png'
import { Editor } from '@tinymce/tinymce-react';
export default function Ourprograms3({ showPopup, overSection }) {
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [showPopup3, setShowPopup3] = useState(false);
    const [currentBackground, setCurrentBackground] = useState("white");
    const [currentBackground1, setCurrentBackground1] = useState("#c01120");
    const [currentBackground2, setCurrentBackground2] = useState("#c01120");
    const [currentBackground3, setCurrentBackground3] = useState("#c01120");



    const editorRef = useRef(null);
    return (
        <>

            <section style={{ background: currentBackground }} className={Ourprograms3Css['heading-sec']} >

                <div className={Ourprograms3Css['heading-main-title']}>
                    <div className={Ourprograms3Css['sub-title']}>
                        <h3>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='ourprograms1'
                                initialValue="Govt Affiliate Programs"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />
                        </h3>
                    </div>
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='ourprograms2'
                            initialValue="  Our Programs"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect | lineheight',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                            }}
                        />
                    </h1>
                </div>
            </section>
            <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>

            <div style={{ background: currentBackground }} className={Ourprograms3Css['our-programs-section']}>
                <div style={{ background: currentBackground }} className={Ourprograms3Css['container-main']}>
                    <div className={Ourprograms3Css['programs-cards-wrapper']}>

                        <div className={Ourprograms3Css['program-card']}>
                            <div className={Ourprograms3Css['program-card-img']}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='ourprogram3'
                                    initialValue={`<img src="https://i.ibb.co/C1JXjPn/news1.png" alt="news1" class="w-full" />`}
                                    init={
                                        {
                                            images_upload_handler: function (blobInfo, success, failure) {
                                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                            },
                                            images_upload_url: '/upload-images',

                                            forced_root_block: "",
                                            menubar: false,
                                            plugins: [
                                                "image"
                                            ],
                                            toolbar: 'image'
                                        }}
                                />


                                <div className={Ourprograms3Css['icon-min']}>
                                    <lord-icon src="https://cdn.lordicon.com/mtdulhdc.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "50px;", "height": "50px" }}>
                                    </lord-icon>

                                </div>
                            </div>
                            <div style={{ background: currentBackground1 }} className={Ourprograms3Css['program-card-content']} onClick={() => setShowPopup1(state => !state)}>
                                <h2 className={Ourprograms3Css['program-card_title']}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='ourprogram4'
                                        initialValue="Cultural Awareness Show"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                            // 
                                            //     
                                        }}
                                    />
                                </h2>

                                {/* <p className={Ourprograms3Css['program-card-body']}> */}

                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='ourprogram5'
                                    initialValue={`<p class="${Ourprograms3Css['program-card-body']}">Cultural Awareness is critical for any workforce that seeks to yield positive outcomes. Watch this video to learn about
                                        cultural awareness in the workplace</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                        // 
                                        //     
                                    }}
                                />

                                {/* </p> */}
                                <button className={Ourprograms3Css['button-sq']}>Read More</button>

                            </div>
                            <div style={(showPopup1) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                                <GithubPicker
                                    triangle="top-right"
                                    onChangeComplete={(color) => {
                                        setCurrentBackground1(color.hex);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={Ourprograms3Css['program-card']}>
                            <div className={Ourprograms3Css['program-card-img']}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='ourprogram6'
                                    initialValue={`<img src="https://i.ibb.co/44k7Zqv/news2.png" alt="news2" class="w-full" />`}
                                    init={
                                        {
                                            images_upload_handler: function (blobInfo, success, failure) {
                                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                            },
                                            images_upload_url: '/upload-images',

                                            forced_root_block: "",
                                            menubar: false,
                                            plugins: [
                                                "image"
                                            ],
                                            toolbar: 'image'
                                        }}
                                />

                                <div className={Ourprograms3Css['icon-min']}>
                                    <lord-icon src="https://cdn.lordicon.com/vcoyflbj.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "50px;", "height": "50px" }}>
                                    </lord-icon>

                                </div>
                            </div>
                            <div style={{ background: currentBackground2 }} class={Ourprograms3Css['program-card-content']} onClick={() => setShowPopup2(state => !state)}>
                                <h2 class={Ourprograms3Css['program-card_title']}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='ourprogram7'
                                        initialValue="Military Virtual Training"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                            // 
                                            //     
                                        }}
                                    />
                                </h2>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='ourprogram7'
                                    initialValue={`<p class="${Ourprograms3Css['program-card-body']}"> Watch this video to see one of the Department of Defense's approaches to building cultural awareness and reducing risk
                                        in culturally diverse environments.</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect | lineheight',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                        // 
                                        //     
                                    }}
                                />


                                <button class={Ourprograms3Css['button-sq']}>

                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='ourprogram8'
                                        initialValue="Read More"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                            // 
                                            //     
                                        }}
                                    />
                                </button>

                            </div>
                            <div style={(showPopup2) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                                <GithubPicker
                                    triangle="top-right"
                                    onChangeComplete={(color) => {
                                        setCurrentBackground2(color.hex);
                                    }}
                                />
                            </div>
                        </div>
                        <div className={Ourprograms3Css['program-card']}>
                            <div className={Ourprograms3Css['program-card-img']}>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='About5'
                                    initialValue={`<img src="https://i.ibb.co/QkSfTJw/news3.png" alt="news3" class="w-full" />`}
                                    init={
                                        {
                                            images_upload_handler: function (blobInfo, success, failure) {
                                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                                            },
                                            images_upload_url: '/upload-images',

                                            forced_root_block: "",
                                            menubar: false,
                                            plugins: [
                                                "image"
                                            ],
                                            toolbar: 'image'
                                        }}
                                />

                                <div className={Ourprograms3Css['icon-min']}>
                                    <lord-icon src="https://cdn.lordicon.com/igpsgesd.json" trigger="loop" colors={{ "primary": "#000000", "secondary": "#c01120" }}
                                        style={{ "width": "50px;", "height": "50px" }}>
                                    </lord-icon>

                                </div>
                            </div>
                            <div style={{ background: currentBackground3 }} className={Ourprograms3Css['program-card-content']} onClick={() => setShowPopup3(state => !state)}>
                                <h2 className={Ourprograms3Css['program-card_title']}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='ourprogram8'
                                        initialValue="Insider Threat Resilience"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                            // 
                                            //     
                                        }}
                                    />
                                </h2>
                                <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='ourprogram8'
                                    initialValue={`<p class="${Ourprograms3Css['program-card-body']}"> Resilience allows individuals to bounce back from setbacks and stressful situations. Without this quality, some people
                                    may develop increased risks</p>`}
                                    init={{
                                        forced_root_block: "",
                                        menubar: false,
                                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                            'alignright alignjustify | fontselect',
                                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                                    }}
                                />
                                <button className={Ourprograms3Css['button-sq']}>
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key='ourprogram8'
                                        initialValue="Read More"
                                        init={{
                                            forced_root_block: "",
                                            menubar: false,
                                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                                'alignright alignjustify | fontselect | lineheight',
                                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",
                                            // 
                                            //     
                                        }}
                                    />
                                </button>

                            </div>
                            <div style={(showPopup3) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                                <GithubPicker
                                    triangle="top-right"
                                    onChangeComplete={(color) => {
                                        setCurrentBackground3(color.hex);
                                    }}
                                />
                            </div>
                        </div>


                    </div></div>
                <div style={(overSection && showPopup) ? { position: "absolute", top: "9rem", right: "5rem", zIndex: "9999999" } : { display: "none" }} className="toBeRemoved">
                    <GithubPicker
                        triangle="top-right"
                        onChangeComplete={(color) => {
                            setCurrentBackground(color.hex);
                        }}
                    />
                </div>
            </div>

        </>
    )
}
