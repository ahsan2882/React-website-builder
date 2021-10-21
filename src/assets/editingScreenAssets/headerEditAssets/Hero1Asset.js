import React from 'react'
import Hero1Css from './Hero1Asset.module.css'

export default function Hero1Asset() {
    return (
        <>
         <section className="h-full">
<div className="row w-full h-full flex">
  <div className={`${Hero1Css['coll-2']}`}>
    <h1 className="font-bold text-7xl tracking-widest text-white">  Design</h1>
  </div>
<div className="coll bg-red-400 w-2/4 h-screen flex items-center justify-start">
<h1 id="bett" className="font-bold text-7xl tracking-widest ml-12">  better</h1>
</div>
</div>
{/* <h1>  w-2/4 h-screen flex items-center justify-end </h1> */}
</section>   
        </>
    )
}
