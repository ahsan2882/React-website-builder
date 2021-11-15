import React, { useRef } from "react";
import Accreditation2Css from "./Accre2Asset.module.css";
import { Editor } from "@tinymce/tinymce-react";
// import accre1 from "../../template3images/accre1.png";
// import accre2 from "../../template3images/accre2.png";
// import accre3 from "../../template3images/accre3.png";
// import accre4 from "../../template3images/accre4.png";
// import accre5 from "../../template3images/accre5.png";
// import accre6 from "../../template3images/accre6.png";
// import accre7 from "../../template3images/accre7.png";

export default function Accre2Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <div>
                <section className={Accreditation2Css["heading-sec"]}>
                    <div className={Accreditation2Css["heading-main-title"]}>
                        <div className={Accreditation2Css["sub-title"]}>
                            {/* <h3>We are Verified by Govt</h3> */}
                            <h3>
                                <Editor
                                    onInit={(evt, editor) => (editorRef.current = editor)}
                                    inline={true}
                                    key="accre2asset1"
                                    initialValue="We are Verified by Govt"
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
                            </h3>
                        </div>
                        {/* <h1>Accreditation</h1> */}
                        <h1>
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="accre2asset2"
                                initialValue="Accreditation"
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
                    </div>
                </section>
                <section className={Accreditation2Css["accreditations-sec"]}>
                    <div className={Accreditation2Css["container-accre"]}>
                        <div className={Accreditation2Css["accre-wrapper"]}>
                            <div className={Accreditation2Css.arow}>
                                <div className={Accreditation2Css["a-card"]}>
                                    {/* <img src={accre1} alt="accre1" /> */}
                                    <Editor
                                        onInit={(evt, editor) => (editorRef.current = editor)}
                                        inline={true}
                                        key="accre2image1"
                                        initialValue={`<img src="https://i.ibb.co/h90LdSb/accre1-Copy.png" alt="accre1-Copy" />`}
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
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/P1LSWCj/accre2-Copy.png" alt="accre2-Copy" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/qDFKVh7/accre3-Copy.png" alt="accre3-Copy" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/TW5X68d/accre4-Copy.png" alt="accre4-Copy" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/fC9YRS2/accre5-Copy.png" alt="accre5-Copy" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/r4w2WG7/accre6-Copy.png" alt="accre6-Copy" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src="https://i.ibb.co/8XHPP0K/accre7-Copy.png" alt="accre7-Copy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
