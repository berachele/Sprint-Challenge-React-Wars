import React from "react" 

const Card = props => {
    return (
        <div className="card-container">
            <h3>Name of Character {props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: </p>
            <p>Eye Color: </p>
            <p>Birth Year: </p>
            <p>HomeWorld: Testing</p>
            <p>Films Appeared in: Testing</p>
        </div>
    )
}
export default Card