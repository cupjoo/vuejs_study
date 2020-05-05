import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="button" value="remove func" onClick={() => setFuncShow(false)}></input>
      <input type="button" value="remove class" onClick={() => setClassShow(false)}></input>
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

const funcStyle = 'color:blue';
let funcId = 0;

function FuncComp(props){
  const [number, setNumber] = useState(props.initNumber); // state [상태값, 상태 바꾸는 함수]
  const [date, setDate] = useState(new Date().toString());
  
  // side effect
  useEffect(()=> {
    console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate) '+(++funcId), funcStyle)
    document.title = number;
    // clean up
    return () => console.log('%cfunc => useEffect return (componentDidMount & componentDidUpdate)'+(++funcId), funcStyle);
  }, [number]); // 감시

  useEffect(()=> {
    console.log('%cfunc => useEffect (componentDidMount) '+(++funcId), funcStyle)
    return () => console.log('%cfunc => useEffect return (componentWillUnmount)'+(++funcId), funcStyle);
  }, []);

  console.log('%cfunc => render ' + (++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
        <p>Number: {number}</p>
        <p>Date: {date}</p>
        <input type="button" value="random" onClick={() => setNumber(Math.random())}></input>
        <input type="button" value="date" onClick={() => setDate(new Date().toString())}></input>
    </div>
  );
}

const classStyle = 'color:red';

class ClassComp extends React.Component{
  state = {
    number: this.props.initNumber,
    date: new Date().toString()
  }
  componentDidMount(){
   console.log('%cclass => componentDidMount', classStyle); 
  }
  componentWillUnmount(){
    console.log('%cclass => componentWillUnmount', classStyle); 
  }
  render(){
    console.log('%cclass => render', classStyle); 
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date:(new Date()).toString()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;
