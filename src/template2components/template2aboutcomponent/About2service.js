import React from 'react'
import About2servicesCss from './About2services.module.css'
export default function About2service() {
    return (
        <>
            <section class={About2servicesCss['head-main']}>
                <div class={About2servicesCss['MainHeading']}><span class={About2servicesCss['SpanColor']}> OUR </span> SERVICES</div>
                <div class={About2servicesCss['spanDesc']}>
                    <p>Our Services are best in town and premium Lorem ipsum dolor sit amet.</p>
                </div>

            </section>
            <section class={About2servicesCss['our-experience']}>
                <div class={About2servicesCss['container-experience']}>
                    <div class={About2servicesCss['flex-cont']}>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/tyounuzx.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{ "width": "100px", "height": "100px" }}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>

                        </div>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/nxaaasqe.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{"width":"100px","height":"100px"}}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>
                        </div>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/tclnsjgx.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{ "width": "100px", "height": "100px" }}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>
                        </div>
                    </div>
                    <div class={About2servicesCss['flex-cont']}>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/usjxhgom.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{ "width": "100px", "height": "100px" }}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>

                        </div>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/qhgmphtg.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{ "width": "100px", "height": "100px" }}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>

                        </div>
                        <div class={`${About2servicesCss['exp-card']} ${About2servicesCss['pp']}`}>
                            <div class={About2servicesCss['ecard-top']}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/gqzfzudq.json"
                                    trigger="loop-on-hover"
                                    colors={{ "primary": "#121331", "secondary": "#c0272d" }}
                                    style={{ "width": "100px", "height": "100px" }}>
                                </lord-icon>
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, dolore!</p>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
