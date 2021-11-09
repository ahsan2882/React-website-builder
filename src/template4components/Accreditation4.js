
import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import { GithubPicker } from 'react-color';
import Accre4Css from './Accreditation4.module.css';

export default function Accreditation4({ showPopup, overSection, displayDevice }) {
    const [currentBackground, setCurrentBackground] = useState("white");
    const editorRef = useRef(null);
    const Accreditation4Array = [
        "https://i.ibb.co/cXXJYMk/client1.png",
        "https://i.ibb.co/dBjdw5Z/client2.png",
        "https://i.ibb.co/4P60VRN/client3.png",
        "https://i.ibb.co/92C0Hwn/client4.png"
    ]
    const [accred4, setAccred4] = useState([...Accreditation4Array]);
    const [accredKey, setAccredKey] = useState("")
    const addAccred = () => {
        setAccred4([...accred4, Accreditation4Array[1]])
    }
    const removeAccred = (index) => {
        let newArray = [...accred4];
        newArray.splice(index, 1);
        setAccred4([...newArray])
    }
    return (
        <>
            <section className="py-32 px-0 w-full" style={{ background: currentBackground }}>
                <div className={displayDevice ? `${Accre4Css.containerMain}` : `${Accre4Css.containerMain} p-0.5`}>
                    <div className="flex flex-col items-center py-10 px-0">
                        {/* <TextH2 classStyle={`${Accre4Css.accreMainH2} text-2xl`} text="we are verified" /> */}
                        <h2 className="Accre4Css" style={{ fontWeight: `400` }}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='accre4ed1'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="we are verified"
                                init={{
                                    forced_root_block: "",
                                    menubar: false,
                                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                        'alignright alignjustify | fontselect | lineheight',
                                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif;Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva",

                                }}
                            />
                        </h2>
                        {/* <TextH1 classStyle={`${Accre4Css.accreMainH1} text-5xl text-center`} text="Our Accreditation" /> */}
                        <h1 className="Accre4Css">
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='accre4ed2'
                                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                initialValue="Our Accreditation"
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
                    <div className={displayDevice ? `${Accre4Css.flexWrapped}` : `${Accre4Css.flexWrappedM}`}>
                        {accred4.map((item, index) =>
                            <div className={`${Accre4Css.accreCardWrapper} bg-black m-5 relative`}
                                onMouseEnter={() => setAccredKey(String(index))}
                                onMouseLeave={() => setAccredKey("")}
                            >
                                <div className="p-5 flex flex-col items-center">
                                    <Editor
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        inline={true}
                                        key={`Accre4Im${index}`}
                                        initialValue={`<img src="${item}" alt="client 3" class="w-72 h-36 object-cover"/>`}
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
                                    <h3 className="text-center">
                                        <Editor
                                            onInit={(evt, editor) => editorRef.current = editor}
                                            inline={true}
                                            key={`Accre4H${index}`}
                                            tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                                            initialValue="Lorem ipsum"
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
                                <div className="toBeRemoved" style={accredKey === String(index) ? { position: "absolute", top: "2%", right: "2%" } : { display: "none" }}>
                                    <button className="w-8 h-8 bg-BL-600" onClick={() => removeAccred(index)}><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                        )}
                        <button onClick={() => addAccred()} className="border-2 border-gray-400 text-gray-500 toBeRemoved w-40 h-40 flex justify-evenly flex-col text-center items-center">
                            <i className="fas fa-plus text-3xl"></i>
                            <h2>Add another Accreditation</h2>
                        </button>
                    </div>
                </div>
            </section>
            <div className="toBeRemoved" style={(overSection && showPopup) ? { position: "absolute", top: "5rem", right: "5rem", zIndex: "9999999" } : { display: "none" }}>
                <GithubPicker
                    triangle="top-right"
                    onChangeComplete={(color) => {
                        setCurrentBackground(color.hex);
                    }}
                />
            </div>
        </>
    );
}
