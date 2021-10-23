import React, { useState } from 'react'
import HeaderEdit from './HeaderEdit'
import ContainerEdit from './ContainerEdit'
import FooterEdit from './FooterEdit'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function EditScreen({ temp }) {
    const [assetSelected, setAssetSelected] = useState(false);
    const [toSave, setToSave] = useState({
        templateID: null,
        templateData: null
    });
    const [saveClicked, setSaveClicked] = useState(false);

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <HeaderEdit
                    templateNum={temp}
                    setSaveClicked={setSaveClicked}
                    toSave={toSave}
                />
                <ContainerEdit
                    templateNum={temp}
                    overlayPresent={assetSelected}
                    saveClicked={saveClicked}
                    setToSave={setToSave}
                    setSaveClicked={setSaveClicked}
                />
                <FooterEdit
                    setOverlay={setAssetSelected}
                />
            </DndProvider>
        </>
    )
}
