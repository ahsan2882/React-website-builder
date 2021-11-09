import React, { useRef } from 'react'
// import { GithubPicker } from 'react-color';
import logo from '../assets/template3images/logo-security-red-black.png'
import Navbar3moduleCss from './Navbar3.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Navbar3({ displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    return (
        <>
            {/* <section className={`${Navbar3moduleCss.navbar3}`}>
<div className={`${Navbar3moduleCss['row-nav']}`}>
    <div className={`${Navbar3moduleCss.col1}`}>
<Editor
                                onInit={(evt, editor) => editorRef.current = editor}
                                inline={true}
                                key='Service4'
                                initialValue={` <img src="${logo}" alt="image" class="w-12 h-12 object-cover"/>`}
                                init={
                                    {
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

<ul className={`${Navbar3moduleCss.list}`}>
<li> Home </li>
<li> About </li>
<li> Services </li>
<li> Sectors </li>
<li> Contact us </li>
<button>
020 7946 0020
</button>
</ul>
</div>





</section> */}

            <header className="absolute top-0 left-0 z-10 w-full h-20 font-bold">
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
                                initialValue={`<img src="${logo}" alt="logo" class="w-20 h-20 object-cover"/>`}
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
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {/* {navbar2.aboutLinks.map((item, index) => <li>{linksfunc ? <a href={`about.html#${item.toLowerCase().replace(" ", "-")}`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)} */}
                                        <li>{linksfunc ? <a href="about.html#our-vison">OUR VISION</a> : <>OUR VISION</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-experience">OUR EXPERIENCE</a> : <>OUR EXPERIENCE</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-policies">OUR POLICIES</a> : <>OUR POLICIES</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-prices">OUR PRICES</a> : <>OUR PRICES</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-accreditations">OUR ACCREDITATIONS</a> : <>OUR ACCREDITATIONS</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-team">OUR TEAM</a> : <>OUR TEAM</>}</li>
                                        <li>{linksfunc ? <a href="about.html#our-partners">OUR PARTNERS</a> : <>OUR PARTNERS</>}</li>
                                    </ul>
                                </li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>SECTORS
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {/* {navbar2.sectorLinks.map((item, index) => <li>{linksfunc ? <a href={`${item.toLowerCase().replace(" &", "").replace(" ", "-")}.html`} className="no-underline">{item.toUpperCase()}</a> : <>{item.toUpperCase()}</>}</li>)} */}
                                        <li>{linksfunc ? <a href="construction.html">CONSTRUCTION</a> : <>CONSTRUCTION</>}</li>
                                        <li>{linksfunc ? <a href="corporate.html">CORPORATE</a> : <>CORPORATE</>}</li>
                                        <li>{linksfunc ? <a href="industrial.html">INDUSTRIAL</a> : <>INDUSTRIAL</>}</li>
                                        <li>{linksfunc ? <a href="retail.html">RETAIL</a> : <>RETAIL</>}</li>
                                        <li>{linksfunc ? <a href="logistics.html">LOGISTICS</a> : <>LOGISTICS</>}</li>
                                        <li>{linksfunc ? <a href="property-management.html">PROPERTY MANAGEMENT</a> : <>PROPERTY MANAGEMENT</>}</li>
                                    </ul>
                                </li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
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
                                {/* {navbar2.map((item) => item.subSections.length > 1 ? <li className="px-4 py-4">{item.isLink && linksfunc ? <a>{item.sectionName.toUpperCase()}</a> : <>{item.sectionName.toUpperCase()}</>}</li> : <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>{item.sectionName.toUpperCase()}<ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>{item.subSections.map((items) => <li>{ it}</li>)}</ul></li>)} */}
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
