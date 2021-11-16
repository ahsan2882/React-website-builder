import { Editor } from '@tinymce/tinymce-react'
import React, { useRef } from 'react'

export default function Accre4Asset({ displayDevice }) {
    const editorRef = useRef(null);
    return (
        <>
            <div className="container mx-auto pt-16">
                <div className={displayDevice ? "w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16" : "mx-auto mb-16"}>
                    <h1 className=" xl:text-1xl md:text-1xl text-xl text-center text-gray-800 font-normal mb-5 pt-4">
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4asset1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
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

                    </h1>
                    <p className={displayDevice ? "text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto" : "text-base xl:text-4xl text-center text-gray-600 font-bold"}>
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4asset1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue="ACCREDITATION"
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
                    </p>
                </div>
                <div className={displayDevice ? "xl:py-16 lg:py-16 md:py-16 sm:py-16 px-4 flex flex-wrap" : "px-4 flex flex-wrap"}>
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center": "w-6/12 flex justify-center border-gray-200  pb-16 items-center" }>
                        {/* <img src="https://cdn.tuk.dev/assets/adidas-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image1"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/adidas-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center": "w-6/12 flex justify-center border-gray-200 pb-16 items-center" }>
                        {/* <img src="https://cdn.tuk.dev/assets/channel-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image2"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/channel-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center" : "w-6/12 flex justify-center border-gray-200 pb-16 pt-4 items-center"}>
                        {/* <img src="https://cdn.tuk.dev/assets/nike-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image4"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/nike-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  border-gray-200 xl:pb-10 pb-16 items-center" :"w-6/12  flex justify-center  border-gray-200   pb-16 items-center"}>
                        {/* <img src="https://cdn.tuk.dev/assets/toyota-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image5"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/toyota-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center" : "w-6/12  flex justify-center border-gray-200  items-center"}>
                    <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image6"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-32 h-28" src="https://cdn.tuk.dev/assets/gs1-dark.png" alt="logo-security-red-black" />`}
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
                        {/* <img src="https://cdn.tuk.dev/assets/gs1-dark.png" alt /> */}
                    </div>
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center" : "w-6/12  flex justify-center border-gray-200  items-center"}>
                        {/* <img src="https://cdn.tuk.dev/assets/berry-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image7"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/berry-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center" : "w-6/12 flex justify-center  border-gray-200  pt-16"}>
                        {/* <img src="https://cdn.tuk.dev/assets/min-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image8"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/min-dark.png" alt="logo-security-red-black" />`}
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
                    <div className={displayDevice ? "w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16":"w-6/12 flex justify-center  border-gray-200  pt-16"}>
                        {/* <img src="https://cdn.tuk.dev/assets/honda-dark.png" alt /> */}
                        <Editor
                            onInit={(evt, editor) => (editorRef.current = editor)}
                            inline={true}
                            key="accre4image8"
                            tinymceScriptSrc={
                                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                            }
                            initialValue={`<img class="object-cover object-center w-40 h-28" src="https://cdn.tuk.dev/assets/honda-dark.png" alt="logo-security-red-black" />`}
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
                </div>
            </div>
        </>
    )
}
