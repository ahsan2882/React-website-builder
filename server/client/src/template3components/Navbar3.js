import React, { useRef, useState } from 'react'
// import { GithubPicker } from 'react-color';
// import logo from '../assets/template3images/logo-security-red-black.png'
import Navbar3moduleCss from './Navbar3.module.css'
import { Editor } from '@tinymce/tinymce-react';
export default function Navbar3({ displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    const navSectorArray = [
        "CONSTRUCTION",
        "CORPORATE",
        "INDUSTRIAL",
        "RETAIL",
        "LOGISTICS",
        "PROPERTY MANAGEMENT"
    ]
    const navServiceArray = [
        "STATIC SECURITY",
        "MOBILE PATROLLING",
        "CCTV MONITORING",
        "LOCK & UNLOCK",
        "VACANT UNIT CHECKS",
        "TECHNOLOGY PRODUCT",
        "MANNED GUARDING",
        "SUPPORT & MANAGEMENT",
        "EVENT SECURITY",
        "GUARD HOUSE",
        "24/7 SURVEILLANCE"
    ]
    const [navSector, setNavSector] = useState(navSectorArray)
    const [navServices, setNavServices] = useState(navServiceArray)
    const removeService = (index) => {
        let newArray = [...navServices];
        newArray.splice(index, 1);
        setNavServices([...newArray])
    }
    const removeSector = (index) => {
        let newArray = [...navSector];
        newArray.splice(index, 1);
        setNavSector([...newArray])
    }
    const addSector = () => {
        let newArray = [...navSector];
        newArray.push(navSectorArray[0]);
        setNavSector([...newArray])
    }
    const addService = () => {
        let newArray = [...navServices];
        newArray.push(navServiceArray[0]);
        setNavServices([...newArray])
    }
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
                                        {navSector.map((items, indexs) => <li>{items}<button className="toBeRemoved" onClick={() => removeSector(indexs)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addSector()}><i className="fas fa-plus"></i> ADD NEW SECTOR</button></li>
                                    </ul>
                                </li>
                                <li className={`${Navbar3moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar3moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navServices.map((item, index) => <li>{item}<button className="toBeRemoved" onClick={() => removeService(index)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SERVICE</button></li>
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
