import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
import './AppHeader.css';

let text = "PLAY GAME"
let input
let temp = 0

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        input = guess
        setState({ ...state, guess })

        if (guess.length == state.word.length) {
            if (guess == state.word) {
                console.log('yeah!')
                text = "YOU WIN!!!"
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('reset')
                text = "YOU LOSE!!!"

                state.attempt += 1
                setState({ ...state, guess: '', attempt: state.attempt })
            }
        }
        temp = state.attempt
    }

    return (
        <div>
            <div>
                <h2>Your answer: {input}</h2>
                <h2>Attempt: {temp}</h2>
            </div>
            {state.chars.map((c, i) => (
                <CharacterCard
                    value={c}
                    key={i}
                    activationHandler={activationHandler}
                    attempt={state.attempt} />
            ))}
            <div className="App-header">
                <h2>{text}</h2>
            </div>
        </div>
    );
}