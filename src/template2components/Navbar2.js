import React, { useRef } from 'react'
import Navbar2moduleCss from './Navbar2.module.css'
import logo from '../assets/template2images/securoty_d.png'
import { Editor } from '@tinymce/tinymce-react';

export const Navbar2 = () => {
    const editorRef = useRef();
    return (
        <>
            <header>
                <nav className={`${Navbar2moduleCss.navbar}`}>
                    <div className={`${Navbar2moduleCss.navbar1}`}>
                        {/* <i className="fas fa-bars"></i> */}
                        <div className={`${Navbar2moduleCss['nav-links']}`}>
                            <div className={`${Navbar2moduleCss['sidebar-logo']}`}>
                                {/* <span className={`${Navbar2['logo-name']}`}>Security</span> */}
                                <i style={{display:`none`}} className="fas fa-times"></i>
                            </div>
                            <ul className={`${Navbar2moduleCss.menus}`}>
                                <li><a className={`${Navbar2moduleCss.waves}`} href={2}>
                                    <span>H</span>
                                    <span>o</span>
                                    <span>m</span>
                                    <span>e</span>
                                </a></li>
                                <li>
                                    <a className={`${Navbar2moduleCss.waves}`} href={2}>
                                        <span>A</span>
                                        <span>b</span>
                                        <span>o</span>
                                        <span>u</span>
                                        <span>t</span>
                                    </a>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li><a className="" href={2}>Our Vision</a></li>
                                        <li><a className="" href={2}>Our Experience</a></li>
                                        <li><a className="" href={2}>Our Policies</a></li>
                                        <li><a className="" href={2}>Our Prices</a></li>
                                        <li><a className="" href={2}>Our Accreditations</a></li>
                                        <li><a className="" href={2}>Our Team</a></li>
                                        <li><a className="" href={2}>Our Partners</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a className={`${Navbar2moduleCss.waves}`} href={2}>
                                        <span>S</span>
                                        <span>e</span>
                                        <span>c</span>
                                        <span>t</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>s</span>
                                    </a>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li><a className="" href={2}>Construction</a></li>
                                        <li><a className="" href={2}>Corporate</a></li>
                                        <li><a className="" href={2}>Industrial</a></li>
                                        <li><a className="" href={2}>Retail</a></li>
                                        <li><a className="" href={2}>Logistics</a></li>
                                        <li><a className="" href={2}>Property Management</a></li>

                                    </ul>
                                </li>
                                <li>
                                    <a className={`${Navbar2moduleCss.waves}`} href={2}>
                                        <span>S</span>
                                        <span>e</span>
                                        <span>r</span>
                                        <span>v</span>
                                        <span>i</span>
                                        <span>c</span>
                                        <span>e</span>
                                        <span>s</span>
                                    </a>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li><a className="" href={2}>Static Security</a></li>
                                        <li><a className="" href={2}>Mobile Patrolling</a></li>
                                        <li><a className="" href={2}>CCTV Monitoring</a></li>
                                        <li><a className="" href={2}>Lock & unlock</a></li>
                                        <li><a className="" href={2}>Vacant Unit Checks</a></li>
                                        <li><a className="" href={2}>Technology Product</a></li>
                                        <li><a className="" href={2}>Manned Guarding</a></li>
                                        <li><a className="" href={2}>Support & Management</a></li>
                                        <li><a className="" href={2}>Event Security</a></li>
                                        <li>
                                            <a className="" href={2}>Guard House</a>
                                        </li>
                                        <li>
                                            <a className="" href={2}
                                            >24/7 Surveillance</a
                                            >
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={`${Navbar2moduleCss.logo}`}><a href={2}>
                            
                            
                            
                            {/* <img className={`${Navbar2moduleCss['logopng']}`} src={logo} alt="this is" /> */}
                            <Editor
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    inline={true}
                                    key='Navbar(2)44'
                                    initialValue={`<img src="${logo}"  alt="client 1" class="w-20 h-20 object-cover"/>`}
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
                                </a></div>
                        <div className={`${Navbar2moduleCss['nav-links']}`}>

                            <ul className={`${Navbar2moduleCss.menus}`}>



                                <li><a className={`${Navbar2moduleCss.waves}`} href="Contact.html">
                                    <span>C</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span>
                                </a></li>

                                <li><span className={`${Navbar2moduleCss['call-to-action waves']}`} href={2}>
                                    <span><i className="fas fa-phone-alt"></i></span>
                                    <span>0</span>
                                    <span>9</span>
                                    <span>0</span>
                                    <span>-</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>-</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>5</span>
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
