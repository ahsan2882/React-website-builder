import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react'
import Hero3Css from './HeroSection3.module.css'
import { GithubPicker } from 'react-color';

export default function HeroSection3({ displayDevice, showPopup, overSection }) {
    const [backgroundType, setBackgroundType] = useState("video");
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState("black");
    return (
        <>
            <section className="overflow-hidden">
                {/* {backgroundType === "color" ? <HeroSection4ComponentColorImage color={currentBackgroundColor} /> : (backgroundType === "image" ? <HeroSection4ComponentColorImage image={currentBackgroundImage} /> : <HeroSection4ComponentVideo />)} */}
                {backgroundType === "color" ? <HeroSection3ComponentColor color={currentBackgroundColor} displayDevice={displayDevice} /> : null}
                {backgroundType === "image" ? <HeroSection3ComponentImage displayDevice={displayDevice} /> : null}
                {backgroundType === "video" ? <HeroSection3ComponentVideo displayDevice={displayDevice} /> : null}
                <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                    <div className="flex flex-col justify-center items-center border-2 border-black w-64 rounded-lg bg-white">
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
    )
}


const HeroSection3ComponentColor = ({ color, displayDevice }) => {
    const editorRef = useRef(null);
    return (
        <>

        </>
    )
}

const HeroSection3ComponentImage = ({ displayDevice }) => {
    const editorRef = useRef(null);
    return (
        <>

        </>
    )
}

const HeroSection3ComponentVideo = ({ displayDevice }) => {
    const editorRef = useRef(null);
    const inputRef = useRef(null);
    const [source, setSource] = useState("https://drive.google.com/uc?id=17arHWOvLAXnMF5molg_mlKVc7M17mosS");
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
            <section className={displayDevice ? ` w-full h-screen relative ${Hero3Css.sectionHero}` : `${Hero3Css.sectionHeroM} relative`}>
                <input
                    ref={inputRef}
                    className="VideoInput_input absolute top-0 left-0 z-10 toBeRemoved"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                />
                {!source && <button className="toBeRemoved" onClick={handleChoose}>Choose</button>}
                {source && (
                    <video
                        className="VideoInput_video absolute top-0"
                        width="100%"
                        height="100%"
                        autoPlay={true}
                        loop={true}
                        playsInline={true}
                        src={source}
                    />
                )}
                <div className="absolute flex flex-col w-full justify-center items-center top-1/4 text-center">
                    <h1 className="text-8xl w-1/2 text-white font-semibold">
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='hero4ed1'
                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                            initialValue="SECURITY GUARD"
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
                    </h1>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                        initialValue={displayDevice ? `<p class="text-4xl mt-8 tracking-widest">For your personal <span class="text-black bg-white">security</span></p>` : `<p class="text-2xl leading-none">For your personal <span class="text-black bg-white">security</span></p>`}
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
                    <div className="flex justify-evenly items-center w-1/2 mt-12 text-white">
                        <button className="bg-black px-5 py-3 border-r-2 border-RD-500"> CONTACT NOW </button>
                        <button className="bg-black px-5 py-3 border-r-2 border-white"> DISCOVER MORE </button>
                    </div>
                </div>
            </section>
        </>
    )
}