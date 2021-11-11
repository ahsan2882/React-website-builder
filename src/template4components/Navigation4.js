import { Editor } from '@tinymce/tinymce-react';
import React, { useRef, useState } from 'react';
import Nav4Css from './Navigation4.module.css'

export default function Navigation4({ displayDevice, linksfunc }) {
    const [activeHamburger, setActiveHamburger] = useState(false);
    // const [navbarOpt, setNavOpt] = useState([]);
    const toggleHamburger = () => {
        setActiveHamburger(state => !state);
    }
    const [navSector, setNavSector] = useState([
        "CONSTRUCTION",
        "CORPORATE",
        "INDYSTRIAL",
        "RETAIL",
        "LOGISTICS",
        "PROPERTY MANAGEMENT"
    ])
    const [navServices, setNavServices] = useState([
        "STATIC SECURITY",
        "MOBILE PATROLLING",
        "CCTV MONITORING",
        "LOCK & UNLOCK",
        "VACANT UNIT CHECKS",
        "TECHNOLOGY PRODUCT",
        "MANNED GUARDING",
        "SUPPORT & MANAGEMENT",
        "EVENT SECURITY"
    ])
    const editorRef = useRef(null);
    return (

        <>
            <div className="w-full" style={{ backgroundColor: 'rgba(0, 193, 207, 0.75)' }}>
                <div className={`flex justify-between items-center py-6 px-6 ${Nav4Css.container1}`}>
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        inline={true}
                        key='AccreIm1'
                        initialValue={`<img src="https://i.ibb.co/Xyt25vh/thefnflogo.png" alt="client 1" class="w-52 h-16 object-cover"/>`}
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
                    <nav>
                        <ul className={displayDevice ? `${Nav4Css.navBar}` : `${Nav4Css.navBarM}`} style={(!displayDevice && activeHamburger) ? { left: "0" } : null}>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>{linksfunc ? <a href="index.html">HOME</a> : <>HOME</>}</li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}> {linksfunc ? <a href="about.html">ABOUT US</a> : <> ABOUT US</>}</li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownServiceListItem}`}>SERVICES
                                <ul className={`${Nav4Css.dropdownServicesContent} list-none p-0 absolute`}>
                                    {navServices.map((item) => <li className={`${Nav4Css.servicesLinks} flex mt-8 mx-4 mb-0`}>
                                        <h4 className={Nav4Css.navigationLinkContent}>{item}</h4>
                                    </li>)}
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black ${Nav4Css.dropdownSectorsListItem}`}>SECTORS
                                <ul className={`${Nav4Css.dropdownSectorsContent} list-none p-0 absolute`}>
                                    {navSector.map((items) => <li className={`${Nav4Css.sectorsLink} flex mt-8 mx-4 mb-0`}><h4 className={Nav4Css.navigationLinkContent}>{items}</h4></li>)}
                                </ul>
                            </li>
                            <li className={`${Nav4Css.navBarLink} hover:text-black`}>
                                <button className="text-white"> {linksfunc ? <a href="contact.html"> CONTACT Us</a> : <>CONTACT Us</>}</button>
                            </li>
                        </ul>
                        <section className={displayDevice ? `${Nav4Css.hamburger}` : (activeHamburger ? `${Nav4Css.hamburgerMobile} ${Nav4Css.active}` : `${Nav4Css.hamburgerMobile}`)} onClick={() => toggleHamburger()}>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                            <span className={Nav4Css.bar}></span>
                        </section>
                    </nav>
                </div>
            </div>
        </>
    )
}