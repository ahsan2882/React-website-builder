import React from 'react'
import { Link } from 'react-router-dom';
import BottomFooter4Css from './BottomFooter.module.css'
import { TextPara } from '../myComponents/CraftText';
import { Editor, Frame } from '@craftjs/core';

export default function BottomFooter() {
    return (
        <Editor resolver={{TextPara}}>
            <Frame>
                <footer className="bg-black">
                    <div className={`${BottomFooter4Css.container1} ${BottomFooter4Css.footerWrapper}`}>
                        <TextPara classStyle="text-white" text="Copyright © 2021 CITRIX CONSULTANCY. All Rights Reserved."/>
                    </div>
                </footer>
            </Frame>
        </Editor>
    );
}
