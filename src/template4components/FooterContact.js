import { Editor, Frame } from '@craftjs/core';
import React from 'react'
import { TextPara } from '../myComponents/CraftText';
import FooterContact4Css from './FooterContact.module.css'

export default function FooterContact() {
    return (
        <Editor resolver={{TextPara}}>
            <Frame>
                <div className={FooterContact4Css.contactFooterWrapper}>
                    <div className={`${FooterContact4Css.container1} flex flex-col justify-around items-center py-28`}>
                        <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`}
                            text="Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                            eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                            semper a diam."/>
                        <TextPara classStyle={`${FooterContact4Css.contactParaFooter} text-center text-white`} text="021-34556899"/>
                        <div className={`${FooterContact4Css.contactBottomLink} flex justify-evenly`}>
                            <i className="fab fa-twitter p-4 bg-black text-white rounded-full"></i>
                            <i className="fab fa-facebook p-4 bg-black text-white rounded-full"></i>
                            <i className="fab fa-instagram p-4 bg-black text-white rounded-full"></i>
                            <i className="fab fa-youtube p-4 bg-black text-white rounded-full"></i>
                        </div>
                    </div>
                </div>
            </Frame>
        </Editor>
    );
}
