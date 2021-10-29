/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from 'react'
import { sidebarAssets } from './sidebarMain'
import FooterEditCss from './FooterEdit.module.css'

import AssetImage from './AssetImage'


export default function FooterEdit({ setOverlay, setChatInclude, chatInclude }) {
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
                <ul className={FooterEditCss.mainNav} style={isClicked ? { transform: "translateX(0)" } : null}>
                    {sidebarAssets.map((object) => <li className={`${FooterEditCss.mainNavLink}`} key={object.assetName}><button className={`py-2 flex w-full ${FooterEditCss.mainNavText}`} onClick={(e) => assetListClicked(e)}>{object.assetName}</button></li>)}
                    <li className="pl-16 pt-32"><button onClick={() => setChatInclude((addChat) => !addChat)}><svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 24 24"><path fill={chatInclude ? "#19a30f" : "#FFFFFF"} d="M10.0007,0 C12.6497,0 15.1997,1.05 17.0697,2.93 C18.9497,4.811 20.0007,7.35 20.0007,10.01 C20.0007,13.51 18.1597,16.76 15.1597,18.57 C12.1597,20.38 8.4297,20.48 5.3307,18.83 L5.3307,18.83 L5.2997,18.83 C5.0007,18.71 4.7597,18.5 4.4797,18.36 C4.1707,18.23 3.8197,18.21 3.5007,18.311 C2.7597,18.57 2.0097,18.78 1.2397,18.96 C0.8397,18.97 0.7197,18.73 0.7197,18.34 C0.8997,17.55 1.1397,16.769 1.4207,16.01 C1.5297,15.68 1.5007,15.33 1.3307,15.019 L1.3307,15.019 L1.1307,14.63 C0.3897,13.22 0.0007,11.65 0.0007,10.061 L0.0007,10.061 L0.0007,10 C0.0007,7.35 1.0497,4.8 2.9297,2.93 C4.8097,1.05 7.3497,0 10.0007,0 Z M14.6097,8.73 C13.9097,8.73 13.3307,9.3 13.3307,10.01 C13.3307,10.71 13.9097,11.29 14.6097,11.29 C15.3197,11.29 15.8897,10.71 15.8897,10.01 C15.8897,9.3 15.3197,8.73 14.6097,8.73 Z M10.0007,8.73 C9.2907,8.73 8.7197,9.3 8.7197,10.01 C8.7197,10.71 9.2907,11.29 10.0007,11.29 C10.7107,11.29 11.2797,10.71 11.2797,10.01 C11.2797,9.3 10.7107,8.73 10.0007,8.73 Z M5.3897,8.73 C4.6797,8.73 4.1097,9.3 4.1097,10.01 C4.1097,10.71 4.6797,11.29 5.3897,11.29 C6.0897,11.29 6.6707,10.71 6.6707,10.01 C6.6707,9.3 6.0897,8.73 5.3897,8.73 Z" transform="translate(2 2)" /></svg></button></li>
                </ul>
            </nav>
            <div className={`${FooterEditCss.assetList} z-50`} style={assetList ? { transform: "translateX(0%)" } : null} onMouseLeave={() => setAssetList(false)}>
                <ul>
                    {sidebarAssets.filter((asset, i) => asset.assetName === currentAsset).map((object) => object.assets.map((item) => <li key={item.id.toString()}><AssetImage sourcePath={item.imageName} _id={item.id} classNameImage={`${FooterEditCss.assetImages}`} /></li>))}
                </ul>
            </div>
        </>
    )
}


