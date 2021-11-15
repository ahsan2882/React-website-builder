import React from 'react'
import ModalCss from './Modal.module.css'

export default function Modal({handleClose, show, children}) {
    return (
        <>
            <div className={show ? `block ${ModalCss.modal}` : `hidden ${ModalCss.modal}`}>
                <section className={ModalCss['modal-main']}>
                    {children}
                    <button type="button" onClick={handleClose}>
                        OK
                    </button>
                </section>
            </div>
        </>
    )
}
