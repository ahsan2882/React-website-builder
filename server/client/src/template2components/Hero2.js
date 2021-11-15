import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';
import { Editor } from '@tinymce/tinymce-react';

import Hero2moduleCss from './Hero2.module.css'
import { Navbar2 } from './Navbar2';
export const Hero2 = ({ displayDevice, showPopup, overSection, linksfunc, nav2Service, setNav2Services, nav2Sector, setNav2Sector }) => {
    const [currentBackgroundColor, setCurrentBackgroundColor] = useState("#c0272d");
    const [backgroundType, setBackgroundType] = useState("color");

    return (
        <>
            
            <section className="overflow-hidden">
                {backgroundType === "color" ? <Hero2ColorComponent color={currentBackgroundColor} nav2Service={nav2Service} setNav2Services={setNav2Services} nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} displayDevice={displayDevice} linksfunc={linksfunc} /> : null}
                {backgroundType === "image" ? <Hero2ImageComponent displayDevice={displayDevice} nav2Service={nav2Service} setNav2Services={setNav2Services} nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} linksfunc={linksfunc} /> : null}
                <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "3" } : { display: "none" }}>
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

                    </div>
                </div>
            </section>
        </>
    )
}

const Hero2ColorComponent = ({ color, displayDevice, linksfunc, nav2Service, setNav2Services, nav2Sector, setNav2Sector  }) => {
    const editorRef = useRef(null);
    return (
        <>
            <section style={{ background: color }} className={`${Hero2moduleCss.heroSection} relative`}>
                <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc} nav2Service={nav2Service} setNav2Services={setNav2Services} nav2Sector={nav2Sector} setNav2Sector={setNav2Sector}/>
                <img src="https://i.ibb.co/VwB7mhG/Path-7.png" alt="Pah 7" className="w-full h-full" />
                <section className="absolute bottom-8 right-1/4" style={{zIndex:"2"}}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='hero4ed2'
                        initialValue={`<img src="https://i.ibb.co/9Wt8w45/guarg.png" alt="logo" class="${Hero2moduleCss.guardImg} object-cover"/>`}
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
                </section>
                <h1 className="absolute text-2xl text-white" style={{ left: "15%", top: "30%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="SECURITY"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                        }}
                    />
                </h1>
                <h1 className={`absolute text-white font-bold my-0 ${Hero2moduleCss.mainHead}`} style={{ zIndex: "1", left: "14%", top: "35%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="GUARD"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                        }}
                    />
                </h1>
            </section>
        </>
    )
}


const Hero2ImageComponent = ({ displayDevice, linksfunc, nav2Service, setNav2Services, nav2Sector, setNav2Sector  }) => {
    const editorRef = useRef(null);
    return (
        <>
            <section className={`relative ${Hero2moduleCss.heroSection}`}>
                <Navbar2 displayDevice={displayDevice} linksfunc={linksfunc}
                    nav2Service={nav2Service} setNav2Services={setNav2Services}
                    nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} />
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='hero4ed2'
                    initialValue={`<img src="https://i.ibb.co/r786FyQ/guard1.png" alt="guard1" class=" w-full h-full object-cover"/>`}
                    init={{
                        plugins: [
                            "link"
                        ],
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | fontselect | lineheight',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                    }}
                />
                <h1 className="absolute text-2xl text-white" style={{ left: "15%", top: "30%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="SECURITY"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                        }}
                    />
                </h1>
                <h1 className={`absolute text-white font-bold my-0 ${Hero2moduleCss.mainHead}`} style={{ zIndex: "1", left: "14%", top: "35%" }}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='Hero2Ed1'
                        initialValue="GUARD"
                        init={{
                            plugins: [
                                "link"
                            ],
                            forced_root_block: "",
                            menubar: false,
                            toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | fontselect | lineheight',
                            fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                            font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

                        }}
                    />
                </h1>
            </section>
        </>
    )
}