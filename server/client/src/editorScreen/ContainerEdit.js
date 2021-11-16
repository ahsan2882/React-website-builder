import React, { useEffect, useState } from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import lz from "lzutf8";
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'
import all from '../myComponents/AllTemplates';
// import fs from 'fs'
// import {templateComponents} from '../myComponents/AllTemplates';

export default function ContainerEdit({ nav1Service, setNav1Services, nav2Service, setNav2Services, nav2Sector, setNav2Sector, templateNum, setFileName, setLinksfunc, overlayPresent, linksfunc, saveClicked, setToSave, setSaveClicked, setDisplayDevice, displayDevice, setFileData, templatePage, chatInclude }) {
    const [updateChildren, setUpdateChildren] = useState([])
    const [overSection, setOverSection] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false)
    const [sectionKey, setSectionKey] = useState(null);
    const [htmlString, setHtmlString] = useState("");
    const [cssString, setCssString] = useState("");
    const [compressed, setCompressed] = useState("");
    const [curTemplate, setCurTemplate] = useState(null);
    const [fileName, setfilename] = useState(null);
    const [templateComponents, setTempComp] = useState({
        template1Components: [
            {
                groupName: "home",
                pageName: "Home",
                pageSections: [all.Header1, all.Service1, all.Testimonials1, all.Prizing1, all.Guard1, all.News1, all.Program1, all.About1, all.Footer1]
            },
            {
                groupName: "about",
                pageName: "About",
                pageSections: [all.HomeAbout, all.Experince1, all.ProgramAbout, all.Company1, all.Advantage, all.Prizing1, all.Guard1, all.Partner, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Static Security",
                pageSections: [all.Staticsecurity, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Mobile Patrolling",
                pageSections: [all.Mobilepatrolling3, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "CCTV Monitoring",
                pageSections: [all.Cctvmonetoring3, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Lock & Unlock",
                pageSections: [all.Lockandunlock, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Vacant Unit Checks",
                pageSections: [all.Vacantunitcheck, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Technology Product",
                pageSections: [all.Technologyproduct3, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Manned Guarding",
                pageSections: [all.Mannedguarding, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Support & Management",
                pageSections: [all.SupportandManagment, all.Footer1]
            },
            {
                groupName: "services",
                pageName: "Event Security",
                pageSections: [all.Eventsecurity3, all.Footer1]
            },
            {
                groupName: "contact",
                pageName: "Contact",
                pageSections: [all.Contact1banner, all.Contactform1, all.Footer1]
            }
        ],
        template2Components: [
            {
                groupName: "home",
                pageName: "Home",
                pageSections: [all.Hero2, all.Services2, all.Pricing2, all.Blog2, all.Client2, all.Guard2, all.Program2, all.About2, all.Accreditation2, all.Footer2]
            },
            {
                groupName: "about",
                pageName: "About",
                pageSections: [all.About2bannercomponent, all.About2Vision, all.About2service, all.Pricing2, all.Guard2, all.Accreditation2, all.About2policy, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Construction",
                pageSections: [all.ConstHero, all.Construction, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Corporate",
                pageSections: [all.Corporatehero, all.Corporate, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Industrial",
                pageSections: [all.Industrialhero, all.Industrial, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Retail",
                pageSections: [all.Retailhero, all.Retail, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Logistics",
                pageSections: [all.LogisticBanner, all.LogisticSector, all.Footer2]
            },
            {
                groupName: "sectors",
                pageName: "Property Management",
                pageSections: [all.Propertyhero, all.Property, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Static Security",
                pageSections: [all.Staticsecuritybanner, all.StaticsecurityDescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Mobile Patrolling",
                pageSections: [all.Mobilepatrollingbanner, all.Mobilemonetoringdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "CCTV Monitoring",
                pageSections: [all.Cctvmonetoringbanner, all.Cctvmonetoringdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Lock & Unlock",
                pageSections: [all.Lockandunlockbanner, all.Lockandunlockdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Vacant Unit Checks",
                pageSections: [all.Vacantunitcheckbanner, all.Vacantunitdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Technology Product",
                pageSections: [all.Technologyproductbanner, all.Technologyproductdecription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Manned Guarding",
                pageSections: [all.Mannedguardingbanner, all.Mannedguardingdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Support & Management",
                pageSections: [all.SupportManagmentbanner, all.Supportmanagmentdescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Event Security",
                pageSections: [all.Eventsecuritybanner, all.Eventsecuritydescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "Guard House",
                pageSections: [all.Guardhousebanner, all.Guardhousedescription, all.Footer2]
            },
            {
                groupName: "services",
                pageName: "24/7 Surveillance",
                pageSections: [all.Servillancebanner, all.ServillanceDescription, all.Footer2]
            },
            {
                groupName: "contact",
                pageName: "Contact",
                pageSections: [all.Contact2, all.Form2, all.Feedback2, all.Footer2]
            },

        ],
        template3Components: [
            {
                groupName: "home",
                pageName: "Home",
                pageSections: [all.Navbar3, all.HeroSection3, all.Services3, all.Guard3, all.Latestnews3, all.Ourprograms3, all.About3, all.Accrediation3, all.Footer3]
            },
            {
                groupName: "about",
                pageName: "About",
                pageSections: [all.Navbar3, all.About3banner, all.Aboutvission, all.AboutService3, all.Pricing3About, all.Guard3, all.Accrediation3, all.AboutPolicy3, all.Footer3]
            },
            {
                groupName: "contact",
                pageName: "Contact",
                pageSections: [all.Navbar3, all.Contact3banner, all.Contact3form, all.Contact3feedback, all.Footer3]
            }
        ],
        template4Components: [
            {
                groupName: "home",
                pageName: "Home",
                pageSections: [all.Navigation4, all.HeroSection4, all.AboutUs4, all.Pricing4, all.Services4, all.OurGuards4, all.Blog4, all.Accreditation4, all.Subscribe4, all.FooterContact4, all.BottomFooter4]
            },
            {
                groupName: "about",
                pageName: "About",
                pageSections: [all.Navigation4, all.Abouthero, all.VisionAbout, all.AboutServices, all.PolicyAbout, all.OurGuards4, all.Partners4, all.Pricing4, all.Accreditation4, all.Subscribe4, all.FooterContact4, all.BottomFooter4]
            },
            {
                groupName: "contact",
                pageName: "Contact",
                pageSections: [all.Navigation4, all.Contacthero, all.AboutUs4, all.Form, all.Feedback, all.Subscribe4, all.FooterContact4, all.BottomFooter4]
            },
        ]
    })
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            let valueString = Object.values(item)[0];
            let Comp = assetObject[valueString]
            setUpdateChildren([...updateChildren, Comp])
        },
        collect: monitor => ({
            canDrop: !!monitor.canDrop()
        })
    })
    // let readMores = document.getElementsByClassName("readMoreText");
    // let inde = 0;
    // while (inde < readMores.length) {
    //     readMores[inde].classList.add("hidden")
    //     inde++
    // }
    
    const temp = templateNum;
    useEffect(() => {
        let allParas = document.getElementsByTagName("p");
        let inde = 0;
        while (inde < allParas.length) {
            if (allParas[inde] !== undefined) {
                // console.log(allParas[inde].innerHTML)
                if (allParas[inde].innerHTML.length > 100) {
                    console.log(allParas[inde].innerHTML)
                }
            }
            inde++;
        }
        let filename = "";
        let array = [];
        if (temp === 1) {
            // console.log(templateComponents.template1Components)
            array = [...templateComponents.template1Components.filter((item) => item.pageName.toUpperCase() === String(templatePage.toUpperCase())).map((item) => item.pageSections.map((items) => items))[0]]
            setUpdateChildren(array)
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 1");
        }
        else if (temp === 2) {
            // console.log(templateComponents.template2Components)
            array = [...templateComponents.template2Components.filter((item) => item.pageName.toUpperCase() === String(templatePage.toUpperCase())).map((item) => item.pageSections.map((items) => items))[0]]
            setUpdateChildren(array)
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace("/", "").replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 2");
        }
        else if (temp === 3) {
            setUpdateChildren(templateComponents.template3Components.filter((item) => item.pageName.toUpperCase() === String(templatePage.toUpperCase())).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 3");
        }
        else if (temp === 4) {
            setUpdateChildren(templateComponents.template4Components.filter((item) => item.pageName.toUpperCase() === String(templatePage.toUpperCase())).map((item) => item.pageSections.map((items) => items))[0])
            if (templatePage === "Home") {
                setfilename("index.html")
            }
            else {
                filename = String(templatePage).toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")
                setfilename(filename);
            }
            setCurTemplate("Template 4");
        }
        else if (temp === 0) {
            setUpdateChildren([])
            setfilename("index.html")
            setCurTemplate("new template");
        }
    }, [temp, templatePage, setfilename, templateComponents.template1Components, templateComponents.template2Components, templateComponents.template3Components, templateComponents.template4Components])
    useEffect(() => {
        setDisplayDevice(true);


        if (linksfunc) {
            setHtmlString(getHTMLData())
            setCssString(getCSSData())
            setCompressed(lz.encodeBase64(lz.compress(htmlString)))
        }
        setToSave({
            filename: fileName,
            templateID: curTemplate,
            templateData: compressed
        })
        setFileData({
            html: `${htmlString}`,
            css: `${cssString}`
        })
        setFileName(fileName)
        console.log(htmlString)

    }, [curTemplate, setToSave, saveClicked, setSaveClicked, setFileData, setDisplayDevice, fileName, setFileName, setLinksfunc, linksfunc, htmlString, cssString, compressed])

    const getHTMLData = () => {

        let newDocString = document.getElementsByClassName("getInnerHTML")[0].innerHTML;
        let newDoc = new DOMParser().parseFromString(newDocString, 'text/html');
        let removed = newDoc.getElementsByClassName("toBeRemoved")
        while (removed.length > 0) {
            removed[0].parentNode.removeChild(removed[0]);
        }
        let editableFalse = newDoc.getElementsByClassName("mce-content-body")
        let i = 0
        while (i < editableFalse.length) {
            editableFalse[i].setAttribute("contenteditable", "false")
            i++
        }
        let vid = document.getElementsByTagName("video")[0]
        if (vid !== undefined) {
            let att = document.createAttribute("muted");
            att.value = "true";
            vid.setAttributeNode(att)
        }
        let htmlStrings = newDoc.getElementsByClassName("filterHTML")[0].innerHTML
        htmlStrings = htmlStrings.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        console.log(htmlStrings)
        return htmlStrings;
    }

    const getCSSData = () => {
        
        let cssStrings ="h"
        return cssStrings;
    }
    const moveUp = (indexC) => {
        let newArray = [...updateChildren];
        if (indexC === 0) {
            setUpdateChildren([...newArray])
        }
        else {
            let currentCom = newArray[indexC];
            newArray[indexC] = newArray[indexC - 1];
            newArray[indexC - 1] = currentCom;
            setUpdateChildren([...newArray])
        }
        
    }
    const moveDown = (indexC) => {
        let newArray = [...updateChildren];
        if (indexC === (updateChildren.length - 1)) {
            setUpdateChildren([...newArray])
        }
        else {
            let currentCom = newArray[indexC];
            newArray[indexC] = newArray[indexC + 1];
            newArray[indexC + 1] = currentCom;
            setUpdateChildren([...newArray])
        }
        
        
    }
    const removeComponent = (indexC) => {
        let newArray = [...updateChildren];
        newArray.splice(indexC, 1);
        setUpdateChildren([...newArray])
    }
    return (
        <>
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`} id='editorScreen' style={displayDevice ? { maxWidth: "80vw" } : { maxWidth: "500px" }}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                <div className={`${ContainerEditCss.editing} mx-auto overflow-y-auto overflow-x-hidden`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)` } : null}>

                    <div className="getInnerHTML">
                        <section className="filterHTML">
                            {updateChildren.map((ItemX, index) => {
                                return (
                                    <>
                                        <section key={index}
                                            onMouseEnter={() => {
                                                if ( ( (temp === 1 || temp === 3 || temp === 0 || temp === 4) && index !== 0) || (temp === 2) ) {
                                                    setOverSection(true);
                                                    setSectionKey(index)
                                                }
                                            }}
                                            onMouseLeave={() => {
                                                setOverSection(false);
                                                setShowPopUp(false);
                                            }}
                                            className="relative">
                                            <ItemX setTempComp={setTempComp} templateComponents={templateComponents} setNav1Services={setNav1Services} nav2Service={nav2Service} setNav2Services={setNav2Services} nav2Sector={nav2Sector} setNav2Sector={setNav2Sector} nav1Service={nav1Service} displayDevice={displayDevice} linksfunc={linksfunc} overSection={(overSection && sectionKey === index) ? true : false} showPopup={showPopUp} />
                                            <div className="toBeRemoved" style={displayDevice ? null : { display: "none" }}>
                                                <div className="flex w-52 justify-evenly items-center" style={(overSection && sectionKey === index) ? { position: "absolute", top: "1rem", right: "4rem", zIndex: "9999999" } : { display: "none" }}>
                                                    <button className="p-3 bg-BL-600" onClick={() => moveUp(index)}><i className="fas fa-arrow-up text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => moveDown(index)}><i className="fas fa-arrow-down text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => removeComponent(index)}><i className="fas fa-trash-alt text-white"></i></button>
                                                    <button className="bg-BL-600 p-3" onClick={() => {
                                                        setShowPopUp((popup) => !popup);
                                                    }}><i className="far fa-images text-white"></i></button>
                                                </div>
                                            </div>
                                        </section>
                                    </>
                                )
                            })
                            }
                            {chatInclude ? <WhatsAppChat /> : null}
                        </section>
                    </div>
                </div>

            </section>

        </>

    );
}



const WhatsAppChat = () => {
    return (
        <>
            <a href="https://wa.me/2348100000000" className="fixed w-16 h-16 text-white text-center text-3xl bg-green-600 flex justify-center items-center rounded-full" style={{ right: "12%", bottom: "10%" }} target="_blank" rel="noopener noreferrer" ><i className="fa fa-whatsapp whatsapp-icon"></i></a>
        </>
    )
}

