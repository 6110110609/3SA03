import React from 'react';
import './App.css';
import WordCard from './WordCard';
import AppHeader from './AppHeader';

let word = ''
let text = ''

let rand = Math.floor(Math.random() * 3);

switch (rand) {
    case 0:
        word = 'Hello'
        text = 'คำพูดกล่าวทักทาย'
        break;
    case 1:
        word = 'World'
        text = 'ที่อยู่อาศัยของมนุษย์ทุกคน'
        break;
    case 2:
        word = 'React'
        text = 'แอปที่ใช้ทำผลงานชิ้นนี้'
        break;
    case 3:
        word = 'Suthon'
        text = 'ชื่ออาจารย์แลปนี้'
        break;
    case 4:
        word = 'Internet'
        text = 'เครื่องข่ายการสื่อสารที่ทุกคนใช้ติดต่อกันบนโลกออนไลน์'
        break;

    default:
        break;
}

function App() {
    return (
        <div>
            <AppHeader />
            <div className='cardstart'>
                <WordCard value={word} />
            </div>
            <div>
                <center>
                    <button className='button'>
                        <a href="http://localhost:3000/" >RESET</a>
                    </button>
                    <button className={'button'} onClick={() => hintans()}>
                        <a>HINT</a>
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

function hintans() {
    alert("Hint is " + text)
}

export default App;