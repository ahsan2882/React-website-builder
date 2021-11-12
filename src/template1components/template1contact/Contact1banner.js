import React, { useRef} from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Contactbanner1Css from './Contact1banner.module.css'
 import Navbar1 from '../Navbar1';
export default function Contact1banner({ showPopup, overSection, displayDevice, linksfunc }) {
    const editorRef = useRef(null);
    return (
        <><Navbar1 displayDevice={displayDevice} linksfunc={linksfunc} />
        <section className={displayDevice ? Contactbanner1Css['head-img2'] : Contactbanner1Css['head-img2M']}>
          <div className={displayDevice ? Contactbanner1Css.contentserv : Contactbanner1Css.contentservM}>
     
     <h1 className={Contactbanner1Css.headings}>
     <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              inline={true}
              key='abouT1'
              initialValue="Contact Us"
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
     
     
     
     </h1>
    
    </div>
        </section>
        </>
    )
}
