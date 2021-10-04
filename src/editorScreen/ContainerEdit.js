import React, {useEffect} from 'react'
import ContainerEditCss from './ContainerEdit.module.css'
import Template4Page from '../template4components/Template4Page'
import Template1Page from '../template1components/Template1Page'
import Template2Page from '../template2components/Template2Page'
import Template3Page from '../template3components/Template3Page'
import EmptyTemplate from '../editorScreen/EmptyTemplate'


export default function ContainerEdit({ defWidth, templateNum}) {
    window.resizeTo(defWidth, window.innerHeight);
    const temp = templateNum;

    useEffect(() => {
        console.log("use effect ran:   ", defWidth);
    }, [defWidth]);
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
        <section className={`mt-24 ${ContainerEditCss.editWrap} mx-auto`}>
            <div className={`flex py-2 pl-2 border-b border-gray-200`}>
                <div className={`${ContainerEditCss.dot} mx-1`}></div>
                <div className={`${ContainerEditCss.dot} mx-1`}></div>
                <div className={`${ContainerEditCss.dot} mx-1`}></div>
            </div>
            {temp === 0 ? 
                <div className={`${ContainerEditCss.editing} ${ContainerEditCss.empty} mx-auto overflow-hidden`}>
                    <EmptyTemplate/>
                </div>
                : <div className={`${ContainerEditCss.editing} mx-auto bg-gray-200 overflow-hidden`}>
                    {component}
                </div>}
        </section>
    );
}