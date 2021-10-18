import React from 'react'
import Image1 from './person.jpg'

export default function Testimonial1Asset() {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.
                                    <span className="font-bold text-indigo-500 text-lg" /></p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.
                                    <span className="font-bold text-indigo-500 text-lg" /></p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src={Image1} />
                                <p className="leading-relaxed"> When I saw how these guys prepare themselves to any operation, I realized that it was it! I must hire them! I was scared. Now I am feeling safe because there is always the strongmen team with me and my folks.
                                    <span className="font-bold text-indigo-500 text-lg" /></p>
                                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                <h2 className="text-white font-medium title-font tracking-wider text-sm">Jean Miguel</h2>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
