import React, { useRef, useState, useEffect } from 'react'
import Navbar2moduleCss from './Navbar2.module.css'
import { Editor } from '@tinymce/tinymce-react';
import { newService2Comp, newSector2Comp } from '../myComponents/AllTemplates';

export const Navbar2 = ({ displayDevice, linksfunc, nav2Service, setNav2Services, nav2Sector, setNav2Sector, templateComponents, setTempComp  }) => {
    const editorRef = useRef();
    const [menuValueSect, setmenuValueSect] = useState("")
    const [editMenuSect, setEditMenuSect] = useState({ index: -5, setValue: true });
    const [menuValueServ, setmenuValueServ] = useState("")
    const [editMenuServ, setEditMenuServ] = useState({ index: -5, setValue: true });
    const [navServices, setNavServices] = useState([])
    const [navSector, setNavSector] = useState([])
    useEffect(() => {
        setNavServices([...nav2Service])
    }, [nav2Service])
    useEffect(() => {
        setNavSector([...nav2Sector])
    }, [nav2Sector])
    const removeService = (index) => {
        let newArray = [...nav2Service];
        newArray.splice(index, 1);
        setNav2Services([...newArray])
    }
    const addService = () => {
        let newArray = [...nav2Service];
        newArray.push("NEW SERVICE");
        setNav2Services([...newArray])
        let obj = {
            groupName: "services",
            pageName: "NEW SERVICE",
            pageSections: [newService2Comp.Staticsecuritybanner, newService2Comp.StaticsecurityDescription, newService2Comp.Footer2]
        }
        let mainobj = templateComponents;
        mainobj.template2Components.push(obj)
        setTempComp(mainobj)
    }



    
    // const removeService = (index) => {
    //     let newArray = [...navServices];
    //     newArray.splice(index, 1);
    //     setNavServices([...newArray])
    // }
    const removeSector = (index) => {
        let newArray = [...nav2Sector];
        newArray.splice(index, 1);
        setNav2Sector([...newArray])
    }
    const addSector = () => {
        let newArray = [...nav2Sector];
        newArray.push("NEW SECTOR");
        setNav2Sector([...newArray])
        let obj = {
            groupName: "sectors",
            pageName: "NEW SECTOR",
            pageSections: [newSector2Comp.ConstHero, newSector2Comp.Construction, newSector2Comp.Footer2]
        }
        let mainobj = templateComponents;
        mainobj.template2Components.push(obj)
        setTempComp(mainobj)
    }
    // const addService = () => {
    //     let newArray = [...navServices];
    //     newArray.push(navServiceArray[0]);
    //     setNavServices([...newArray])
    // }
    const linkactivate = (item) => {
        return (
            <>
                {linksfunc ? <a href={item.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")} > {item}</a> : <>{item}</>}
            </>
        )
    }
    const changeServNav = (index, value, oldValue) => {
        let newArray = [...nav2Service];
        newArray.splice(index, 1, value);
        setNav2Services([...newArray])
        let mainobj = templateComponents;
        // mainobj.template2Components.filter((item) => item.pageName.toUpperCase() === oldValue.toUpperCase())[0].pageName = value;
        mainobj.template2Components.filter((item) => item.groupName === "services").filter((item) => item.pageName.toUpperCase() === oldValue.toUpperCase())[0].pageName = value;
        console.log(mainobj.template2Components)
        setTempComp(mainobj)
        setEditMenuServ({ index: -5, setValue: false })
    }
    const changeSectNav = (index, value, oldValue) => {
        let newArray = [...nav2Sector];
        newArray.splice(index, 1, value);
        setNav2Sector([...newArray])
        let mainobj = templateComponents;
        mainobj.template2Components.filter((item) => item.groupName === "sectors").filter((item) => item.pageName.toUpperCase() === oldValue.toUpperCase())[0].pageName = value;
        console.log(mainobj.template2Components)
        setTempComp(mainobj)
        setEditMenuSect({ index: -5, setValue: false })
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
                                        {/* {navSector.map((items, indexs) => <li className="flex justify-between items-center">{linksfunc ? <a href={items.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")}>{items}</a> : <>{items}</>}<button className="toBeRemoved" onClick={() => removeSector(indexs)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addSector()}><i className="fas fa-plus"></i> ADD NEW SECTOR</button></li> */}
                                        {navSector.map((item, index) => <li className="flex justify-between items-center">{(editMenuSect.index === index && editMenuSect.setValue)
                                            ? <>
                                                <input type="text" placeholder="Enter new name for page" onChange={(e) => setmenuValueSect(e.target.value)} />
                                                <button className="px-4 py-1 bg-BL-600 text-white" onClick={() => (menuValueSect !== "") ? changeSectNav(index, menuValueSect, item) : changeSectNav(index, item, item)}>SAVE</button>
                                            </>
                                            : linkactivate(item)}

                                            <div className={(editMenuSect.index === index && editMenuSect.setValue) ? "hidden toBeRemoved" : "toBeRemoved flex items-center"}>
                                                <button className="toBeRemoved mr-3" onClick={() => setEditMenuSect({ index: index, setValue: true })}><i className="fas fa-pen"></i></button>
                                                <button className="toBeRemoved" onClick={() => removeSector(index)}><i className="fas fa-trash-alt"></i></button>
                                            </div>

                                        </li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addSector()}><i className="fas fa-plus"></i> ADD NEW SECTOR</button></li>
                                    </ul>
                                </li>
                                <li className={`${Navbar2moduleCss.menu} px-4 py-4`}>SERVICES
                                    <ul className={`${Navbar2moduleCss.subMenu} hidden text-black bg-white absolute top-16 font-normal`}>
                                        {/* {navServices.map((item, index) => <li className="flex justify-between items-center">{linksfunc ? <a href={item.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")}>{item}</a> : <>{item}</>}<button className="toBeRemoved" onClick={() => removeService(index)}><i className="ml-4 fas fa-trash-alt"></i></button></li>)}
                                        <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SERVICE</button></li> */}
                                        {navServices.map((item, index) => <li className="flex justify-between items-center">{(editMenuServ.index === index && editMenuServ.setValue)
                                            ? <>
                                                <input type="text" placeholder="Enter new name for page" onChange={(e) => setmenuValueServ(e.target.value)} />
                                                <button className="px-4 py-1 bg-BL-600 text-white" onClick={() => menuValueServ !== "" ? changeServNav(index, menuValueServ, item) : changeServNav(index, item, item)}>SAVE</button>
                                            </>
                                            : linkactivate(item)}

                                            <div className={(editMenuServ.index === index && editMenuServ.setValue) ? "hidden toBeRemoved" : "toBeRemoved flex items-center"}>
                                                <button className="toBeRemoved mr-3" onClick={() => setEditMenuServ({ index: index, setValue: true })}><i className="fas fa-pen"></i></button>
                                                <button className="toBeRemoved" onClick={() => removeService(index)}><i className="fas fa-trash-alt"></i></button>
                                            </div>

                                        </li>)}
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
