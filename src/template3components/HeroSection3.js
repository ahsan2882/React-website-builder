import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react'
import { GithubPicker } from 'react-color';

export default function HeroSection3({displayDevice, showPopup, overSection}) {
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
