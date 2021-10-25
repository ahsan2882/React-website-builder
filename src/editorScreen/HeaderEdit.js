import React from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';

export default function Header({ templateNum, setSaveClicked, toSave, saveClicked }) {
    let path = '';
    if (templateNum === 1) {
        path = '/preview/template-1'
    }
    else if (templateNum === 2) {
        path = '/prevew/template-2'
    }
    else if (templateNum === 3) {
        path = '/preview/template-3'
    }
    else if (templateNum === 4) {
        path = '/preview/template-4'
    }
    else if (templateNum === 0) {
        path = '/preview/new-template'
    }
    const saveTemplate = () => {
        setSaveClicked(true);
        localStorage.setItem('Template-4', JSON.stringify(toSave))
    }
    const exportCode = () => {
        fetch('http://localhost:9000/generate-file', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({first_name: 'Ahsan', last_name: 'Shahid'})
        })
    }
    return (
        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>
            <div className="w-80"></div>
            <nav>
                <div className="relative w-32 flex justify-between">
                    <button className="hover:bg-BL-400 rounded-full w-20 h-16" >
                        <i className={`fas fa-desktop text-2xl`}>
                        </i>
                    </button>
                    <button className="hover:bg-BL-400 rounded-full w-20 h-16">
                        <i className="fas fa-mobile-alt text-2xl"></i>
                    </button>
                </div>
            </nav>
            <div className="flex items-center justify-between w-80">
                <button className="flex items-center px-2 py-3 hover:bg-BL-400 w-20 justify-between rounded-2xl"
                    onClick={() => {
                        saveTemplate();
                    }}
                >
                    <i className="far fa-save text-2xl"></i>
                    <h2> SAVE</h2>
                    <i className={saveClicked ? "fas fa-check" : null}></i>
                </button>
                <Link to={path} target='_blank' rel='noopener noreferrer' className="flex items-center px-2 py-3 hover:bg-BL-400 w-28 justify-between rounded-2xl">
                    {/* <img src={previewIm} alt="Preview" className={`w-9 h-auto`} /> */}
                    <i className="far fa-eye text-2xl"></i>
                    <h2>PREVIEW</h2>
                </Link>
                <button className="flex items-center px-2 py-3 hover:bg-BL-400 w-28 justify-between rounded-2xl" onClick={() => exportCode()}>
                    <i className="fas fa-file-export text-2xl"></i>
                    <h2>EXPORT</h2>
                </button>
            </div>
        </div>

    );
}
