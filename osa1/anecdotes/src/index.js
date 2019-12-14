import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
    const [selected, setSelected] = useState({anekdootti: 0,aanet: 0})
    const [random, setRandom] =useState(0)
    // console.log("random keskellä"+random)

    const Anekdootti=()=>{

        Sattuma(anecdotes,setRandom)


    }


    const Aanesta=()=>{

        const newClicks = {
            aanet: selected.aanet =tyhja[random]++,
            anekdootti: selected.anekdootti =anecdotes[random]
        }

        setSelected(newClicks)

    }
    const Eniten=()=>{

        const isoin = tyhja.indexOf(Math.max.apply(Math, tyhja))
        console.log(isoin)
        return(
            anecdotes[isoin]
        )

    }


    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>{anecdotes[random]}
            </div>
            <div>has {tyhja[random]} votes
            </div>

            <button onClick={Aanesta}>aanesta</button>
            <button onClick={Anekdootti}>anekdootti</button>
            <div>
                <h1>Anecdote with most votes</h1>
                <div>{Eniten()}</div>

            </div>






        </div>
    )

}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



const tyhja = new Array(anecdotes.length).fill(0)
const Sattuma=(anectodes, setRandom)=>{
    setRandom(Math.floor(Math.random()*anecdotes.length))
    console.log("sattuma funktiota kursutaan: ")
}



ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)