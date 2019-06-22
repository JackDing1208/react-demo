import React, {useState} from 'react';
import {createStore} from 'redux'
import Counter from './Counter'
import Button from './components/Button'
import './App.css';


const reducer = (state, action) => {
    if (state) {
        return 0
    }
    switch (action.type) {
        case 'plus':
            return state + 1
        case 'minus':
            return state - 1
    }
}

const store = createStore(reducer)


function App() {
    const [state, setState] = useState({
        message: 'haha',
        number: 5
    })
    const setMessage = (value) => {
        setState({
                ...state,
                message: value
            }
        )
    }
    return (

        <div className="App">
            <Counter name={'haha'} number={state.number} store={store}/>
            <Button onClick={() => {
                setMessage(Math.random())
            }}>点我</Button>
        </div>
    );
}

export default App;
