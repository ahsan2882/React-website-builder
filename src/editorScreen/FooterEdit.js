/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import { sidebarAssets } from './sidebarMain'
import FooterEditCss from './FooterEdit.module.css'
// import contactusAss2 from '../assets/editingScreenAssets/contactusEditAssets/contactus5.PNG'
// import contactusAss1 from '../assets/editingScreenAssets/contactusEditAssets/contactus2.png'
// import contactusAss3 from '../assets/editingScreenAssets/contactusEditAssets/contactus6.png'
// import contactusAss4 from '../assets/editingScreenAssets/contactusEditAssets/contactus4.png'
// import contactusAss5 from '../assets/editingScreenAssets/contactusEditAssets/contactus7.png'
// import faqsAss1 from '../assets/editingScreenAssets/faqsEditAssets/faqs1.png'
// import faqsAss2 from '../assets/editingScreenAssets/faqsEditAssets/faqs2.JPG'
// import faqsAss3 from '../assets/editingScreenAssets/faqsEditAssets/faqs3.JPG'
// import faqsAss4 from '../assets/editingScreenAssets/faqsEditAssets/faqs4.JPG'
// import footerAss1 from '../assets/editingScreenAssets/footerEditAssets/footer1.JPG'
// import footerAss2 from '../assets/editingScreenAssets/footerEditAssets/footer2.JPG'
// import footerAss3 from '../assets/editingScreenAssets/footerEditAssets/footer3.JPG'
// import footerAss4 from '../assets/editingScreenAssets/footerEditAssets/footer4.JPG'
// import pricingAss1 from '../assets/editingScreenAssets/pricingEditAssets/pricing1.JPG'
// import pricingAss2 from '../assets/editingScreenAssets/pricingEditAssets/pricing2.JPG'
// import pricingAss6 from '../assets/editingScreenAssets/pricingEditAssets/pricing3.JPG'
// import pricingAss4 from '../assets/editingScreenAssets/pricingEditAssets/pricing4.JPG'
// import pricingAss5 from '../assets/editingScreenAssets/pricingEditAssets/pricing5.JPG'
// import pricingAss3 from '../assets/editingScreenAssets/pricingEditAssets/pricing6.png'
// import serviceAss1 from '../assets/editingScreenAssets/serviceEditAssets/slider.PNG'
// import serviceAss2 from '../assets/editingScreenAssets/serviceEditAssets/service2.JPG'
// import serviceAss6 from '../assets/editingScreenAssets/serviceEditAssets/service3.JPG'
// import serviceAss4 from '../assets/editingScreenAssets/serviceEditAssets/service4.JPG'
// import serviceAss5 from '../assets/editingScreenAssets/serviceEditAssets/service5.JPG'
// import serviceAss3 from '../assets/editingScreenAssets/serviceEditAssets/service6.png'
// import socialAss1 from '../assets/editingScreenAssets/socialEditAssets/social1.png'
// import socialAss2 from '../assets/editingScreenAssets/socialEditAssets/social2.png'
// import socialAss3 from '../assets/editingScreenAssets/socialEditAssets/social3.png'
// import heroAss1 from '../assets/editingScreenAssets/headerEditAssets/hero1.PNG'
// import heroAss2 from '../assets/editingScreenAssets/headerEditAssets/hero2.PNG'
// import heroAss3 from '../assets/editingScreenAssets/headerEditAssets/hero3.PNG'
// import heroAss4 from '../assets/editingScreenAssets/headerEditAssets/hero4.PNG'
// import heroAss5 from '../assets/editingScreenAssets/headerEditAssets/hero5.PNG'
// import navAss1 from '../assets/editingScreenAssets/navEditAssets/nav1.PNG'
// import navAss2 from '../assets/editingScreenAssets/navEditAssets/nav2.PNG'
// import navAss3 from '../assets/editingScreenAssets/navEditAssets/nav3.PNG'
// import navAss4 from '../assets/editingScreenAssets/navEditAssets/nav4.PNG'
// import navAss5 from '../assets/editingScreenAssets/navEditAssets/nav5.PNG'
// import testimonialAss1 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial1.png'
// import testimonialAss2 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial2.png'
// import testimonialAss3 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial3.png'
// import testimonialAss4 from '../assets/editingScreenAssets/testimonialEditAssets/testimonial4.JPG'
// import accreAss1 from '../assets/editingScreenAssets/accreEditAssets/accreditation1.JPG'
// import accreAss2 from '../assets/editingScreenAssets/accreEditAssets/accreditation2.JPG'
// import accreAss3 from '../assets/editingScreenAssets/accreEditAssets/accreditation3.JPG'
// import accreAss4 from '../assets/editingScreenAssets/accreEditAssets/accreditation4.JPG'
// import sliderAss1 from '../assets/editingScreenAssets/sliderEditAssets/slider1.JPG'
// import sliderAss2 from '../assets/editingScreenAssets/sliderEditAssets/slider2.JPG'
// import sliderAss3 from '../assets/editingScreenAssets/sliderEditAssets/slider3.JPG'
// import sliderAss4 from '../assets/editingScreenAssets/sliderEditAssets/slider4.JPG'
// import sliderAss5 from '../assets/editingScreenAssets/sliderEditAssets/slider5.JPG'
// import Accre3Asset from '../assets/editingScreenAssets/accreEditAssets/Accre3Asset';
// import Accre2Asset from '../assets/editingScreenAssets/accreEditAssets/Accre2Asset';
import AssetImage from './AssetImage'
// import { NewAssetContext } from './EditScreen'


export default function FooterEdit({ setOverlay }) {
    const [isClicked, setIsClicked] = useState(false);
    const onClicked = () => setIsClicked((astate) => !astate);
    useEffect(() => {
        if (!isClicked) {
            setAssetList(false)
        }
    }, [isClicked]);
    // FooterEdit-copy
    const [assetList, setAssetList] = useState(false);
    const [currentAsset, setCurrentAsset] = useState(null);
    const assetListClicked = (e) => {
        setAssetList(true);
        setCurrentAsset(e.target.innerHTML)
    };
    

    return (
        <>
       
            <button className={`fixed left-8 bottom-4 flex justify-center items-center h-12 w-12 rounded-full  ${FooterEditCss['navToggle']}`} onClick={onClicked}>
                {isClicked ? <i className={`fas fa-times  py-3 px-4 text-white bg-red-500 rounded-full flex justify-center items-center ${FooterEditCss['i-circle']}`}></i> : <i className={`fas fa-times py-3 px-4 text-white bg-BL-600 rounded-full flex justify-center items-center ${FooterEditCss['i-circle']} ${FooterEditCss.open}`}></i>}
            </button>
            <nav>
                <ul className={FooterEditCss.mainNav} style={isClicked ? { transform: "translateX(0)" } : null }>
                    {sidebarAssets.map((object) => <li className={`${FooterEditCss.mainNavLink}`} key={object.assetName}><button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={(e) => assetListClicked(e)}>{ object.assetName }</button></li>)}
                </ul>
            </nav>
            <div className={`${FooterEditCss.assetList}`} style={assetList ? { transform: "translateX(0%)" } : null} onMouseLeave={() => setAssetList(false)}>
                <ul>
                    {sidebarAssets.filter((asset, i) => asset.assetName === currentAsset).map((object) => object.assets.map((item) => <li key={item.id.toString()}><AssetImage sourcePath={item.imageName} _id={item.id} classNameImage={`${FooterEditCss.assetImages}`}/></li>))}
                </ul>
            </div>
        </>
    )
}


