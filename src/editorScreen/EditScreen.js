import React, { useState, createContext } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'

export const NewAssetContext = createContext({ newAssetState: null, setNewAssetState: (() => void 0), newAssetCount: 0, setNewAssetCount: (() => void 0)});

export default function EditScreen({ temp }) {
    const [defWidth, setWidth] = useState(window.innerWidth);
    const [assetSelected, setAssetSelected] = useState(false);
    const [newAssetState, setNewAssetState] = useState(null);
    const [newAssetCount, setNewAssetCount] = useState(0);
    
    return (
        <>
            <NewAssetContext.Provider value={{newAssetState, newAssetCount, setNewAssetState, setNewAssetCount}}>
                <HeaderEdit setWidth={setWidth} />
                <ContainerEdit defWidth={defWidth} templateNum={temp} overlayPresent={assetSelected} />
                <FooterEdit setOverlay={setAssetSelected} />
            </NewAssetContext.Provider>
        </>
    )
}
