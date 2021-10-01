import React, { useState, useEffect } from "react";
import SliderCss from "./LandingSlider.module.css";
import data from "./LandingSliderData";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (

    <section className={SliderCss.section}>
      <div className={SliderCss.title}>
        <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font text-gray-900 tracking-widest leading-tight mb-3">what our investor says</h1>
        <div className="w-36 h-1 m-auto rounded-full bg-indigo-400 "></div>

      </div>
      <div className={SliderCss.sectionCenter}>



        {people.map((item, indexPeople) => {
          const { id, name, title, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <div className={SliderCss.article}>
              <article className={position} key={id}>
                <h4 className="text-center tracking-widest uppercase leading-tight mb-3">{name}</h4>
                <p className={SliderCss.title}>{title}</p>
                <p className={SliderCss.text}>{quote}</p>
              </article>
            </div>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" style={{color:`gray`}}  />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" style={{color:`gray`}} />
        </button>

  </div>
<div> 

  {/* <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "2%", width: "100%"}}><path d="M-1.41,70.55 C189.90,151.47 439.90,27.13 499.72,63.64 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#2563EB"}}></path></svg> */}
  </div>
    </section>
       

  );
};

export default Slider;