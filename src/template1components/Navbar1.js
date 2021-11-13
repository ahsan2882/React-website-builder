import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Navbar1.module.css'
import Modal from '../myComponents/Modal';
// import tinymce from 'tinymce/tinymce';

export default function Navbar1({ displayDevice, linksfunc, setNav1Services, nav1Service }) {
  // const [showModal, setshowModal] = useState(false)
  const navService1Array = [
    "STATIC SECURITY",
    "MOBILE PATROLLING",
    "CCTV MONITORING",
    "LOCK & UNLOCK",
    "VACANT UNIT CHECKS",
    "TECHNOLOGY PRODUCT",
    "MANNED GUARDING",
    "SUPPORT & MANAGEMENT",
    "EVENT SECURITY"
  ]
  // const openModal = (index) => {
  //   setshowModal(true);
  // }
  // const closeModal = () => {
  //   setshowModal(false);
  // }
  const editorRef = useRef(null);
  const [navService, setNavService] = useState([])
  useEffect(() => {
    setNavService([...nav1Service])

  }, [nav1Service])
  const removeService = (index) => {
    let newArray = [...nav1Service];
    newArray.splice(index, 1);
    setNav1Services([...newArray])
  }
  const addService = () => {
    let rand = Math.floor(0 + Math.random() * 8);
    let newArray = [...nav1Service];
    newArray.push(navService1Array[rand]);
    setNav1Services([...newArray])
  }
  // const editService = (item, index) => {
  //   let newArray = [...nav1Service];
  //   newArray.splice(index, 1);
  //   setNav1Services([...newArray])
  // }
  return (
    <>

      <header className={`${Navbar1moduleCss.template1Header}`}>
        <nav>
          <div className={displayDevice ? `${Navbar1moduleCss.navbar}` : `${Navbar1moduleCss.navbarM}`}>

            <div className={displayDevice ? `${Navbar1moduleCss['sidebar-logo']}` : `${Navbar1moduleCss['sidebar-logoM']}`}>
              <button style={{ fontWeight: `600` }} >
                <Editor
                  onInit={(evt, editor) => editorRef.current = editor}
                  inline={true}
                  key='Header1'
                  initialValue="Security"
                  init={{
                    plugins: [
                      "link"
                    ],
                    forced_root_block: "",
                    menubar: false,
                    toolbar: 'bold italic underline | link | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | fontselect | lineheight',
                    fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                    font_formats: "Roboto=roboto, sans-serif, serif; Mohave=mohave, sans-serif, serif;Open Sans=open sans, sans-serif, serif;Lato=lato, sans-serif, serif; Red Hat Mono=red hat mono, sans-serif, serif; Montserrat=montserrat, sans-serif, serif; Roboto Condensed=roboto condensed, sans-serif, serif; Source Sans Pro= source sans pro, sans-serif, serif; Dongle=dongle, sans-serif, serif; Poppins=poppins, sans-serif, serif; Oswald=oswald, sans-serif, serif; Roboto Mono=roboto mono, sans-serif, serif; Raleway=raleway, sans-serif, serif; Ubuntu=ubuntu, sans-serif, serif; Merriweather=merriweather, sans-serif, serif",
                  }}
                />
              </button></div>
            <div className={displayDevice ? `${Navbar1moduleCss['nav-links']}` : `${Navbar1moduleCss['nav-linksM']}`}>
              <ul className={displayDevice ? `${Navbar1moduleCss.menus}` : `${Navbar1moduleCss.menusM}`}>
                <li><button className={`${Navbar1moduleCss.line}`}>{linksfunc ? <a href="index.html">HOME</a> : <>
                  {/* <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    initialValue="HOME"
                    key="Nav1Edit1"
                    id="Nav1Edit1"
                    init={{
                      forced_root_block: "",
                      menubar: false,
                    }}
                  /> */}
                  HOME
                </>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`} >{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`}>SERVICES</button>
                  <ul className={displayDevice ? `${Navbar1moduleCss['sub-menu']}` : `${Navbar1moduleCss['sub-menuM']}`}>
                    {navService.map((item, index) => <li className="flex justify-between items-center">{linksfunc ? <a href={item.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")}>{item}</a> : <>{item}</>}
                      <div className="toBeRemoved flex items-center">
                        {/* <button className="toBeRemoved mr-3" onClick={() => openModal(index)}><i className="fas fa-pen"></i></button> */}
                        <button className="toBeRemoved" onClick={() => removeService(index)}><i className="fas fa-trash-alt"></i></button>
                      </div>
                      {/* <Modal show={showModal} handleClose={closeModal} >
                        <p>Modal</p>
                      </Modal> */}
                    </li>)}
                    <li className="flex justify-between items-center toBeRemoved"><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SERVICE</button></li>
                  </ul>
                </li>
                <li><button className={`${Navbar1moduleCss.line}`} >CONTACT US</button></li>
                <li><lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#00d4ff"
                  style={{ width: "40px", height: "40px" }}>
                </lord-icon></li>
                <li><lord-icon
                  src="https://cdn.lordicon.com/slkvcfos.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#00d4ff"
                  style={{ width: "40px", height: "40px" }}>
                </lord-icon></li>
                <li>
                  
                  <button className={`${Navbar1moduleCss['contact-btn']}`}>
                    <Editor
                      onInit={(evt, editor) => editorRef.current = editor}
                      inline={true}
                      key='Header1'
                      initialValue={`<span> <i class="fas fa-phone-alt"> </i> 020 7946 0020 </span>`}
                      init={{
                        forced_root_block: "",
                        menubar: false,
                        toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                          'alignright alignjustify | fontselect',
                        fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                        font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                      }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
