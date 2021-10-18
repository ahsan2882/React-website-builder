import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
const IncNum = () => {
   alert("helloow worlds");
}

export default function Header({ setWidth, templateNum }) {
    let path = '';
     if(templateNum === 1){
        path = '/preview/template-1'
     }
     else if(templateNum === 2){
         path = '/prevew/template-2'
     }
     else if (templateNum === 3)
     {
         path = '/preview/template-3'
     }
     else if (templateNum === 4)
     {
         path = '/preview/template-4'
     }
     else if (templateNum === 0)
     {
         path = '/preview/new-template'
     }
    return (

        
        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>
        
            <nav>
                <div className="relative w-32 flex justify-between">
                    <button  className="hover:bg-BL-400 rounded-full w-20 h-16" >
                        <i  className={`fas fa-desktop text-2xl`}>
                            
                        </i>
          
                   
                    </button>
                  
                        <button onClick={IncNum}  className="hover:bg-BL-400 rounded-full w-20 h-16">
                        <i className="fas fa-mobile-alt text-2xl"></i>
                     
                    </button>
                       
                
                
                </div>
            </nav>
         
            <div className="flex items-center justify-between w-80">
                <button className="flex items-center px-2 py-3 hover:bg-BL-400 w-20 justify-between rounded-2xl">
             
                    <i className="far fa-save text-2xl"></i>
                    <h2> SAVE</h2>
                </button>
                <Link className="flex items-center px-2 py-3 hover:bg-BL-400 w-28 justify-between rounded-2xl" target='_blank' rel='noopener noreferrer' to={path}>
                    {/* <img src={previewIm} alt="Preview" className={`w-9 h-auto`} /> */}

                    <i className="far fa-eye text-2xl"></i>
                    <h2>PREVIEW</h2>
                </Link>
                <button className="flex items-center px-2 py-3 hover:bg-BL-400 w-28 justify-between rounded-2xl">
                
                    <i className="fas fa-file-export text-2xl"></i>
                    <h2>EXPORT</h2>
                </button>
            </div>
        </div>
           
    );
}
