import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

let ans = "HELLO"
let input

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
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
                setState({ ...state, guess: '', completed: true })
            } else {
                console.log('reset')
                setState({ ...state, guess: '', attempt: state.attempt + 1 })
            }
        }
    }

    return (
        <div>
            <div>
                <h2>Your answer: {input}</h2>
            </div>

            {state.chars.map((c, i) => (
                <CharacterCard
                    value={c}
                    key={i}
                    activationHandler={activationHandler}
                    attempt={state.attempt} />
            ))}
        </div>
    );
}