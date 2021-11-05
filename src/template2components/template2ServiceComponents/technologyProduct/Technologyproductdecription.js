import React from 'react'
import TechnologyproductdescriptionCss from './Technologyproductdescription.module.css'
// import Img1 from '../../../assets/template2images/services22.jpg'
export default function Technologyproductdecription() {
    return (
        <section class={TechnologyproductdescriptionCss['service-content']}>
        <div class={TechnologyproductdescriptionCss['service-container']}>
            <div class={TechnologyproductdescriptionCss['serv-head']}>
                <h1>Service</h1>
                <h1 style={{"color": "#c0272d"}}>Description</h1>
            </div>
            <div class={TechnologyproductdescriptionCss['service-grid']}>
                <div class={TechnologyproductdescriptionCss.sg1}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, Lorem ipsum dolor sit amet consectetur error?</p> </div>
                    <div class={TechnologyproductdescriptionCss.sg2}><img src="https://i.ibb.co/Y8nb3hk/services22.jpg" alt="services22"/> </div>
                <div class={TechnologyproductdescriptionCss.sg3}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident
                voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.</p> </div>
                <div class={TechnologyproductdescriptionCss.sg4}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consequatur.</p></div>
                <div class={TechnologyproductdescriptionCss.sg5}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, autem?</p></div>
                <div class={TechnologyproductdescriptionCss.sg6}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae non eveniet corrupti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> </div>
            </div>
            
        </div>
    </section>
    )
}
