import React, { useState } from 'react'

const Apply = () => {

    const [openPopUp, setOpenPopUp] = useState(false)


    return (
        <>
            <div>
                <div>
                    job data
                </div>
                <button onClick={() => setOpenPopUp(!openPopUp)}>Apply</button>
            </div>

            {
                openPopUp ? <div>
                    fill the form info
                </div>
                    : 'error in applying'
            }
        </>
    )
}

export default Apply