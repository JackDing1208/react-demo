import React,{useState} from 'react';
import {createStore} from 'redux'
import Counter from './Counter'
import './App.css';


const reducer=(state,action)=>{
    if(state){return 0}
    switch (action.type) {
        case 'plus':
            return state+1
        case 'minus':
            return state-1
    }
}

const store= createStore(reducer)



function App() {
    const [state,changeState]=useState({
        message:'haha',
        number:5
    })
    return (

    <div className="App">
      <Counter name={'haha'} number={state.number} store={store}/>
    </div>
  );
}

export default App;
