import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';
import computerDisp from '../assets/editingScreenAssets/desktop-preview.png'
import mobileDisp from '../assets/editingScreenAssets/mobile-preview.png'
import saveIm from '../assets/editingScreenAssets/save-site.png'
import previewIm from '../assets/editingScreenAssets/preview-site.png'
import exportIm from '../assets/editingScreenAssets/export-code.png'

export default function Header({ setWidth}) {
    return (
        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>
            <div className="w-80">
                HOME
            </div>
            <nav>
                <div className="relative w-24 flex justify-between">
                    <button className="" onClick={() => setWidth(window.innerWidth - 300)}>
                        <i className={`fas fa-desktop text-2xl`}></i>
                        {/* <img src={computerDisp} alt="Desktop Preview" className={`w-9 h-auto`}/> */}
                    </button>
                    <button className="" onClick={() => setWidth(480)}>
                        <i className="fas fa-mobile-alt text-2xl"></i>
                        {/* <img src={mobileDisp} alt="Mobile Preview" className={`w-9 h-auto`} /> */}
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-between w-80">
                <button className="flex items-center px-2 py-3 hover:bg-blue-400 w-20 justify-between">
                    {/* <img src={saveIm} alt="Save" className={`w-9 h-auto`} /> */}
                    <i className="far fa-save text-2xl"></i>
                    <h2>SAVE</h2>
                </button>
                <Link className="flex items-center px-2 py-3 hover:bg-blue-400 w-28 justify-between" target='_blank' rel='noopener noreferrer' to='/preview'>
                    {/* <img src={previewIm} alt="Preview" className={`w-9 h-auto`} /> */}
                    <i className="far fa-eye text-2xl"></i>
                    <h2>PREVIEW</h2>
                </Link>
                <button className="flex items-center px-2 py-3 hover:bg-blue-400 w-28 justify-between">
                    {/* <img src={exportIm} alt="Export Code" className={`w-9 h-auto`} /> */}
                    <i className="fas fa-file-export text-2xl"></i>
                    <h2>EXPORT</h2>
                </button>
            </div>
        </div>
    );
}
