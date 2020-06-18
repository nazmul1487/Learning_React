import React from 'react'

// function Greet(){
//     return <h1>Hello Nazmul</h1>
// }

const Greet = props => {
    const {name, age} = props
    return (
        <div>
            <h1>Hello {name}, {age} years old.</h1>
            
        </div>
            
    )
}

export default Greet;