import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
import computerDisp from '../assets/editingScreenAssets/desktop-preview.png'
import mobileDisp from '../assets/editingScreenAssets/mobile-preview.png'

export default function Header({ setWidth}) {
    return (
        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>
            
            <nav>
                <div className="relative w-28 flex justify-between">
                    <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setWidth(window.innerWidth - 300)}>
                        {/* <i className={`fas fa-desktop ${HeaderEditCss['icon-mob']}`}></i> */}
                        <img src={computerDisp} alt="Desktop Preview" className={`w-9 h-auto`}/>
                    </button>
                    <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => setWidth(480)}>
                        {/* <i className="fas fa-mobile-alt icon-mob"></i> */}
                        <img src={mobileDisp} alt="Mobile Preview" className={`w-9 h-auto`} />
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-around w-48">
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10">
                    {/* <i class="far fa-save icon-mob "></i> */}
                    <i className={`far fa-save ${HeaderEditCss['icon-mob']}`}></i>
                </button>
                <Link className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10" target='_blank' rel='noopener noreferrer' to='/preview'>
                    {/* <i className="far fa-eye icon-mob "></i> */}
                    <i className={`far fa-eye ${HeaderEditCss['icon-mob']}`}></i>
                </Link>
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10	">
                    {/* <i className="fas fa-cloud-upload-alt icon-mob"></i> */}
                    <i className={`fas fa-cloud-upload-alt ${HeaderEditCss['icon-mob']}`}></i>
                </button>
            </div>
        </div>
    );
}
