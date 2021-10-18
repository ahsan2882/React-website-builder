/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import { sidebarAssets } from './sidebarMain'
import FooterEditCss from './FooterEdit.module.css'

import AssetImage from './AssetImage'


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


