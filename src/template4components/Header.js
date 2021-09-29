import React from 'react'
import Header4Css from './Header.module.css'
import { DivText } from '../myComponents/CraftDivText';
import { Editor, Frame } from '@craftjs/core';

export default function Header() {
    return (
        <Editor resolver={{DivText}}>
            <header className={`${Header4Css.header} w-full`}>
                <Frame>
                    <section className={`flex justify-between items-center py-2 ${Header4Css.container1}`}>
                        <ul className={`list-none flex p-0 justify-between items-center ${Header4Css.contactHeader}`}>
                            <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                                <div className="mr-1">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <DivText className="mr-1" text="+10800-33-000"></DivText>
                            </li>
                            <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                                <div className="mr-1">
                                    <i className="fab fa-skype"></i>
                                </div>
                                {/* <div className="mr-1">security</div> */}
                                <DivText className="mr-1" text="security"></DivText>
                            </li>
                            <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                                <div className="mr-1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                {/* <div className="mr-1">21 Newstreet, New York, 269-24</div> */}
                                <DivText className="mr-1" text="21 Newstreet, New York, 269-24"></DivText>
                            </li>
                        </ul>
                        <ul className="list-none flex p-0 justify-between items-center w-72">
                            <li className={`${Header4Css.HeaderLinks} flex justify-around items-center`}>
                                <div className="ml-3">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <div className="ml-3 w-5 h-5 bg-black font-black flex justify-center items-center border-rad-050">0</div>
                            </li>
                            <li className={`${Header4Css.HeaderLinks} flex justify-around items-center ml-3 border-b border-solid border-white`}>
                                <i className="fas fa-search pr-2"></i>
                                <input
                                    type="text"
                                    name="search-bar"
                                    placeholder="Search"
                                    className="search-bar-header w-full outline-none border-0 bg-black placeholder-white"
                                />
                            </li>
                        </ul>
                    </section>
                </Frame>
            </header>
        </Editor>
    );
}
