import React from 'react'

function ChildComponents(props) {
    return (
        <div>
            <button onClick = {() => props.greetHandler('Nazmul')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponents
