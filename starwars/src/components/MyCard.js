import React from "react" 
import { Card, CardBody, Badge, CardText, Col } from "reactstrap"
import styled from "styled-components"

const MyCard = props => {
    const CardBodyStyles = styled.div`
        background-color: rgba(255,228,181, 0.5);

    `

    const Title = styled.h3`
        font-family: "Righteous", sans-serif;
        color: indianred;
    `

    const Text = styled.p`
        font-family: "Play", sans-serif;
        color: slategrey;
        font-size: 1.2rem;    
    `

    return (
        <Col xs="12" sm="6" md="4" xl="3">
            <Card className="card-container">
                <CardBodyStyles>
                    <Title color="dark">{props.name}</Title>
                    <Text>Gender: {props.gender}</Text>
                    <Text>Height: {props.height}</Text>
                    <Text>Hair Color: {props.hair}</Text>
                    <Text>Eye Color: {props.eye}</Text>
                    <Text>Birth Year: {props.dob}</Text>
                    {/* <Text>HomeWorld: Testing {props.homeworld}</Text> */}
                    <Text>Films Appeared in: {props.films}</Text>
                </CardBodyStyles>
            </Card>
        </Col>
    )
}
export default MyCard