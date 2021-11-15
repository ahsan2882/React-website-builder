import React, { useRef } from 'react'
import MannedguardingdescriptionCss from './Mannedguardingdescription.module.css'
// import Img1 from '../../../assets/template2images/services33.jpg'
import { Editor } from '@tinymce/tinymce-react';
export default function Mannedguardingdescription() {
    const editorRef = useRef(null);
    return (
        <>
        <section class={MannedguardingdescriptionCss['service-content']}>
            <div class={MannedguardingdescriptionCss['service-container']}>
                <div class={MannedguardingdescriptionCss['serv-head']}>
                    <h1>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue="Service"
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
                        /></h1>
                    <h1 style={{ "color": "#c0272d" }}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue="Description"
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
                <div class={MannedguardingdescriptionCss['service-grid']}>
                    <div class={MannedguardingdescriptionCss.sg1}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue={`<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, Lorem ipsum dolor sit amet consectetur error?</p> `}
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
                    </div>
                    <div class={MannedguardingdescriptionCss.sg2}>


                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='EventSecurity4'
                            initialValue={`<img src="https://i.ibb.co/Kqv4DKK/services33.jpg" alt="support" class="w-96 h-72 object-cover"/>`}
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



                    </div>
                    <div class={MannedguardingdescriptionCss.sg3}>

                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue={`<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor
                        culpa ad distinctio magni delectus.culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident
                        voluptas sint obcaecati pariatur dolor
                        culpa ad distinctio magni delectus</p> `}
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
                    </div>
                    <div class={MannedguardingdescriptionCss.sg4}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue={`<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consequatur.</p> `}
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
                    </div>
                    <div class={MannedguardingdescriptionCss.sg5}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue={`<p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, autem?</p> `}
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




                    </div>
                    <div class={MannedguardingdescriptionCss.sg6}>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='Guard1'
                            initialValue={`<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae non eveniet corrupti?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> `}
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


                    </div>
                </div>

            </div>
        </section>
        <section> 
        <div className={`${MannedguardingdescriptionCss['icon-content']} ${MannedguardingdescriptionCss['container365']}`}>
            <div className={MannedguardingdescriptionCss['iconized']}>

                <lord-icon src="https://cdn.lordicon.com/ifclergl.json" trigger="loop-on-hover"
                    colors="primary:#121331,secondary:#c0272d" style={{"width":"70px","height":"70px"}}>
                </lord-icon>
                <h3>Consistency</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className={MannedguardingdescriptionCss['iconized']}>

                <lord-icon src="https://cdn.lordicon.com/urhcgqxz.json" trigger="loop-on-hover"
                    colors="primary:#121331,secondary:#c0272d" style={{"width":"700px","height":"700px"}}>
                </lord-icon>
                <h3>Improvement</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className={MannedguardingdescriptionCss['iconized']}>

                <lord-icon src="https://cdn.lordicon.com/dflgefov.json" trigger="loop-on-hover"
                    colors="primary:#121331,secondary:#c0272d" style={{"width":"70px","height":"700px"}}>
                </lord-icon>
                <h3>Brances</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
            <div className={MannedguardingdescriptionCss['iconized']}>

                <lord-icon src="https://cdn.lordicon.com/yyecauzv.json" trigger="loop-on-hover"
                    colors="primary:#121331,secondary:#c0272d" style={{"width":"70px","height":"70px"}}>
                </lord-icon>
                <h3>Privacy Policy</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </div>
        </div>
    </section>
        </>
        
    )
}
