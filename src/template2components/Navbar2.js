import React, { useRef, useState } from 'react'
import Navbar2moduleCss from './Navbar2.module.css'
import { Editor } from '@tinymce/tinymce-react';

export const Navbar2 = ({ displayDevice, linksfunc }) => {
    const editorRef = useRef();
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
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}</li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SECTORS
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navSector.map((items, indexs) => <li className="flex justify-between items-center">{linksfunc ? <a href={items.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")}>{items}</a> : <>{items}</>}<button className="toBeRemoved" onClick={() => removeSector(indexs)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addSector()}><i className="fas fa-plus"></i> ADD NEW SECTOR</button></li>
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {navServices.map((item, index) => <li className="flex justify-between items-center">{linksfunc ? <a href={item.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")}>{item}</a> : <>{item}</>}<button className="toBeRemoved" onClick={() => removeService(index)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SERVICE</button></li>
                                    </ul>
                                </li>
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
