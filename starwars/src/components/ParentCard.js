import React, {useState, useEffect} from "react"
import Card from "./Card"
import axios from "axios"

const ParentCard = () => {
    //set up our states
    const [profile, setProfile] = useState([])

    //useEffect
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

    return (
        <div>
            {profile.map((item, index)=> {
               return <Card key={index} name={item.name} gender ={item.gender} height={item.height} />
            })}
        </div>
    )
}
export default ParentCard