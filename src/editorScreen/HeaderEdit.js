import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
const IncNum = () => {
   alert("helloow worlds");
}

export default function Header() {
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
                <Link className="flex items-center px-2 py-3 hover:bg-BL-400 w-28 justify-between rounded-2xl" target='_blank' rel='noopener noreferrer' to='/preview'>
                 
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
