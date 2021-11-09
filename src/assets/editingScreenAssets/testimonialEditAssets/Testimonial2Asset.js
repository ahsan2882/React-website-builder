import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Image1 from './person.png'
export default function Testimonial2Asset() {
    const editorRef = useRef(null);
    return (
        <>
            <section class="text-gray-50 bg-UB-400 ">
                <div class="container p-3 ">
                    <h1 class="text-3xl font-medium title-font text-gray-50 mb-12 text-center ">
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="What our fantastic user say"
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
                                content_style:
                                    "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                            }}
                        />
                    </h1>
                </div>

                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
                    <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Image1} />
                    <p class="leading-relaxed py-50">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset2"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk.
                             Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
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
                                content_style:
                                    "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                            }}
                        />
                        </p>

                    <h2 class="text-gray-50 font-medium title-font tracking-wider text-sm mt-5">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset3"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="Alex"
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
                                content_style:
                                    "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                            }}
                        />
                      </h2>
                    <p class="text-gray-50">
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="testimonial2asset4"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue=" Designer"
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
                                content_style:
                                    "@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mohave:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');",
                            }}
                        />
                       </p>
                </div>

            </section>
        </>
    )
}
