import React, { useState } from 'react'
import Modal from './modal'
import './modal.css'

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false)

    const handleOnClick = () => {
        setShowModalPopup(!showModalPopup)
    }

    const onClose = () => {
        setShowModalPopup(false)
    }

    return (
        <div>
            <button onClick={handleOnClick}>Open Modal Popup</button>
            {
                showModalPopup ? <Modal header={<h1>Header Modal</h1>} handleOnClose={onClose} /> : null
            }
        </div>
    )
}

export default ModalTest
