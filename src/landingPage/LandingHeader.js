import React from 'react'

export const Header = (props) => {
    return (
     


        <header className="text-gray-600 body-font   h-20 /">
          <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
            <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-12">
              <span className=" text-3xl text-black">{props.title}</span>
          
            </button>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <button className="mr-5 hover:text-white hover:bg-indigo-400  p-3 uppercase text-black transition-colors cursor-pointer"> Home</button>
              <button className="mr-5 hover:text-white hover:bg-indigo-400  p-3 uppercase text-black transition-colors cursor-pointer"> Secuirty</button>
              <button className="mr-5 hover:text-white hover:bg-indigo-400  p-3 uppercase text-black transition-colors cursor-pointer">Service </button>
           
 
            </nav>
       
          </div>
        </header>
    );
}
Header.defaultProps = {
title : "The Landing Page"
}

// 
// Header.propTypes = {
//   title : PhotoTypes.string
// 