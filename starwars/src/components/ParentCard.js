import React, {useState, useEffect} from "react"
import Card from "./Card"
import axios from "axios"

const ParentCard = () => {
    //set up our states
    const [profile, setProfile] = useState([])
    const [planet, setPlanet] = useState("1")

    //useEffect for profile
    useEffect(()=>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log('THIS IS THE CONSOLE OF RESPONSE', response.data.results)
            setProfile(response.data.results)
        })
        .catch(error=>{
            console.log("ERROR--> ", error)
        })
    }, []) //end of useEffect

    //useEffect for planet
    // useEffect(()=>{
    //     axios.get(`https://swapi.co/api/planets/${planet}/`)
    //     .then(response=> {
    //         console.log('PLANET RESPONSE', response)
    //         setPlanet(response.data.name)
    //     })
    //     .catch(error=>{
    //         console.log('PLANET ERROR', error)
    //     })

    // }, [planet])

    return (
        <div>
            {profile.map((item, index)=> {
               return <Card key={index} name={item.name} gender ={item.gender} height={item.height} hair={item.hair_color} eye={item.eye_color} dob={item.birth_year} homeworld={item.homeworld} films={item.films.length}/>
            })}
        </div>
    )
}
export default ParentCard