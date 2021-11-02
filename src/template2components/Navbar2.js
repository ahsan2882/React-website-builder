import React, { useRef } from 'react'
import Navbar2moduleCss from './Navbar2.module.css'
import { Editor } from '@tinymce/tinymce-react';
import navbar2 from './nav2Edits';

const EditLink = ({ item, index }) => {
    const editorRef = useRef();
    return (
        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='NavEd2'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue={`${item}`}
                init={{
                    plugins: [
                        "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | fontselect',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                }}
            />
        </>
    )
}

export const Navbar2 = ({ displayDevice, linksfunc }) => {
    const editorRef = useRef();

    return (
        <>
            {/* <header>
                <nav className={`${Navbar2moduleCss.navbar}`}>
                    <div className={`${Navbar2moduleCss.navbar1}`}>
                        <div className={`${Navbar2moduleCss['nav-links']}`}>
                            <div className={`${Navbar2moduleCss['sidebar-logo']}`}>
                            </div>
                            <ul className={`${Navbar2moduleCss.menus}`}>
                                <li className={`${Navbar2moduleCss.waves}`}>
                                    <span>H</span>
                                    <span>o</span>
                                    <span>m</span>
                                    <span>e</span></li>
                                <li className={`${Navbar2moduleCss.waves}`}>
                                        <span>A</span>
                                        <span>b</span>
                                        <span>o</span>
                                        <span>u</span>
                                        <span>t</span>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li className="text-black" >Our Vision</li>
                                        <li className="text-black" >Our Experience</li>
                                        <li className="text-black" >Our Policies</li>
                                        <li className="text-black" >Our Prices</li>
                                        <li className="text-black" >Our Accreditations</li>
                                        <li className="text-black" >Our Team</li>
                                        <li className="text-black" >Our Partners</li>
                                    </ul>
                                </li>

                                <li className={`${Navbar2moduleCss.waves}`}>
                                        <span>S</span>
                                        <span>e</span>
                                        <span>c</span>
                                        <span>t</span>
                                        <span>o</span>
                                        <span>r</span>
                                        <span>s</span>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li className="" >Construction</li>
                                        <li className="" >Corporate</li>
                                        <li className="" >Industrial</li>
                                        <li className="" >Retail</li>
                                        <li className="" >Logistics</li>
                                        <li className="" >Property Management</li>

                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.waves}`}>
                                        <span>S</span>
                                        <span>e</span>
                                        <span>r</span>
                                        <span>v</span>
                                        <span>i</span>
                                        <span>c</span>
                                        <span>e</span>
                                        <span>s</span>
                                    <ul className={`${Navbar2moduleCss['sub-menu']}`}>
                                        <li className="" >Static Security</li>
                                        <li className="" >Mobile Patrolling</li>
                                        <li className="" >CCTV Monitoring</li>
                                        <li className="" >Lock & unlock</li>
                                        <li className="" >Vacant Unit Checks</li>
                                        <li className="" >Technology Product</li>
                                        <li className="" >Manned Guarding</li>
                                        <li className="" >Support & Management</li>
                                        <li className="" >Event Security</li>
                                        <li className="" >Guard House
                                        </li>
                                        <li className="">24/7 Surveillance</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={`${Navbar2moduleCss.logo}`}>
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
                            /></div>
                        <div className={`${Navbar2moduleCss['nav-links']}`}>

                            <ul className={`${Navbar2moduleCss.menus}`}>



                                <li className={`${Navbar2moduleCss.waves}`} >
                                    <span>C</span>
                                    <span>o</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>a</span>
                                    <span>c</span>
                                    <span>t</span></li>

                                <li><span className={`${Navbar2moduleCss['call-to-action']} ${Navbar2moduleCss.waves}`} href={2}>
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
                                <img src="https://i.ibb.co/Lpk5L5z/securoty-d.png" alt="securoty-d" border="0">
                            </ul>
                        </div>
                    </div>
                </nav>
            </header> */}
            <header className="absolute top-0 left-0 z-10 w-full h-20 font-bold">
                <nav>
                    <ul className={`flex justify-evenly items-center ${Navbar2moduleCss.navbar2}`}>
                        <li className={displayDevice ? "hidden" : "block"}>
                            <section style={{ cursor: "pointer" }}>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                                <div className="w-6 h-1 my-1 mx-auto transition-all duration-500 bg-white"></div>
                            </section>
                        </li>
                        <li className={Navbar2moduleCss.hide}>
                            <ul className={displayDevice ? "flex items-center justify-around text-white" : "hidden"} style={{ width: "30rem" }}>
                                <li className="px-4 py-4">{linksfunc ? <a href="index.html" className="no-underline">HOME</a> : <>HOME</>}</li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>ABOUT
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navbar2.aboutLinks.map((item, index) => <li>{linksfunc ? <a href={`about.html#${item.toLowerCase().replace(" ", "-")}`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)}
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SECTORS
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navbar2.sectorLinks.map((item, index) => <li>{linksfunc ? <a href={`${item.toLowerCase().replace(" &", "").replace(" ", "-")}.html`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)}
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navbar2.serviceLinks.map((item, index) => <li>{linksfunc ? <a href={`${item.toLowerCase().replace(" &", "").replace(" ", "-")}.html`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)}
                                    </ul>
                                </li>
                                {/* {navbar2.map((item) => item.subSections.length > 1 ? <li className="px-4 py-4">{item.isLink && linksfunc ? <a>{item.sectionName.toUpperCase()}</a> : <>{item.sectionName.toUpperCase()}</>}</li> : <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>{item.sectionName.toUpperCase()}<ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>{item.subSections.map((items) => <li>{ it}</li>)}</ul></li>)} */}

                            </ul>
                        </li>
                        <li>
                            <Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='abouted1'
                                initialValue={`<img src="https://i.ibb.co/Lpk5L5z/securoty-d.png" alt="logo" class="w-20 h-20 object-cover"/>`}
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
                        <li className={Navbar2moduleCss.hide}>
                            <ul className={displayDevice ? "flex items-center justify-around text-white" : "hidden"} style={{ width: "30rem" }}>
                                <li className="px-4 py-4">{linksfunc ? <a href="contact.html" className="no-underline">CONTACT</a> : <>CONTACT</>}</li>
                                <li className="px-4 py-4">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/msoeawqm.json"
                                        trigger="hover"
                                        colors="primary:#ffffff,secondary:#c0272d"
                                        style={{ width: "40px", height: "40px" }} />
                                </li>
                                <li className="px-4 py-4">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/slkvcfos.json"
                                        trigger="hover"
                                        colors="primary:#ffffff,secondary:#c0272d"
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
