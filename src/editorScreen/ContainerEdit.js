import React from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import Template4Page from '../template4components/Template4Page'


export default function ContainerEdit(defWidth) {
    window.resizeTo(defWidth, window.innerHeight);
    return (
        <section className="text-gray-600 body-font relative mt-32">
            <div className={`container flex justify-center items-center bg-gray-200 ${ContainerEditCss['editing']} rounded-md mx-auto mt-10`}>
                <div className="flex flex-col justify-center items-center text-center w-full mb-12">
                    <Template4Page/>
                </div>
            </div>
        </section>
    );
}
