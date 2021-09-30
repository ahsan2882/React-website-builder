import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'

export default function Header({setWidth}) {
    return (
        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>
            <div className="flex justify-start">
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6">
                    Home
                </button>
            </div>
            <nav>
                <div className="relative">
                    <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6 " onClick={() => setWidth(window.innerWidth - 300)}>
                        <i className={`fas fa-desktop ${HeaderEditCss['icon-mob']}`}></i>
                    </button>
                    <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 px-6" onClick={() => setWidth(480)}>
                        {/* <i className="fas fa-mobile-alt icon-mob"></i> */}
                        <i className={`fas fa-mobile-alt ${HeaderEditCss['icon-mob']}`}></i>
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-around w-48">
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10">
                    {/* <i class="far fa-save icon-mob "></i> */}
                    <i className={`far fa-save ${HeaderEditCss['icon-mob']}`}></i>
                </button>
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10">
                    {/* <i className="far fa-eye icon-mob "></i> */}
                    <i className={`far fa-eye ${HeaderEditCss['icon-mob']}`}></i>
                </button>
                <button className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 space-x-10	">
                    {/* <i className="fas fa-cloud-upload-alt icon-mob"></i> */}
                    <i className={`fas fa-cloud-upload-alt ${HeaderEditCss['icon-mob']}`}></i>
                </button>
            </div>
        </div>
    );
}
