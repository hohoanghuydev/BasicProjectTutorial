import React, { useState } from 'react'

const Modal = ({ id, header, footer, body, handleOnClose }) => {

    return (
        <div id={id || 'Modal'} className='modal'>
            <div className="modal-content">
                <div className="header">
                    <span onClick={handleOnClose} className='close-modal-icon'>&times;</span>
                    <h2>{header ? header : 'Header'}</h2>
                </div>
                <div className="body">
                    {
                        body ? body : <div>
                            <p>This is modal box</p>
                        </div>
                    }
                </div>
                <div className="footer">
                    {
                        footer ? footer : <h2>Footer</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal
