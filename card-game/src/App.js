import React from 'react';
import './App.css';
import WordCard from './WordCard';
import AppHeader from './AppHeader';

function App() {
    return (
        <div>
            <AppHeader />
            <div className = 'cardstart'>
                <WordCard value="HELLO" />
            </div>
        </div>
    );
}

export default App;