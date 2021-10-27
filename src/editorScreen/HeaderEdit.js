import React, { useState } from 'react'
import HeaderEditCss from './HeaderEdit.module.css'
import { Link } from 'react-router-dom';


export default function Header({ templateNum, setSaveClicked, toSave, saveClicked, fileData }) {
const [isClicked , setIsClicked] = useState(false);
const onClicked = () => setIsClicked ((condition) => !condition);



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
        console.log("Sending Request")
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                file_name: "index.html",
                file_content: fileData
            })
        };
        fetch('/generate-file', requestOptions)
            .then(response => console.log(response.blob()))
            .then((blob) => {
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;

                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => console.log(error))
    }
   
    return (
        <>

        <div className={`flex justify-between items-center border-b-2 border-gray-100 py-6 ${HeaderEditCss['max-w-7xl']} ${HeaderEditCss.maxHeadH} mx-auto px-4 bg-white fixed z-50 w-full top-0`}>

            <div className="w-80 ml-4">
                {/* ---usama */}
            <div className="list">
                <h1 style={{background:`rgb(60,172,254)`,width:`120px`,borderRadius:`25px`,color:`white`,cursor:`pointer`}} onClick={onClicked}> {isClicked ? <h2 style={{background:`red`,padding:`12px 30px 12px`,borderRadius:`25px`}}> Close </h2> : <h2 style={{padding:`12px 30px 12px`}}> Pages </h2>} </h1>
<div className="w-48" style={ isClicked ? { left: `0`,position:`absolute`, top:`100%`} : {position:`absolute`, top:`100%`,left:`-10%`, height:`100vh`,background:`white`,boxShadow:`1px 2px 2px 2px rgba(0,0,0,0.3)`}}>
   <div className="flex flex-col mt-12">
       <h5 className="m-10"> Home </h5>
       <h5 className="m-10"> Contact </h5>
       <h5 className="m-10"> About  </h5>
       <h5 className="m-10"> Service </h5>
     


   </div>
</div>
            




            </div>
       
         
                 </div>


  

{/* Usama */}
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

</>
    );
}
