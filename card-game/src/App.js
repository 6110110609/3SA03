import React from 'react';
import './App.css';
import WordCard from './WordCard';
import AppHeader from './AppHeader';

function App() {
    return (
        <div>
            <AppHeader />
            <div className='cardstart'>
                <WordCard value="HELLO"/>
            </div>
            <div>
                <center>
                    <button className='button'>
                        <a href="http://localhost:3000/" >RESET</a>
                    </button>
                    <button className={'button'} onClick={() => showans("HELLO")}>
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
