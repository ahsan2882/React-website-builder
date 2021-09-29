import { Editor, Frame } from '@craftjs/core';
import { Link } from '@material-ui/core';
import React from 'react';
import cl1 from '../assets/template4images/client1.png';
import cl2 from '../assets/template4images/client2.png';
import cl3 from '../assets/template4images/client3.png';
import cl4 from '../assets/template4images/client4.png';
import { TextH1, TextH2, TextH3 } from '../myComponents/CraftText';
import Accre4Css from './Accreditation.module.css';

export default function Accreditation() {
    return (
        <Editor resolver={{TextH2, TextH1, TextH3}}>
            <Frame>
                <section className="py-28 px-0 w-full">
                    <div className={Accre4Css.containerMain}>
                        <div className="flex flex-col items-center py-10 px-0">
                            <TextH2 classStyle={`${Accre4Css.accreMainH2} text-2xl`} text="we are verified"/>
                            <TextH1 classStyle={`${Accre4Css.accreMainH1} text-5xl text-center`} text="Our Accreditation"/>
                        </div>
                        <div className="flex flex-wrap justify-center my-0 mx-auto mb-8">
                            <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                                <Link to="#" className="no-underline text-black">
                                    <div className="p-5 flex flex-col items-center">
                                        <img src={cl1} alt="client 1" className="w-full" />
                                        <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum."/>
                                    </div>
                                </Link>
                            </div>

                            <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                                <Link to="#" className="no-underline text-black">
                                    <div className="p-5 flex flex-col items-center">
                                        <img src={cl2} alt="client 2" className="w-full" />
                                        <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum." />
                                    </div>
                                </Link>
                            </div>

                            <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                                <Link to="#" className="no-underline text-black">
                                    <div className="p-5 flex flex-col items-center">
                                        <img src={cl3} alt="client 3" className="w-full" />
                                        <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum." />
                                    </div>
                                </Link>
                            </div>

                            <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                                <Link to="#" className="no-underline text-black">
                                    <div className="p-5 flex flex-col items-center">
                                        <img src={cl4} alt="client 4" className="w-full" />
                                        <TextH3 classStyle={Accre4Css.accreH3} text="Lorem ipsum." />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Frame>
        </Editor>
    );
}
