import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Nav4Css.module.css'
// import logo from './logo3.png'
export default function Nav4Asset({displayDevice, linksfunc}) {
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
      {/* <header class="text-gray-600 body-font bg-black">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">

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
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">HOME</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">SERVICES</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">CONTACT US</a>
            <a href={2} class="mr-5 cursor-pointer hover:text-2xl text-white">ABOUT US</a>
          </nav>
          <button class="inline-flex items-center bg-gray-100 border-0 py-3  px-4 focus:outline-none hover:bg-black transition hover:text-white rounded-3xl text-base mt-4 md:mt-0">Learn more
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header> */}
      <header className={`${Navbar1moduleCss.template1Header} bg-black`}>
        <nav>
          <div className={displayDevice ? `${Navbar1moduleCss.navbar}` : `${Navbar1moduleCss.navbarM}`}>

            <div className="flex items-center justify-around">
              <div className={displayDevice ? `${Navbar1moduleCss['sidebar-logo']}` : `${Navbar1moduleCss['sidebar-logoM']}`}>
                {/* <img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" className="h-16 w-16 ml-8" /> */}
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
                </ul>
              </div>
            </div>
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
          </div>
        </nav>
      </header>
    </>
  )
}
