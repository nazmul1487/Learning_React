import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLogggedin: true
        }
    }
    
    render() {


        return this.state.isLogggedin && <div>Welcome Nazmul</div>

        // return (
        //      this.state.isLogggedin ?
        //     <div> welcome nazmul</div>:
        //     <div>Welcome Guest</div>
        // )


    //     let message
    //     if(this.state.isLogggedin)
    //     {
    //         message = <div>welcome nazmul</div>
    //     }
    //     else{
    //         message = <div>Welcome Guest</div>
    //     }
    // return <div>{message}</div>

    // render() {
    //     if(this.state.isLogggedin)
    //     {
    //         return <div>Hello nazmul</div>
    //     }
    //     else{
    //         return <div>WelCome Guest</div>
    //     }    
    }


    }


export default UserGreeting
