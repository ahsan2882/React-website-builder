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
    const [saveClicked, setSaveClicked] = useState(null);
    const [fileData, setFileData] = useState(null);

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <HeaderEdit
                    templateNum={temp}
                    setSaveClicked={setSaveClicked}
                    saveClicked={saveClicked}
                    toSave={toSave}
                    fileData={fileData}
                />
                <ContainerEdit
                    templateNum={temp}
                    overlayPresent={assetSelected}
                    saveClicked={saveClicked}
                    setToSave={setToSave}
                    setSaveClicked={setSaveClicked}
                    setFileData={setFileData}
                />
                <FooterEdit
                    setOverlay={setAssetSelected}
                />
            </DndProvider>
        </>
    )
}
