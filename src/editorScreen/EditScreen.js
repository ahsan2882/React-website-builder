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
    const [templateSubPage, setTemplateSubPage] = useState("Home");
    const [saveClicked, setSaveClicked] = useState(null);
    const [fileData, setFileData] = useState({});
    const [chatInclude, setChatInclude] = useState(false);
    const [displayDevice, setDisplayDevice] = useState(true)

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <HeaderEdit
                    setTemplateSubPage={setTemplateSubPage}
                    templateNum={temp}
                    setSaveClicked={setSaveClicked}
                    saveClicked={saveClicked}
                    toSave={toSave}
                    fileData={fileData}
                    setDisplayDevice={setDisplayDevice}
                />
                <ContainerEdit
                    templateSubPage={templateSubPage}
                    templateNum={temp}
                    overlayPresent={assetSelected}
                    saveClicked={saveClicked}
                    setToSave={setToSave}
                    setSaveClicked={setSaveClicked}
                    chatInclude={chatInclude}
                    setDisplayDevice={setDisplayDevice}
                    displayDevice ={displayDevice}
                    setFileData={setFileData}
                />
                <FooterEdit
                    setOverlay={setAssetSelected}
                    setChatInclude={setChatInclude}
                    chatInclude={chatInclude}
                />
            </DndProvider>
        </>
    )
}
