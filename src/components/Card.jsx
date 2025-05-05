import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'> 
      {/* <h2>Hello This is a Property using (Props) {props.User}</h2> */}
      <img className="inline-block h-32 w-32 rounded-full" src={props.profile_photo} alt="..." />
      <h3 className='text-xl mb-4'>{props.User}</h3>
      <h4>{props.city}, {props.age}</h4>
      <h4 className='text-blue-400'>{props.profession}</h4>
      <button className='active:scale-90'>Add Friend</button>
    </div>
  )
}

export default Card
