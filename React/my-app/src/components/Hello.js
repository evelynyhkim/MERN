import React from 'react'

function Hello({col, bgCol}){
    const stl = {color: col, background-color: bgCol}
    return <p style={stl}>Hello</p>
}

export default Hello