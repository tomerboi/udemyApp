import React from 'react';
import Person from './Person/Person.js'

const Persons = (props) => {
    return (
        <div>
            {props.persons.map((person, index) => {
                return <Person
                    click={() => props.delete(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => props.change(event, person.id)} />
            })}
        </div>
    )
}

export default Persons;