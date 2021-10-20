import React, { useRef } from "react";
import Accreditation2Css from "./Accre2Asset.module.css";
import { Editor } from "@tinymce/tinymce-react";
import accre1 from "../../template3images/accre1.png";
import accre2 from "../../template3images/accre2.png";
import accre3 from "../../template3images/accre3.png";
import accre4 from "../../template3images/accre4.png";
import accre5 from "../../template3images/accre5.png";
import accre6 from "../../template3images/accre6.png";
import accre7 from "../../template3images/accre7.png";

export default function Accre2Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <div>
                <section className={Accreditation2Css["heading-sec"]}>
                    <div className={Accreditation2Css["heading-main-title"]}>
                        <div className={Accreditation2Css["sub-title"]}>
                            {/* <h3>We are Verified by Govt</h3> */}
                            <Editor
                                onInit={(evt, editor) => (editorRef.current = editor)}
                                inline={true}
                                key="accre2asset1"
                                tinymceScriptSrc={
                                    process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                }
                                initialValue="<h3>We are Verified by Govt</h3>"
                                init={{
                                    menubar: false,
                                    toolbar:
                                        "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                        "alignright alignjustify | fontselect",
                                    fontsize_formats:
                                        "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats:
                                        "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                                }}
                            />
                        </div>
                        {/* <h1>Accreditation</h1> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre2asset2"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="<h1>Accreditation</h1>"
                            init={{
                                menubar: false,
                                toolbar:
                                    "bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter " +
                                    "alignright alignjustify | fontselect",
                                fontsize_formats:
                                    "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats:
                                    "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
                            }}
                        />
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
                                        tinymceScriptSrc={
                                            process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                                        }
                                        initialValue={`<img src=${accre1} alt="accre1" />`}
                                        init={{
                                            menubar: false,
                                            plugins: [
                                                'image'
                                            ],
                                            toolbar: 'image',
                                            images_upload_url: 'postAcceptor.php'
                                        }}
                                    />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre2} alt="accre2" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre3} alt="accre3" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre4} alt="accre4" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre5} alt="accre5" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre6} alt="accre6" />
                                </div>
                                <div className={Accreditation2Css["a-card"]}>
                                    <img src={accre7} alt="accre7" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
