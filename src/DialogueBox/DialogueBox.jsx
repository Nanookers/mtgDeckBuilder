import React from 'react'
import { useState } from 'react'
import './DialogueBox.css'

export const DialogueBox = () => {

    const [modalPopUp, setModalPopUp] = useState(false)

    // Opens the Modal
    const handleModalPopUp = () => {
        setModalPopUp(true)
    }

    // Closes the Modal
    const handleModalClose = () => {
        setModalPopUp(false)
    }

    // Switch is to render the dialogue box. false = just button
                                         //   true = modal box
    switch (modalPopUp){
        case false:
            return (
                <div className="openButton">
                    <button onClick={handleModalPopUp}>Push Me!</button>
                </div>
            )

        case true:
            return (
                <div className="dialogueBox">
                    <div className="titleBanner">
                        Success! 
                    </div>
                    <div className="infoText">
                        Lorem ipsum bull goes here, but that is boring to write.
                    </div>
                    <div className="closeButton">
                        <button onClick={handleModalClose}>Close Me!</button>
                    </div>
                </div>
            )
}
}
