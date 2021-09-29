import React from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import Template4Page from '../template4components/Template4Page'


export default function ContainerEdit() {
    return (
        <section className="text-gray-600 body-font relative mt-32">
            <div className={`container flex justify-center items-center bg-gray-200 ${ContainerEditCss['editing']}	rounded-md mx-auto mt-10`}>
                <div className="flex flex-col justify-center items-center text-center w-full mb-12">
                    {/* <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">This is the new empty page</h1>
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-800">Click the "plus"</h1>
                    <div className="text-2xl font-medium title-font mb-4 text-gray-800"><button className="whitespace-nowrap text-base font-medium text-black-500 hover:text-black-900 px-6		">
                        <i className="fas fa-plus-circle i-circle"></i>
                    </button></div>
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-800	">To add a new block</h1> */}
                    <Template4Page/>
                </div>
            </div>
        </section>
    );
}
