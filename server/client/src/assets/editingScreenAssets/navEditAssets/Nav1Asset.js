import React, {  useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Navbar1moduleCss from './Nav1Css.module.css'

// import logo from './logo1.png'
export default function Nav1Asset({ linksfunc, displayDevice }) {
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
      {/* <header className="text-gray-600 bg-red-100 h-36">
        <div className="container mx-auto flex p-8 flex-row md:flex-row items-center justify-between">
          <img src="https://i.ibb.co/y68gwmt/logo-security-red-black.png" alt="logo-security-red-black" className="h-16 w-16 ml-8" />
          
          <nav className=" flex items-center text-base justify-center">
            <a href={2} className="mr-5 hover:text-red text-2xl uppercase hover:border-red-900 border-b-8">Home</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">About</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8">services</a>
            <a href={2} className="mr-5 hover:text-black text-2xl uppercase hover:border-gray-900 border-b-8 transition-colors">Contact us</a>
            <i className="fas fa-search text-3xl ml-4 font-thin text-red-400"></i>
            <i className="fas fa-cart-plus text-3xl ml-6 font-thin text-red-400 "></i>
            <a className="p-3 bg-red-400 text-white text-extrabold rounded-md ml-8" href={2}> 020-7946-0020</a>
            <ul>
              <li>{linksfunc ? <a href="index.html">HOME</a> : <>HOME</>}</li>
              <li>{linksfunc ? <a href="about.html">ABOUT</a> : <>ABOUT</>}</li>
              <li>SERVICES
                <ul>
                  {service.map((item) => <li className="flex justify-between items-center">{item}<div className="flex justify-around items-center"><button><i className="fas fa-pen"></i></button><button><i className="fas fa-trash-alt"></i></button></div></li>)}
                  <li className={`flex mt-8 mx-4 mb-0 justify-between toBeRemoved`}><button onClick={() => addService()}><i className="fas fa-plus"></i> ADD NEW SECTOR</button></li>
                </ul>
              </li>
              <li>SECTORS
                <ul>

                </ul>
              </li>
              <li>{linksfunc ? <a href="contact.html">CONTACT US</a> : <>CONTACT US</>}</li>
            </ul>
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
                <li><lord-icon
                  src="https://cdn.lordicon.com/msoeawqm.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#db3725"
                  style={{ width: "40px", height: "40px" }}>
                </lord-icon></li>
                <li><lord-icon
                  src="https://cdn.lordicon.com/slkvcfos.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#db3725"
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
