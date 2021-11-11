import React, { useRef } from 'react'
// import { GithubPicker } from 'react-color';
// import logo from '../assets/template3images/logo-security-red-black.png'
import Navbar3moduleCss from './Navbar3.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Navbar3({ displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    return (
        <>
            <header className="w-full h-20 font-bold">
                <nav>
                    <ul className={`flex justify-between items-center ${Navbar3moduleCss.navbar2}`}>
                        <li className={displayDevice ? "hidden" : "block"}>
                            <section style={{ cursor: "pointer" }}>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                            </section>
                        </li>
                        <li style={{marginLeft: "5rem"}}>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted1'
                                initialValue={`<img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" class="w-20 h-20 object-cover"/>`}
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
                        </li>
                        <li className={Navbar3moduleCss.hide}>
                            <ul className={displayDevice ? "flex items-center justify-around text-black" : "hidden"} style={{ width: "70rem" }}>
                                <li className="px-4 py-4">{linksfunc ? <a href="index.html" className="no-underline">HOME</a> : <>HOME</>}</li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}
                              
                                </li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>SECTORS
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        <li>CONSTRUCTION</li>
                                        <li>CORPORATE</li>
                                        <li>INDUSTRIAL</li>
                                        <li>RETAIL</li>
                                        <li>LOGISTICS</li>
                                        <li>PROPERTY MANAGEMENT</li>
                                    </ul>
                                </li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        <li>STATIC SECURITY</li>
                                        <li>MOBILE PATROLLING</li>
                                        <li>CCTV MONITORING</li>
                                        <li>LOCK & UNLOCK</li>
                                        <li>VACANT UNIT CHECKS</li>
                                        <li>TECHNOLOGY PRODUCT</li>
                                        <li>MANNED GUARDING</li>
                                        <li>SUPPORT & MANAGEMENT</li>
                                        <li>EVENT SECURITY</li>
                                        <li>ARD HOUSE</li>
                                        <li>24/7 SURVEILLANCE</li>
                                    </ul>
                                </li>
                                <li className="px-4 py-4">{linksfunc ? <a href="contact.html" className="no-underline">CONTACT</a> : <>CONTACT</>}</li>
                                <li className="px-4 py-4">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/msoeawqm.json"
                                        trigger="hover"
                                        colors="primary:#000,secondary:#c0272d"
                                        style={{ width: "40px", height: "40px" }} />
                                </li>
                                <li className="px-4 py-4">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/slkvcfos.json"
                                        trigger="hover"
                                        colors="primary:#000,secondary:#c0272d"
                                        style={{ width: "50px", height: "50px" }}>
                                    </lord-icon>
                                </li>
                                <li className="px-4 py-4"><button className="px-4 py-2 bg-white text-RD-500 rounded-xl"><i className="fas fa-phone-alt mr-2"></i>090-345-455</button></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </header>



        </>
    )
}
