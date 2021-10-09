import React from 'react'
import Guard3Css from './Guard3.module.css'
export default function Guard3() {
    return (
        <>
   <section class={Guard3Css['heading-sec']}>
    
    <div class={Guard3Css['heading-main-title']}>
      <div class={Guard3Css['sub-title']}>
        <h3>The Thoughest Guards</h3>
      </div>
      <h1>Our Guards</h1>
    </div>
  </section>

 
  


  <section class={Guard3Css['guard-section']}>
    <div class={Guard3Css['container-main']}>
      <div class={Guard3Css['guard-cards-wrapper']}>
  
     
        <div class= {`${Guard3Css['guard-card']} ${Guard3Css['bg']}`}>
          <div class={Guard3Css['g-card-content']}>
            <h2 class={Guard3Css['guard-card_title']}> Bianca b.Rooney</h2>
            <p class={Guard3Css['g-card-body']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              animi laudantium sint pariatur doloribus tempora!
            </p>
            
  
          </div>
        </div>
        <div class= {`${Guard3Css['guard-card']} ${Guard3Css['bg1']}`}>
          <div class={Guard3Css['g-card-content']}>
            <h2 class={Guard3Css['guard-card_title']}> Bianca b.Rooney</h2>
            <p class={Guard3Css['g-card-body']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              animi laudantium sint pariatur doloribus tempora!
            </p>
            
          </div>
        </div>
        <div class= {`${Guard3Css['guard-card']} ${Guard3Css['bg2']}`}>
          <div class={Guard3Css['g-card-content']}>
            <h2 class={Guard3Css['guard-card_title']}> Bianca b.Rooney</h2>
            <p class={Guard3Css['g-card-body']}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
              animi laudantium sint pariatur doloribus tempora!
            </p>
            
  
          </div>
        </div>
  
  
  
  
  
  
  
      </div>
    </div>
  </section>
        </>
    )
}
