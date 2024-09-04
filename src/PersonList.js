import React from 'react'
import Person from './Person'

const PersonList = ({persons}) => {
  return (
    <div>
        {
            persons.map((person , i) => <Person person={person} key={i}/>)
        }
    </div>
  )
}

export default PersonList