import React from 'react';
import cl1 from '../assets/template4images/client1.png';
import cl2 from '../assets/template4images/client2.png';
import cl3 from '../assets/template4images/client3.png';
import cl4 from '../assets/template4images/client4.png';
import Accre4Css from './Accrediation.module.css';

export default function Accrediation() {
    return (
        <section className="py-28 px-0">
            <div className={Accre4Css.containerMain}>
                <div className="flex flex-col items-center py-10 px-0">
                    <h2 className={`${Accre4Css.accreMainH2} text-2xl`}>we are verified</h2>
                    <h1 className={`${Accre4Css.accreMainH1} text-5xl text-center`}>Our Accrediation</h1>
                </div>
                <div className="flex flex-wrap justify-center my-0 mx-auto mb-8">
                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl1} alt="client 1" className="w-full"/>
                                <h3 className={Accre4Css.accreH3}>Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl2} alt="client 2" className="w-full"/>
                                <h3 className={Accre4Css.accreH3}>Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl3} alt="client 3" className="w-full"/>
                                <h3 className={Accre4Css.accreH3}>Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>

                    <div className={`${Accre4Css.accreCardWrapper} bg-black m-5`}>
                        <a href="#" className="no-underline text-black">
                            <div className="p-5 flex flex-col items-center">
                                <img src={cl4} alt="client 4" className="w-full"/>
                                <h3 className={Accre4Css.accreH3}>Lorem ipsum.</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
