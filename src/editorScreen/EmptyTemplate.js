import React from 'react'

export default function Container() {
    return (
        <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-2xl font-medium title-font my-2 text-gray-800">This is the new empty page</h1>
            <h1 className="text-2xl font-medium title-font my-2 text-gray-800">Click the "plus"</h1>
            <div className="text-2xl font-medium title-font my-2 text-gray-800"><button className="whitespace-nowrap text-base font-medium text-black-500 hover:text-black-900 px-6		">
                <i className="fas fa-plus-circle i-circle"></i>
            </button></div>
            <h1 className="text-2xl font-medium title-font my-2 text-gray-800">To add a new block</h1>
        </div>
    );
}
