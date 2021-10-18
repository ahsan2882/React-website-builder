import React from 'react'

export default function Contact1Asset() {
    return (
        <>
            <div className="rounded-lg shadow sm:max-w-md bg-opacity-8 0 bg-blue-900 sm:w-full sm:mx-auto sm:overflow-hidden mt-4 mb-4">
                <div className="px-4 py-8 sm:px-10">
                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300">
                            </div>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                                Contact Us
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="w-full space-y-6">
                            <div className="w-full">
                                <div className=" relative ">
                                    <input type="text" id="search-form-price" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input type="text" id="search-form-location" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className=" relative ">
                                    <input type="text" id="search-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone" />
                                </div>
                            </div>
                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Submit
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-6 border-t-2 border-gray-400 bg-black sm:px-10">
                    <p className="text-xs leading-5 text-gray-100">
                        Security services for your personal safety

                    </p>
                </div>
            </div>
        </>
    )
}
