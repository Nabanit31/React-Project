import React from 'react'
import Header from '../Header'
import Card from '../Card'
import Apicall from '../Apicall'
const Home = () => {
  const User = [
    {
      "name": "Aarav Sharma",
      "age": 28,
      "city": "Mumbai",
      "profession": "Software Engineer",
      "profile_photo": "https://placehold.co/150x150/EFEFEF/AAAAAA?text=Aarav"
    },
    {
      "name": "Diya Patel",
      "age": 34,
      "city": "Ahmedabad",
      "profession": "Doctor",
      "profile_photo": "https://placehold.co/150x150/D3D3D3/808080?text=Diya"
    },
    {
      "name": "Rohan Singh",
      "age": 45,
      "city": "Delhi",
      "profession": "Architect",
      "profile_photo": "https://placehold.co/150x150/ADD8E6/00008B?text=Rohan"
    },
    {
      "name": "Priya Kumar",
      "age": 22,
      "city": "Bangalore",
      "profession": "Graphic Designer",
      "profile_photo": "https://placehold.co/150x150/FFC0CB/8B0000?text=Priya"
    },
    {
      "name": "Vikram Das",
      "age": 39,
      "city": "Kolkata",
      "profession": "Teacher",
      "profile_photo": "https://placehold.co/150x150/90EE90/006400?text=Vikram"
    }
  ]
  return (
<>
<Header/>
<div className='p-10 flex flex-wrap gap-6'>
    {/* <Card User={User}/> */}
    {User.map(function(elem,idx){
      return <Card key={idx} User = {elem.name} age={elem.age} city={elem.city} profession={elem.profession} profile_photo={elem.profile_photo}/>
    })
    }
    </div>
    <Apicall/>
</>
  )
}

export default Home
