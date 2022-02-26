import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello(){
  useEffect(()=>{
    console.log("hi :)");
    return ()=> console.log("bye :(");
  })
  /**
  useEffect(function (){
    console.log("hi :)");
    return function(){
      console.log("bye :(");
    }
  },[]);
  */
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = ()=> setShowing((cur)=>!cur);


  /** 
   * cleanup 함수는 effect 함수 실행 후
   * 다시 effect 함수 실행하기 전에
   * 실행하는 함수 같다.
  */
  /*useEffect(()=>{
    console.log("I run when 'showing' changes");
    return ()=>{
      debugger
      console.log('des')
    }
  }, [showing]);*/


  return (<div>
    {showing ? <Hello/> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>)
}

export default App;
