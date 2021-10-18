import React, {useEffect, useState} from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import Template4Page from '../template4components/Template4Page'
import Template1Page from '../template1components/Template1Page'
import Template2Page from '../template2components/Template2Page'
import Template3Page from '../template3components/Template3Page'
import EmptyTemplate from '../editorScreen/EmptyTemplate'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/items'
import { assetObject } from './assetCode'


export default function ContainerEdit({ defWidth, templateNum, overlayPresent }) {
    // let children = [];
    const [updateChildren, setUpdateChildren] = useState([])
    // children.push(<img src="https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg" alt="Scenery"/>)
    const [{ canDrop }, drop] = useDrop({
        accept: ItemTypes.SECTION,
        drop: (item, monitor) => {
            console.log(item)
            let valueString = Object.values(item)[0];
            console.log(valueString)
            setUpdateChildren([...updateChildren, assetObject[valueString]])
        },
        collect: monitor =>  ({
            canDrop: !!monitor.canDrop()
        })
    })
    window.resizeTo(defWidth, window.innerHeight);
    const temp = templateNum;

    useEffect(() => {
        console.log("use effect ran:   ", defWidth);
        // console.log(updateChildren)
    }, [defWidth, updateChildren]);
    let component;
    switch(temp){
        case 1:
            component = <Template1Page/>
            break;
        case 2: 
            component = <Template2Page/>
            break;
        case 3:
            component = <Template3Page/>
            break;
        case 4:
            component = <Template4Page/>
            break;
        default:
            component = <EmptyTemplate/>
    }
    
    return (
        <>
            {/* {(canDrop ? <div style={{ "background": `rgba(0,0,0,0.5)` }} className={ContainerEditCss.overlay}></div> : null)} */}
            <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`} ref={drop} style={canDrop ? { "background": `rgba(0,0,0,0.5)`} : null}>
                <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                    <div className={`${ContainerEditCss.dot} mx-1`}></div>
                </div>
                {temp === 0 ?
                    <div className={`${ContainerEditCss.editing} ${ContainerEditCss.empty} mx-auto overflow-y-auto`}>
                        {/* <EmptyTemplate/> */}
                        {updateChildren}
                    </div>
                    : <div className={`${ContainerEditCss.editing} mx-auto bg-gray-200 overflow-y-auto`}>
                        {component}
                    </div>}
            </section>
        </>
    );
}