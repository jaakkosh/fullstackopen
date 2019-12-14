import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) =>{

    return(
        <div>
            <div>
                <h1>Anna palautetta</h1>
            </div>
            <button onClick={props.hyva}>hyva</button>
            <button onClick={props.ok}>ok</button>
            <button onClick={props.paha}>huono</button>

        </div>
    )
}
const Statistics = (props) => {
    let neutral = props.neutral
    let bad = props.bad
    let good = props.good
    let all =good+bad+neutral


    const handleBad = () => {
        props.setBad(bad + 1)
    }

    const handleGood = () => {
        //   props.setAll(props.all + 1)
        props.setGood(good + 1)
        // props.trackAll(props.allvalues + 1)
    }
    const handleNeutral = () => {
        props.setNeutral(neutral + 1)

    }

    if(all===0)
    {
        return(
            <div>
                <Button hyva={handleGood}paha={handleBad}ok={handleNeutral}/>
                <div>
                    <h1>Ei annettuja arvoja</h1>
                </div>
            </div>

        )
    }
    else {
        return (

            <div>
                <Button hyva={handleGood} paha={handleBad} ok={handleNeutral}/>
                <table>
                    <tbody>
                    <tr>
                        <td>hyva </td><td>{props.good}</td>
                    </tr>
                    <tr>
                        <td>ok </td><td>{props.neutral}</td>
                    </tr>
                    <tr>
                        <td>huono </td><td>{bad}</td>
                    </tr>
                    <tr>
                        <td>kaikki </td><td>{all}</td></tr>
                    <tr>
                        <td>keskiarvo </td><td>{((good - bad) / all)}</td>
                    </tr>
                    <tr>
                        <td>prosentit </td><td>{100 * good / all}%</td>
                    </tr>
                    </tbody>
                </table>

            </div>

        )
    }
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0) //good= arvo setGood funktio
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Statistics good={good}
                        setGood={setGood} neutral={neutral}
                        setNeutral={setNeutral} bad={bad}
                        setBad={setBad}

            />

        </div>


    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA




