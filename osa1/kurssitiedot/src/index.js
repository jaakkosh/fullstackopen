import React from 'react'
import ReactDOM from 'react-dom'
const Part=(props)=>{

    return(
        <div>{props.parts.name} {props.parts.exercises}</div>
    )

}
const Header =(props)=>{
    return (
        <div>
            <h1>
                {props.kurssi}
            </h1>
        </div>
    )

}
const Content =(props)=>{
    console.log(props.parts)

    return(
        <div>
            <Part parts={props.parts[0]}/>
            <Part parts={props.parts[1]}/>
            <Part parts={props.parts[2]}/>
        </div>
    )

}
const Total =(props)=>{

    return(
        <div>tehäviä yhteensä {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</div>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>

            <Header kurssi={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))