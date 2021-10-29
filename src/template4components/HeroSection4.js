import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import heroVideo from '../assets/videos/homepage-hero-bg.mp4'
import Hero4Css from './HeroSection4.module.css'

export default function HeroSection4({ showPopup, overSection, displayDevice }) {
    const [backgroundType, setBackgroundType] = useState("image");
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState("white");

    return (
        <>
            <section className="overflow-hidden">
                {/* {backgroundType === "color" ? <HeroSection4ComponentColorImage color={currentBackgroundColor} /> : (backgroundType === "image" ? <HeroSection4ComponentColorImage image={currentBackgroundImage} /> : <HeroSection4ComponentVideo />)} */}
                {backgroundType === "color" ? <HeroSection4ComponentColor color={currentBackgroundColor} displayDevice={displayDevice} /> : null}
                {backgroundType === "image" ? <HeroSection4ComponentImage displayDevice={displayDevice} /> : null}
                {backgroundType === "video" ? <HeroSection4ComponentVideo displayDevice={displayDevice} /> : null}
                <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                    <div className="flex flex-col justify-center items-center border-2 border-black w-64">
                        <button className="py-4" onClick={() => setBackgroundType("color")}>Color</button>
                        {backgroundType === "color" ? <GithubPicker
                            triangle="top-right"
                            onChangeComplete={(color) => {
                                setBackgroundType("color")
                                setCurrentBackgroundColor(color.hex);
                            }}
                        /> : null}
                        <button className="py-2" onClick={() => setBackgroundType("image")}>Image</button>
                        <button className="py-4" onClick={() => setBackgroundType("video")}>Video</button>

                    </div>
                </div>
            </section>
        </>
    );
}

const HeroSection4ComponentColor = ({ color, displayDevice }) => {
    const editorRef = useRef(null);
    return (
        <>
            <section className={displayDevice ? `${Hero4Css.sectionHero}` : `${Hero4Css.sectionHeroM}`}
                style={{ background: color }}
            >
                <div className="w-full">
                    {/* <TextH1 classStyle={Hero4Css.secHeroH1} text="Security Services"></TextH1> */}
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Security Services"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    </h1>
                    {/* <TextPara text="For your personal safety" classStyle={Hero4Css.paragraphHero} /> */}
                    {/* <p style={{ lineHeight:`28px`,marginBottom:`2em`}}> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={displayDevice ? `<p>For your personal safety</p>` : `<p class="text-xl leading-none">For your personal safety</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                    {/* </p> */}
                    <div className={Hero4Css.secHeroBtn}>
                        {/* <ButtonText classStyle={Hero4Css.secBtn} text="Contact Us"></ButtonText> */}
                        <button className={Hero4Css.allbtn}>

                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='hero4ed3'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Contact Us"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


const HeroSection4ComponentImage = ({ displayDevice }) => {
    const editorRef = useRef(null);
    return (
        <>
            <section className={displayDevice ? `${Hero4Css.sectionHero} relative` : `${Hero4Css.sectionHeroM} relative`}
            // style={{ background: color }}
            >
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='Service4Im1'
                    initialValue={`<img src="https://i.ibb.co/C8ZPc41/blog-15-770x545.png" alt="london" class="${Hero4Css.backgroundImg} w-full h-full object-cover top-0"/>`}
                    init={{
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
                <div className="w-full absolute">
                    {/* <TextH1 classStyle={Hero4Css.secHeroH1} text="Security Services"></TextH1> */}
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Security Services"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    </h1>
                    {/* <TextPara text="For your personal safety" classStyle={Hero4Css.paragraphHero} /> */}
                    {/* <p style={{ lineHeight:`28px`,marginBottom:`2em`}}> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={displayDevice ? `<p>For your personal safety</p>` : `<p class="text-xl leading-none">For your personal safety</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                    {/* </p> */}
                    <div className={Hero4Css.secHeroBtn}>
                        {/* <ButtonText classStyle={Hero4Css.secBtn} text="Contact Us"></ButtonText> */}
                        <button className={Hero4Css.allbtn}>

                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='hero4ed3'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Contact Us"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}


const HeroSection4ComponentVideo = ({ displayDevice }) => {
    const editorRef = useRef(null);
    const inputRef = useRef(null);
    const [source, setSource] = useState(heroVideo);
    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0];
        if (event.target.files[0] !== undefined) {
            const url = URL.createObjectURL(file);
            setSource(url);
        }
    };
    const handleChoose = (event) => {
        inputRef.current.click();
    };
    return (
        <>
            <section className={displayDevice ? `${Hero4Css.sectionHero} relative` : `${Hero4Css.sectionHeroM} relative`}
            // style={{ background: color }}
            >
                <input
                    ref={inputRef}
                    className="VideoInput_input absolute top-0 left-0 z-10 toBeRemoved"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                />
                {/* <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
                <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" className="absolute top-0 left-0 z-10" multiple /> */}
                {!source && <button className="toBeRemoved" onClick={handleChoose}>Choose</button>}
                {source && (
                    <video
                        className="VideoInput_video absolute top-0"
                        width="100%"
                        height="100%"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline={true}
                        src={source}
                    />
                )}
                <div className="w-full absolute">
                    {/* <TextH1 classStyle={Hero4Css.secHeroH1} text="Security Services"></TextH1> */}
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="Security Services"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px"
                            }}
                        />
                    </h1>
                    {/* <TextPara text="For your personal safety" classStyle={Hero4Css.paragraphHero} /> */}
                    {/* <p style={{ lineHeight:`28px`,marginBottom:`2em`}}> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={displayDevice ? `<p>For your personal safety</p>` : `<p class="text-xl leading-none">For your personal safety</p>`}
                        init={{
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                        }}
                    />
                    {/* </p> */}
                    <div className={Hero4Css.secHeroBtn}>
                        {/* <ButtonText classStyle={Hero4Css.secBtn} text="Contact Us"></ButtonText> */}
                        <button className={Hero4Css.allbtn}>

                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='hero4ed3'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Contact Us"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"

                                }}
                            />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}