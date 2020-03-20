import React from "react" 

const Card = props => {
    return (
        <div className="card-container">
            <h3>{props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hair}</p>
            <p>Eye Color: {props.eye}</p>
            <p>Birth Year: {props.dob}</p>
            <p>HomeWorld: Testing {props.homeworld}</p>
            <p>Films Appeared in: {props.films}</p>
        </div>
    )
}
export default Card