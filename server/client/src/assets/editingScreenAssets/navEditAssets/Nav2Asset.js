import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Nav2Css.module.css'
// import logo from './logo2.png'
export default function Nav2Asset({ displayDevice, linksfunc }) {
  const editorRef = useRef(null);
  const [navService, setNavService] = useState([])
  const [menuValue, setmenuValue] = useState("")
  const [editMenu, setEditMenu] = useState({ index: -5, setValue: true });
  const removeService = (index) => {
    let newArray = [...navService];
    newArray.splice(index, 1);
    setNavService([...newArray])
  }
  const addService = () => {
    let newArray = [...navService];
    newArray.push("NEW SERVICE");
    setNavService([...newArray])
  }
  const linkactivate = (item) => {
    return (
      <>
        {linksfunc ? <a href={item.toLowerCase().replace(" &", "").replace(" ", "-").concat(".html")} > {item}</a> : <>{item}</>}
      </>
    )
  }

  const changeNav = (index, value, oldValue) => {
    let newArray = [...navService];
    newArray.splice(index, 1, value);
    setNavService([...newArray])
    setEditMenu({ index: -5, setValue: false })
  }
  return (
    <>
      {/* <header class="text-gray-600 body-font bg-green-100 mt-10 mb-10 h-20 ">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <img class="h-16 w-18" src="https://i.ibb.co/DpyxY8F/logo2.png" alt="logo2"/>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors"> HOme</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors"> Security</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">Service </a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">sectors</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-green-800  p-3 uppercase text-green-800 transition-colors">About</a>
          </nav>
          <button class="inline-flex items-center bg-green-800 border-0 py-3 px-6 focus:outline-none hover:bg-green-600 rounded text-white text-base mt-4 md:mt-0">Learn more

          </button>
        </div>
      </header> */}
      <header className={`${Navbar1moduleCss.template1Header} bg-green-100`}>
        <nav>
          <div className={displayDevice ? `${Navbar1moduleCss.navbar}` : `${Navbar1moduleCss.navbarM}`}>

            <div className={displayDevice ? `${Navbar1moduleCss['sidebar-logo']}` : `${Navbar1moduleCss['sidebar-logoM']}`}>
              {/* <img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" className="h-16 w-16 ml-8" /> */}
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='News3'
                initialValue={`<img src="https://i.ibb.co/DpyxY8F/logo2.png" alt="logo2" class="h-16 w-16" />`}
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
            </div>
            <div className={displayDevice ? `${Navbar1moduleCss['nav-links']}` : `${Navbar1moduleCss['nav-linksM']}`}>
              <ul className={displayDevice ? `${Navbar1moduleCss.menus}` : `${Navbar1moduleCss.menusM}`}>
                <li><button className={`${Navbar1moduleCss.line}`}>{linksfunc ? <a href="index.html">HOME</a> : <>HOME</>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`} >{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}</button></li>
                <li><button className={`${Navbar1moduleCss.line}`}>SERVICES</button>
                  <ul className={displayDevice ? `${Navbar1moduleCss['sub-menu']}` : `${Navbar1moduleCss['sub-menuM']}`}>

                    {navService.map((item, index) => <li className={`flex justify-between items-center`}>{(editMenu.index === index && editMenu.setValue)
                      ? <>
                        <input type="text" placeholder="Enter new name for page" onChange={(e) => setmenuValue(e.target.value)} />
                        <button className="px-4 py-1 bg-BL-600 text-white" onClick={() => menuValue !== "" ? changeNav(index, menuValue, item) : changeNav(index, item, item)}>SAVE</button>
                      </>
                      : linkactivate(item)}

                      <div className={(editMenu.index === index && editMenu.setValue) ? "hidden toBeRemoved" : "toBeRemoved flex items-center"}>
                        <button className="toBeRemoved mr-3" onClick={() => setEditMenu({ index: index, setValue: true })}><i className="fas fa-pen"></i></button>
                        <button className="toBeRemoved" onClick={() => removeService(index)}><i className="fas fa-trash-alt"></i></button>
                      </div>
                      {/* <Modal show={showModal} handleClose={closeModal} >
                        <p>Modal</p>{(editMenu.index === index && editMenu.setValue) ? <input type="text" placeholder="Enter new name for page" /> : null}
                      </Modal> */}
                    </li>)}
                    <li className="flex justify-between items-center toBeRemoved"><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SERVICE</button></li>
                  </ul>
                </li>
                <li><button className={`${Navbar1moduleCss.line}`} >CONTACT US</button></li>
                <li><lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#157300"
                  style={{ width: "40px", height: "40px" }}>
                </lord-icon></li>
                <li><lord-icon
                  src="https://cdn.lordicon.com/slkvcfos.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#157300"
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
