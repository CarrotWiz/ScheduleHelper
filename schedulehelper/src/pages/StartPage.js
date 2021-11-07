import React, { useState } from 'react';


function StartPage(props) {
    return (
        <>
            <div className="">Choose one of the following</div>
            <button onClick={() => props.setPage(1)}>Browse Classes</button>
            <button onClick={() => props.setPage(2)}>Upload Curriculum</button>
        </>
    )
}

export default StartPage
