import React from 'react'
import VacantunitdescriptionCss from './Vacantunitdescription.module.css'
// import Img1 from '../../../assets/template2images/services11.jpg'
export default function Vacantunitdescription() {
    return (
        <section class={VacantunitdescriptionCss['service-content']}>
        <div class={VacantunitdescriptionCss['service-container']}>
            <div class={VacantunitdescriptionCss['serv-head']}>
                <h1>Service</h1>
                <h1 style={{"color": "#c0272d"}}>Description</h1>
            </div>
            <div class={VacantunitdescriptionCss['service-grid']}>
                <div class={VacantunitdescriptionCss.sg1}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, Lorem ipsum dolor sit amet consectetur error?</p> </div>
                    <div class={VacantunitdescriptionCss.sg2}><img src="https://i.ibb.co/ngvMh9v/services11.jpg" alt="services11"/> </div>
                <div class={VacantunitdescriptionCss.sg3}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident
                voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.</p> </div>
                <div class={VacantunitdescriptionCss.sg4}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consequatur.</p></div>
                <div class={VacantunitdescriptionCss.sg5}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, autem?</p></div>
                <div class={VacantunitdescriptionCss.sg6}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae non eveniet corrupti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> </div>
            </div>
            
        </div>
    </section>
    )
}
