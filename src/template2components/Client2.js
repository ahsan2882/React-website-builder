import React from 'react'
import Client2moduleCss from './Client2.module.css'
import dot from '../assets/template2images/dot.png'
import client1 from '../assets/template2images/client1.png'
import client2 from '../assets/template2images/client2.png'
import client3 from '../assets/template2images/client3.png'

export const Client2 = () => {
    return (
       <>
        <section className={`${Client2moduleCss['head-main']}`}>
    <div className={`${Client2moduleCss.MainHeading}`}><span className={`${Client2moduleCss.SpanColor}`}> OUR </span> Clients says</div>
    <div className={`${Client2moduleCss.spanDesc}`}>
      <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
    </div>
    <div className={`${Client2moduleCss.divMainHeading}`}>
      <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-left"></div> <img className={`${Client2moduleCss.dot}`} src={dot} data-aos="fade" alt="Dot"/>
      <div className={`${Client2moduleCss.divMainHeadingSubDiv}`} data-aos="fade-right"> </div>
    </div>
  </section>
  <section className={`${Client2moduleCss['test-sec']}`} data-aos="fade">

    <div className={`${Client2moduleCss['container-test']}`}>
      <div className={`${Client2moduleCss['row-test']}`}>
        <div className={`${Client2moduleCss['test-card']}`} >
          <div className={`${Client2moduleCss['test-body']}`}>
            <div className={`${Client2moduleCss.test}`}>
              <img className={`${Client2moduleCss['test-logo']}`} src={client1} alt="1" />
            </div>
            <div className={`${Client2moduleCss['test-para']}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur vel esse veniam commodi saepe amet veritatis quam,
              dolore error, inventore modi tenetur ullam eligendi eveniet,
              soluta perferendis dicta aperiam molestias qui voluptas
              reprehenderit nemo placeat. Quia similique temporibus autem odio
              repellat nisi doloribus dicta praesentium?
            </div>
            <div className={`${Client2moduleCss['test-line']}`}>
              <div className={`${Client2moduleCss.line}`}></div>
            </div>
            <div className={`${Client2moduleCss['test-footer']}`}>
              <h1 style={{color:`white`}} className={`${Client2moduleCss['test-main']}`}>Shams W.pawel</h1>
              <div className={`${Client2moduleCss['test-child']}`}>Founder & CEo of Speed Studio</div>
            </div>
          </div>
        </div>
        <div className={`${Client2moduleCss['test-card']} ${Client2moduleCss['t-mid']}`}>
          <div className={`${Client2moduleCss['test-body']}`}>
            <div className={`${Client2moduleCss.test}`}>
            <img className={`${Client2moduleCss['test-logo']}`} src={client2} alt="2" />
            </div>
            <div className={`${Client2moduleCss['test-para']}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur vel esse veniam commodi saepe amet veritatis quam,
              dolore error, inventore modi tenetur ullam eligendi eveniet,
              soluta perferendis dicta aperiam molestias qui voluptas
              reprehenderit nemo placeat. Quia similique temporibus autem odio
              repellat nisi doloribus dicta praesentium?
            </div>
            <div className={`${Client2moduleCss['test-line']}`}>
              <div className={`${Client2moduleCss.line}`}></div>
            </div>
            <div className={`${Client2moduleCss['test-footer']}`}>
              <h1 className={`${['test-main']}`}>Shams W.pawel</h1>
              <div className={`${Client2moduleCss['test-child']}`}>Founder & CEo of Speed Studio</div>
            </div>
          </div>
        </div>
        <div className={`${Client2moduleCss['test-card']}`}>
          <div className={`${Client2moduleCss['test-body']}`}>
            <div className={`${Client2moduleCss.test}`}>
            <img className={`${Client2moduleCss['test-logo']}`} src={client3} alt="3" />
            </div>
            <div className={`${Client2moduleCss['test-para']}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur vel esse veniam commodi saepe amet veritatis quam,
              dolore error, inventore modi tenetur ullam eligendi eveniet,
              soluta perferendis dicta aperiam molestias qui voluptas
              reprehenderit nemo placeat. Quia similique temporibus autem odio
              repellat nisi doloribus dicta praesentium?
            </div>
            <div className={`${Client2moduleCss['test-line']}`}>
              <div className={`${Client2moduleCss.line}}`}></div>
            </div>
            <div className={`${Client2moduleCss['test-footer']}`}>
              <h1 className={`${Client2moduleCss['test-main']}`}>Shams W.pawel</h1>
              <div className={`${Client2moduleCss['test-child']}`}>Founder & CEo of Speed Studio</div>
            </div>
          </div>
          </div>
          </div>
          </div>
  </section>
       </>
    )
}
