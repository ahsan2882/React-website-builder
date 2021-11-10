import React, { useRef } from 'react'
import Navbar2moduleCss from './Navbar2.module.css'
import { Editor } from '@tinymce/tinymce-react';

export const Navbar2 = ({ displayDevice, linksfunc }) => {
    const editorRef = useRef();

    return (
        <>
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
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        <li>{linksfunc ? <a href="about.html#our-vison">OUR VISION</a> : <>OUR VISION</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-experience">OUR EXPERIENCE</a> : <>OUR EXPERIENCE</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-policies">OUR POLICIES</a> : <>OUR POLICIES</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-prices">OUR PRICES</a> : <>OUR PRICES</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-accreditations">OUR ACCREDITATIONS</a> : <>OUR ACCREDITATIONS</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-team">OUR TEAM</a> : <>OUR TEAM</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-partners">OUR PARTNERS</a> : <>OUR PARTNERS</>}</li>
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SECTORS
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        <li>{linksfunc ? <a href="construction.html">CONSTRUCTION</a> : <>CONSTRUCTION</>}</li>
                                        <li>{linksfunc ? <a href="corporate.html">CORPORATE</a> : <>CORPORATE</>}</li>
                                        <li>{linksfunc ? <a href="industrial.html">INDUSTRIAL</a> : <>INDUSTRIAL</>}</li>
                                        <li>{linksfunc ? <a href="retail.html">RETAIL</a> : <>RETAIL</>}</li>
                                        <li>{linksfunc ? <a href="logistics.html">LOGISTICS</a> : <>LOGISTICS</>}</li>
                                        <li>{linksfunc ? <a href="property-management.html">PROPERTY MANAGEMENT</a> : <>PROPERTY MANAGEMENT</>}</li>
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {/* {navbar2.serviceLinks.map((item, index) => <li>{linksfunc ? <a href={`${item.toLowerCase().replace(" &", "").replace(" ", "-")}.html`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)} */}
                                        <li>{linksfunc ? <a href="static-security.html">STATIC SECURITY</a> : <>STATIC SECURITY</>}</li>
                                        <li>{linksfunc ? <a href="mobile-patrolling.html">MOBILE PATROLLING</a> : <>MOBILE PATROLLING</>}</li>
                                        <li>{linksfunc ? <a href="cctv-monitoring.html">CCTV MONITORING</a> : <>CCTV MONITORING</>}</li>
                                        <li>{linksfunc ? <a href="lock-unlock.html">LOCK & UNLOCK</a> : <>LOCK & UNLOCK</>}</li>
                                        <li>{linksfunc ? <a href="vacant-unit-checks.html">VACANT UNIT CHECKS</a> : <>VACANT UNIT CHECKS</>}</li>
                                        <li>{linksfunc ? <a href="technology-product.html">TECHNOLOGY PRODUCT</a> : <>TECHNOLOGY PRODUCT</>}</li>
                                        <li>{linksfunc ? <a href="manned-guarding.html">MANNED GUARDING</a> : <>MANNED GUARDING</>}</li>
                                        <li>{linksfunc ? <a href="support-management.html">SUPPORT & MANAGEMENT</a> : <>SUPPORT & MANAGEMENT</>}</li>
                                        <li>{linksfunc ? <a href="event-security.html">EVENT SECURITY</a> : <>EVENT SECURITY</>}</li>
                                        <li>{linksfunc ? <a href="guard-house.html">GUARD HOUSE</a> : <>GUARD HOUSE</>}</li>
                                        <li>{linksfunc ? <a href="24-7-surveillance.html">24/7 SURVEILLANCE</a> : <>24/7 SURVEILLANCE</>}</li>
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
