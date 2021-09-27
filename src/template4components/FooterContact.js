import React from 'react'
import FooterContact4Css from './FooterContact.module.css'

export default function FooterContact() {
    return (
        <div className={FooterContact4Css.contactFooterWrapper}>
            <div className={`${FooterContact4Css.container1} flex flex-col justify-around items-center py-28`}>
                <p className={`${FooterContact4Css.contactParaFooter} text-center text-white`}>
                    Pellentesque congue non augue vitae pellentesque. Morbi sollicitudin
                    eleifend rhoncus. Mauris vel nisl a massa viverra sollicitudin
                    semper a diam.
                </p>
                <p className={`${FooterContact4Css.contactParaFooter} text-center text-white`}>021-34556899</p>
                <div className={`${FooterContact4Css.contactBottomLink} flex justify-evenly`}>
                    <i className="fab fa-twitter p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-facebook p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-instagram p-4 bg-black text-white rounded-full"></i
                    ><i className="fab fa-youtube p-4 bg-black text-white rounded-full"></i>
                </div>
            </div>
        </div>
    );
}
