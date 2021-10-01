import React from 'react'


export const Sec03 = () => {
    return (


        <section className="body-font text-gray-600 mt-12">
            <div className="flex flex-wrap p-12 sm:-m-4  md:36 -mx-4 -mb-10 -mt-0 md:space-y-0 space-y-8 justify-around">
                <div className="">
                    <h1 className="w-2/2 text-2xl">  Compare your returns in ELSS with other scheme
                    </h1>

                    <p>inversment per month for five year</p>
                </div>
                {/* ---col-2 */}
                <div className="pl-12">
                    <div className="flex flex-wrap">
                        <div className="w-18 p-8 text-">
                            <h1> Bank fixed deposit </h1>
                            <p className="text-UL-400"> $ 800,000</p>
                        </div>
                        <div className="p-8 w-18 bg-gray-50">
                            <h1> Publlic provident fund </h1>
                            <p className="text-UL-400"> $ 800,000</p>

                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="p-8 bg-gray-50">
                            <h1> National saving certi </h1>
                            <p className="text-UL-400"> $ 800,000</p>

                        </div>
                        <div className="w-48 p-8  bg-UL-400">
                            <h1 className="text-white"> ELSS </h1>
                            <p className="text-white"> $ 800,000</p>

                        </div>
                    </div>


                </div>





            </div>



        </section>

    );
}