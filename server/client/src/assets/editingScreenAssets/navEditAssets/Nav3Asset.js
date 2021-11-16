import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Nav3Css.module.css'
// import logo from './logo4.png'
export default function Nav3Asset({displayDevice, linksfunc}) {
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
      {/* <header class="text-gray-600 body-font bg-red-50 mt-10 mb-10">
        <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-center">
          <img class="h-16 w-18" src="https://i.ibb.co/5BkBySM/logo4.png" alt="logo4" />
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-evenly">
            <a href={2} class="mr-5 hover:text-white  p-3 bg-red-800 rounded-md text-white font-semibold tracking-wide">HOME</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition text-red-800 font-semibold">ABOUT US</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition font-semibold text-red-800">SERVICES</a>
            <a href={2} class="mr-5 hover:text-white hover:bg-red-800 p-3 rounded-md transition font-semibold text-red-800">CONTACT US</a>

          </nav>

        </div>
      </header> */}
      <header className={`${Navbar1moduleCss.template1Header} bg-red-100`}>
        <nav>
          <div className={displayDevice ? `${Navbar1moduleCss.navbar}` : `${Navbar1moduleCss.navbarM}`}>

            <div className={displayDevice ? `${Navbar1moduleCss['sidebar-logo']}` : `${Navbar1moduleCss['sidebar-logoM']}`}>
              {/* <img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" className="h-16 w-16 ml-8" /> */}
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='News3'
                initialValue={`<img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" class="h-16 w-16" />`}
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
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
