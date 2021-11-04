import React from 'react'
import MannedguardingdescriptionCss from './Mannedguardingdescription.module.css'
import Img1 from '../../../assets/template2images/services33.jpg'
export default function Mannedguardingdescription() {
    return (
        <section class={MannedguardingdescriptionCss['service-content']}>
        <div class={MannedguardingdescriptionCss['service-container']}>
            <div class={MannedguardingdescriptionCss['serv-head']}>
                <h1>Service</h1>
                <h1 style={{"color": "#c0272d"}}>Description</h1>
            </div>
            <div class={MannedguardingdescriptionCss['service-grid']}>
                <div class={MannedguardingdescriptionCss.sg1}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, Lorem ipsum dolor sit amet consectetur error?</p> </div>
                <div class={MannedguardingdescriptionCss.sg2}><img src={Img1} alt="news1"/> </div>
                <div class={MannedguardingdescriptionCss.sg3}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.culpa ad distinctio magni delectus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates provident
                voluptas sint obcaecati pariatur dolor
                culpa ad distinctio magni delectus.</p> </div>
                <div class={MannedguardingdescriptionCss.sg4}> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, consequatur.</p></div>
                <div class={MannedguardingdescriptionCss.sg5}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, autem?</p></div>
                <div class={MannedguardingdescriptionCss.sg6}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae non eveniet corrupti?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p> </div>
            </div>
            
        </div>
    </section>
    )
}
