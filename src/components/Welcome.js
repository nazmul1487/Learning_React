import React, {Component} from 'react'

class Welcome extends Component {
    render (){
        const {name, age} = this.props
        return (
       <div>
            <h1>Hi, {name}, {age} years old.</h1>
           
       </div>
        )
    }
}
export default Welcome;