
import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
// import Img1 from '../testimonialEditAssets/1.png'
// import Img2 from '../testimonialEditAssets/2.png'
// import Img3 from '../testimonialEditAssets/3.png'
export default function Testimonial4Asset({ displayDevice }) {
  const editorRef = useRef(null);


  return (
    <>
      <div className="container mx-auto pt-16 px-6">
        <div className="pb-12 pl-8 ">
          <h1 className={displayDevice ? "text-3xl xl:text-5xl font-extrabold text-gray-800 mx-auto text-center xl:text-left mb-4" : "text-3xl  font-extrabold text-gray-800 mx-auto text-center mb-4"}>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              inline={true}
              key="testimonial3asset3"
              tinymceScriptSrc={
                process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
              }
              initialValue="Hear From Our Customers"
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
          <p class="text-xl text-gray-600 xl:w-3/4 w-11/12 mx-auto xl:mx-0 text-center sm:text-left"> </p>

          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            inline={true}
            key="Footer4asset5"
            tinymceScriptSrc={
              process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
            }
            initialValue={displayDevice ? `<p class="text-xl text-gray-600 xl:w-3/4 w-11/12 mx-auto xl:mx-0 text-center sm:text-left"> I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.</p>` : `<p class="text-xl text-gray-600  w-11/12 mx-auto xl:mx-0 text-center">I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage.</p>`}
            init={{
              plugins: [
                "link"
              ],
              forced_root_block: "",
              menubar: false,
              toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                'alignright alignjustify | fontselect | lineheight',
              fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
              font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",

            }}
          />

        </div>
        <section id="carousel">
          <figure className="visible">
            <div className="flex flex-wrap justify-around">
              <div className={displayDevice ? "xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12" : "w-11/12   pb-12"}>
                <div className={displayDevice ? "shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded" : "shadow-lg mx-3  rounded"}>
                  <div className="bg-indigo-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                    <h1 className="text-xl text-white pb-1">
                      <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        inline={true}
                        key="testimonial3asset3"
                        tinymceScriptSrc={
                          process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                        }
                        initialValue="Alex Parkinson"
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
                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="testimonial3asset2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue={`<p class="text-base text-indigo-200">AlphaSquad LLC</p>
                  `}
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
                  <div className="pl-6 pr-6 pt-10 relative h-64">
                  <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">

<Editor
  onInit={(evt, editor) => editorRef.current = editor}
  inline={true}
  key='AccreIm1'
  initialValue={` <img src="https://i.ibb.co/FzMsJvZ/3.png" alt="3"  class="h-full w-full object-cover rounded-full overflow-hidden" />

  `}
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

                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="testimonial3asset2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue={`<p class="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>


                  `}
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


                    <div className="flex justify-end mt-2">
                      <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                          fill="#667EEA"
                          fill-rule="evenodd"
                          fill-opacity=".15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={displayDevice ? "xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12" : "w-11/12   pb-12"}>
                <div className={displayDevice ? "shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded" : "shadow-lg mx-3  rounded"}>
                  <div className="bg-indigo-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                    <h1 className="text-xl text-white pb-1">
                      <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        inline={true}
                        key="testimonial3asset3"
                        tinymceScriptSrc={
                          process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                        }
                        initialValue="Ashley Wilson"
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


                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="testimonial3asset2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue={`<p class="text-base text-indigo-200">i-Intellect Inc</p>
                  `}
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
                  <div className="pl-6 pr-6 pt-10 relative h-64">
                  <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">

<Editor
  onInit={(evt, editor) => editorRef.current = editor}
  inline={true}
  key='AccreIm1'
  initialValue={` <img src="https://i.ibb.co/FzMsJvZ/3.png" alt="3"  class="h-full w-full object-cover rounded-full overflow-hidden" />

  `}
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

                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="testimonial3asset2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue={`<p class="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>


                  `}
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



                    <div className="flex justify-end mt-2">
                      <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                          fill="#667EEA"
                          fill-rule="evenodd"
                          fill-opacity=".15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={displayDevice ? "xl:w-1/3 lg:w-5/12 w-11/12 sm:w-3/5 md:w-5/12 xl:pb-0 pb-12" : "w-11/12   pb-12"}>
                <div className={displayDevice ? "shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded" : "shadow-lg mx-3  rounded"}>
                  <div className="bg-indigo-700 pt-6 pb-6 pl-6 rounded-tl rounded-tr">
                    <h1 className="text-xl text-white pb-1">
                      <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        inline={true}
                        key="testimonial3asset3"
                        tinymceScriptSrc={
                          process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                        }
                        initialValue="Richard Clark"
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

                      <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        inline={true}
                        key="testimonial3asset2"
                        tinymceScriptSrc={
                          process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                        }
                        initialValue={`<p class="text-base text-indigo-200">Apple Inc</p>

                  `}
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
                  <div className="pl-6 pr-6 pt-10 relative h-64">
                    <div className="h-16 w-16 rounded-full bg-cover border-4 border-white absolute top-0 right-0 -mt-8 mr-6">

                      <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='AccreIm1'
                        initialValue={` <img src="https://i.ibb.co/FzMsJvZ/3.png" alt="3"  class="h-full w-full object-cover rounded-full overflow-hidden" />

                        `}
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

                    <Editor
                      onInit={(evt, editor) => (editorRef.current = editor)}
                      inline={true}
                      key="testimonial3asset2"
                      tinymceScriptSrc={
                        process.env.PUBLIC_URL + "/tinymce/tinymce.min.js"
                      }
                      initialValue={`<p class="text-base text-gray-600 leading-8">It really saves me time and effort. Chamer is exactly what our business has been lacking. Chamer was worth a fortune to my company.</p>


                  `}
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




                    <div className="flex justify-end mt-2">
                      <svg width="44" height="37" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.432 0c-2.339 0-4.329.821-5.97 2.463C.82 4.105 0 6.093 0 8.429c0 2.335.82 4.324 2.462 5.966 1.641 1.642 3.631 2.463 5.97 2.463 2.113 0 3.386.84 3.82 2.518.434 1.678.217 3.54-.65 5.583-.868 2.043-2.32 3.904-4.358 5.582C5.206 32.22 2.792 33.06 0 33.06V37c5.018 0 9.196-1.925 12.535-5.774 3.34-3.85 5.518-8.083 6.537-12.699 1.018-4.616.726-8.857-.878-12.725C16.591 1.934 13.337 0 8.432 0zm24.335 0c-2.34 0-4.33.821-5.97 2.463-1.642 1.642-2.462 3.63-2.462 5.966 0 2.335.82 4.324 2.462 5.966 1.64 1.642 3.63 2.463 5.97 2.463 2.113 0 3.396.84 3.848 2.518.453 1.678.236 3.54-.65 5.583-.887 2.043-2.34 3.904-4.358 5.582-2.019 1.679-4.443 2.518-7.272 2.518V37c5.018 0 9.196-1.925 12.535-5.774 3.339-3.85 5.518-8.083 6.536-12.699 1.02-4.616.727-8.857-.877-12.725C40.926 1.934 37.672 0 32.767 0z"
                          fill="#667EEA"
                          fill-rule="evenodd"
                          fill-opacity=".15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </figure>


        </section>

      </div>


    </>
  )
}
