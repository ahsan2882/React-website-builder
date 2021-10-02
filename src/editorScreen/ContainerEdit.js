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
        console.log("CurrentTemp: ", temp);
    }, [defWidth, temp]);
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
        <section className="text-gray-600 body-font relative mt-32">
            <div className={`container flex justify-center items-center bg-gray-200 ${ContainerEditCss['editing']} rounded-md mx-auto mt-10`}>
                <div className="flex flex-col justify-center items-center text-center w-full mb-12">
                   {component}
                </div>
            </div>
        </section>
    );
}