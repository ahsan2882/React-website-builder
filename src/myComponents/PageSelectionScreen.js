import React from 'react';
import temp1 from '../assets/templateSelectionImages/template01.png';
import temp2 from '../assets/templateSelectionImages/template02.png';
import temp3 from '../assets/templateSelectionImages/template03.png';
import temp4 from '../assets/templateSelectionImages/template04.png';
import { Link } from 'react-router-dom';
import PageSelCss from './PageSelection.module.css'

export default function PageSelectionScreen({ setTemp }) {
    return (
        <>
            <div className={`${PageSelCss.page}`}>
                {/* <div className="max-w-7xl mx-auto my-0 pt-12">
                    <Link to="/">
                        <button className="flex justify-center items-center py-1.5 px-10 bg-red-600 text-white rounded-3xl">BACK</button>
                    </Link>
                </div> */}
                <div>
                    <div className="overflow-y-hidden flex flex-col">
                        <div className={`my-8 mx-auto w-4/5`}>
                            <div className="flex justify-between items-stretch w-full">
                                <div className={`bg-white rounded-2xl mx-8 ${PageSelCss.tempWrap}`}>
                                    <Link to="/edit" onClick={() => setTemp(1)}>
                                        <div className="flex py-2 ml-1">
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                        </div>
                                        <div className="w-full">

                                            <img src={temp1} alt="template 1" />

                                        </div>
                                        <div className="py-6 text-center">
                                            <h3>Template 1</h3>
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="w-80">
                                    <Link to='/edit' onClick={() => setTemp(2)}>
                                        <img src={temp2} alt="template 2" />
                                    </Link>
                                </div> */}
                                <div className={`bg-white rounded-2xl mx-8 ${PageSelCss.tempWrap}`}>
                                    <Link to="/edit" onClick={() => setTemp(2)}>
                                        <div className="flex py-2 ml-1">
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                        </div>
                                        <div className="w-full">
                                            <img src={temp2} alt="template 2" />
                                        </div>
                                        <div className="py-6 text-center">
                                            <h3>Template 2</h3>
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="w-80">
                                    <Link to='/edit' onClick={() => setTemp(3)}>
                                        <img src={temp3} alt="template 3" />
                                    </Link>
                                </div> */}
                                <div className={`bg-white rounded-2xl mx-8 ${PageSelCss.tempWrap}`}>
                                    <Link to="/edit" onClick={() => setTemp(3)}>
                                        <div className="flex py-2 ml-1">
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                        </div>
                                        <div className="w-full">
                                            <img src={temp3} alt="template 3" />
                                        </div>
                                        <div className="py-6 text-center">
                                            <h3>Template 3</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`my-8 mx-auto w-4/5`}>
                            <div className="flex justify-around items-stretch w-full">
                                {/* <div className="w-80">
                                    <Link to='/edit' onClick={() => setTemp(4)}>
                                        <img src={temp4} alt="template 4" />
                                    </Link>
                                </div> */}
                                <div className={`bg-white rounded-2xl mx-8 ${PageSelCss.tempWrap}`}>
                                    <Link to="/edit" onClick={() => setTemp(4)}>
                                        <div className="flex py-2 ml-1">
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                        </div>
                                        <div className="w-full">
                                            <img src={temp4} alt="template 4" />
                                        </div>
                                        <div className="py-6 text-center">
                                            <h3>Template 4</h3>
                                        </div>
                                    </Link>
                                </div>

                                {/* <Link to='/edit' className="w-full" onClick={() => setTemp(0)}>
                                        <div className="flex flex-col justify-center items-center py-8">
                                            <i className="fas fa-plus text-8xl"></i>
                                            <h2>Create your own</h2>
                                        </div>
                                        
                                    </Link> */}
                                <div className={`bg-white rounded-2xl mx-8 ${PageSelCss.tempWrap} w-2/5`}>
                                    <Link to="/edit" onClick={() => setTemp(0)}>
                                        <div className="flex py-2 ml-1">
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                            <div className={`${PageSelCss.dot} mx-1`}></div>
                                        </div>
                                        <div className="flex flex-col justify-center items-center w-full h-full my-auto">
                                            <div className="flex flex-col justify-center items-center py-12">
                                                <i className="fas fa-plus text-8xl"></i>
                                                <h2>Create your own</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
