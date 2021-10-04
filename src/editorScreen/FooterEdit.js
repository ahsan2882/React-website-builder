/* eslint-disable no-lone-blocks */
import React from 'react'
import FooterEditCss from './FooterEdit.module.css'
import contactusAss1 from '../assets/editingScreenAssets/contactusEditAssets/contactus1.png'
import contactusAss2 from '../assets/editingScreenAssets/contactusEditAssets/contactus2.png'
import contactusAss3 from '../assets/editingScreenAssets/contactusEditAssets/contactus3.png'
import contactusAss4 from '../assets/editingScreenAssets/contactusEditAssets/contactus4.png'
import faqsAss1 from '../assets/editingScreenAssets/faqsEditAssets/faqs1.png'
import footerAss1 from '../assets/editingScreenAssets/footerEditAssets/footer1.JPG'
import footerAss2 from '../assets/editingScreenAssets/footerEditAssets/footer2.JPG'
import footerAss3 from '../assets/editingScreenAssets/footerEditAssets/footer3.JPG'
import footerAss4 from '../assets/editingScreenAssets/footerEditAssets/footer4.JPG'
import pricingAss1 from '../assets/editingScreenAssets/pricingEditAssets/pricing1.JPG'
import pricingAss2 from '../assets/editingScreenAssets/pricingEditAssets/pricing2.JPG'
import pricingAss3 from '../assets/editingScreenAssets/pricingEditAssets/pricing3.JPG'
import serviceAss1 from '../assets/editingScreenAssets/serviceEditAssets/service1.png'
import serviceAss2 from '../assets/editingScreenAssets/serviceEditAssets/service2.JPG'
import serviceAss3 from '../assets/editingScreenAssets/serviceEditAssets/service3.JPG'
import serviceAss4 from '../assets/editingScreenAssets/serviceEditAssets/service4.JPG'
import socialAss1 from '../assets/editingScreenAssets/socialEditAssets/social1.png'
import socialAss2 from '../assets/editingScreenAssets/socialEditAssets/social2.png'
import socialAss3 from '../assets/editingScreenAssets/socialEditAssets/social3.png'
import testimonialAss1 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial1.png'
import testimonialAss2 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial2.png'
import testimonialAss3 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial3.png'
import testimonialAss4 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial4.JPG'


export default function FooterEdit() {
    return (
        <>
            <nav>
                <ul className={FooterEditCss.mainNav}>
                    <li className={`${FooterEditCss.mainNavLink} `}>
                        <button className={`py-3`}>Header</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3`}>Navigation</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink} ${FooterEditCss.footerState}`}>
                        <button className={`py-3`}>Footer</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`} id="testimonialState">
                        <button className={`py-3`}>Testimonials</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3`}>Forms</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3 ${FooterEditCss.faqState}`}>FAQs</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3 ${FooterEditCss.contactState}`}>Contact</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3 ${FooterEditCss.socialState}`}>Social icons</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3`}>Sliders</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3`}>Main Section</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3 ${FooterEditCss.pricingState}`}>Pricing</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3 ${FooterEditCss.serviceState}`}>Services</button>
                    </li>
                    <li className={`${FooterEditCss.mainNavLink}`}>
                        <button className={`py-3`}>Accreditation</button>
                    </li>
                </ul>
            </nav>
            <div className={`${FooterEditCss.footerList}`}>
                <ul className={`${FooterEditCss.footerMenu} flex flex-col h-full justify-evenly`}>
                    <li><img src={footerAss1} alt="Footer Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss2} alt="Footer Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss3} alt="Footer Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={footerAss4} alt="Footer Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.testimonialList}`}>
                <ul className={`${FooterEditCss.testimonialMenu}`}>
                    <li><img src={testimonialAss1} alt="Testimonial Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss2} alt="Testimonial Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss3} alt="Testimonial Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={testimonialAss4} alt="Testimonial Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.faqsList}`}>
                <ul className={`${FooterEditCss.faqsMenu}`}>
                    <li><img src={faqsAss1} alt="FAQ Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.contactList}`}>
                <ul className={`${FooterEditCss.contactusMenu}`}>
                    <li><img src={contactusAss1} alt="Contact Us Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss2} alt="Contact Us Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss3} alt="Contact Us Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={contactusAss4} alt="Contact Us Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.socialList}`}>
                <ul className={`${FooterEditCss.socialMenu}`}>
                    <li><img src={socialAss1} alt="Social Icon Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={socialAss2} alt="Social Icon Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={socialAss3} alt="Social Icon Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.pricingList}`}>
                <ul className={`${FooterEditCss.pricingMenu}`}>
                    <li><img src={pricingAss1} alt="Pricing Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss2} alt="Pricing Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={pricingAss3} alt="Pricing Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
            <div className={`${FooterEditCss.servicesList}`}>
                <ul className={`${FooterEditCss.serviceMenu}`}>
                    <li><img src={serviceAss1} alt="Services Asset 1" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss2} alt="Services Asset 2" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss3} alt="Services Asset 3" className={`${FooterEditCss.assetImages}`} /></li>
                    <li><img src={serviceAss4} alt="Services Asset 4" className={`${FooterEditCss.assetImages}`} /></li>
                </ul>
            </div>
        </>
    )
}