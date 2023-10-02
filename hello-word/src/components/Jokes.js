import React, { useState,useEffect } from 'react';
import Data from "./JokesData";

export default function Jokes() {
    const [jokes, setJokes] = useState([]);
    useEffect(() => {
        setJokes(Data); 
    }, []);

    return (
        <div>
            {jokes.map((joke, index) => (
                <div className='joke-name' key={index}>
                    <h1>Setup: {joke.setup}</h1>
                    <p>Punchline: {joke.punchline}</p>
                </div>
            ))}
        </div>
    );
}
