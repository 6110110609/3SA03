import React from 'react';
import './App.css';
import WordCard from './WordCard';
import AppHeader from './AppHeader';

let word = ''

let rand = Math.floor(Math.random() * 3);

switch (rand) {
    case 0:
        word = 'Hello'
        break;
    case 1:
        word = 'World'
        break;
    case 2:
        word = 'React'
        break;

    default:
        break;
}

function App() {
    return (
        <div>
            <AppHeader />
            <div className='cardstart'>
                <WordCard value = {word} />
            </div>
            <div>
                <center>
                    <button className='button'>
                        <a href="http://localhost:3000/" >RESET</a>
                    </button>
                    <button className={'button'} onClick={() => showans(word)}>
                        <a>ANSWER</a>
                    </button>
                </center>
            </div>

        </div>
    );
}

function showans(word) {
    alert("The answer is " + word)
}

export default App;