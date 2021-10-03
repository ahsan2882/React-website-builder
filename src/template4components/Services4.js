import { Editor } from '@tinymce/tinymce-react';
import React, { useRef } from 'react'
import serv1 from '../assets/template4images/service_01-778x610.jpg';
import serv2 from '../assets/template4images/service_02-778x610.jpg';
import serv3 from '../assets/template4images/service_03-778x610.jpg';
import serv4 from '../assets/template4images/service_04-778x610.jpg';
import serv5 from '../assets/template4images/service_05-778x610.jpg';
import serv6 from '../assets/template4images/service_06-778x610.jpg';
import Service4Css from './Services4.module.css';
import { Link } from 'react-router-dom';

export default function Services4() {
    const editorRef = useRef(null);
    return (
        <div className={`text-center py-28 px-0 bg-black ${Service4Css.serviceWrapper} w-full`}>
            {/* <TextH4 className={`text-center font-black ${Service4Css.serviceMainHead}`} text="WHAT WE DO" /> */}
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='service4ed1'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue="<h4>WHAT WE DO</h4>"
                init={{
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | formatselect',
                }}
            />
            {/* <TextH2 className="text-center text-5xl opacity-80 text-white font-black" text="Our Services" /> */}
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='service4ed2'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue="<h2>Our Services</h2>"
                init={{
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | formatselect',
                }}
            />
            {/* <TextPara className={`${Service4Css.servicsDesc} text-center text-white my-12 mx-auto leading-6 font-light`} */}
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                inline={true}
                key='service4ed3'
                tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
                initialValue="<p>Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu
                        scelerisque. Duis vestibulum, dolor sed facilisis laoreet.</p>"
                init={{
                    menubar: false,
                    toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | formatselect',
                }}
            />
            <div className="flex flex-wrap my-0 mx-auto justify-center w-4/5">
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv1} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Home CCTV camera</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv2} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Office security system</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv3} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Car parking surveillance</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv4} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Resturants surveillance</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv5} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Indus security</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
                <div className={`mx-2 mb-8 mt-0 relative overflow-hidden ${Service4Css.serviceCard}`}>
                    <img src={serv6} alt="london" className={`w-96 h-64 block ${Service4Css.serviceImages}`} />
                    <div className={Service4Css.layer}>
                        <h2 className={`opacity-100 text-left leading-none font-extrabold mt-8 ml-3 text-3xl text-white ${Service4Css.serviceLayerH2}`} id="head">Cargo transportation protection</h2>
                        <div className="mb-24 ml-3 text-left">
                            <Link id="btn" to="#" className={`${Service4Css.servicesMoreLink} py-2 px-8 no-underline text-black text-sm rounded-3xl`}> Read more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
