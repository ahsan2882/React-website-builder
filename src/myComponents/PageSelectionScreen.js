import React from 'react';
import temp1 from '../assets/templateSelectionImages/template01.png';
import temp2 from '../assets/templateSelectionImages/template02.png';
import temp3 from '../assets/templateSelectionImages/template03.png';
import temp4 from '../assets/templateSelectionImages/template04.png';
import { Link } from 'react-router-dom';

export default function PageSelectionScreen() {
    return (
        <>
            <header className="max-w-7xl mx-auto mt-12">
                <Link to="/">
                    <button className="flex justify-center items-center py-1.5 px-10 bg-red-600 text-white rounded-3xl my-1">BACK</button>
                </Link>
            </header>
            <div className="max-w-6xl my-8 mx-auto">
                <div className="flex justify-between items-stretch w-full">
                    <div className="border-2 border-red-700 w-80">
                        <Link to="/edit/template-1">
                            <img src={temp1} alt="template 1" />
                        </Link>
                    </div>
                    <div className="w-80 border-2 border-red-700">
                        <Link to='/edit/template-2'>
                            <img src={temp2} alt="template 2" />
                        </Link>
                    </div>
                    <div className="w-80 border-2 border-red-700">
                        <Link to='/edit/template-3'>
                            <img src={temp3} alt="template 3" />
                        </Link>
                    </div>    
                </div>            
            </div>
            <div className="max-w-3xl my-8 mx-auto">
                <div className="flex justify-between items-center w-full">
                    <div className="border-2 border-red-700 w-80">
                        <Link to='/edit'>
                            <img src={temp4} alt="template 4" />
                        </Link>
                    </div>
                    <div className="border-2 border-gray-700 flex flex-col justify-center items-center w-2/5">
                        <Link to='/edit/new-template' className="w-full">
                            <div className="flex flex-col justify-center items-center py-8">
                                <i className="fas fa-plus text-8xl"></i>
                                <h2>Create your own</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
