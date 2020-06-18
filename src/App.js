import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import EventBind from './components/EventBind';
import ParentComponents from './components/ParentCompnents';
// import Greet from './components/Greet'
//  import Wel from './components/Welcome'
// import Hel from './components/Hello'
// import Messages from './components/Messages'
//import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick';


function App() {
  return (
    <div className="App">
      {/* <Greet name=" nazmul" age = "23">
      you are a noob</Greet>
      <Greet name=" nazmul1" age = "24" >
        <button>Action</button>
        </Greet>
      <Greet name=" nazmul2" age = "25" >
      you are a noob2</Greet>
      

      <Wel name=" nazmul" age = "23"/>
      <Wel name=" nazmul1" age = "24"/>
      <Wel name=" nazmul2" age = "25"/>
      <Wel name=" nazmul3" age = "26" />
      <Hel/>
      <Messages/> 
      <Counter/>
      <Greet name=" nazmul3" age = "26"/>
      <Wel name=" nazmul3" age = "26" />
      <FunctionClick/> 
      <ClassClick/>
      <EventBind/>*/}
      <ParentComponents/>
    </div>
  );
}

export default App;

