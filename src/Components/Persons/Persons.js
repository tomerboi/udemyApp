import React, { Component } from 'react';
import Person from './Person/Person.js'
class Persons extends Component {
    state = {
        persons: [
            { id: '1', name: "Tomer", age: 29 },
            { id: '2', name: "Chen", age: 27 },
            { id: '3', name: "Lidor", age: 23 }
        ]
    }

    SetUserNameHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePerson(personIndex) {
        let persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState(
            { persons: persons }
        )
    }

    render() {
        const ans = null;
        if (this.props.show) {
            ans = 
            <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        click={() => this.deletePerson(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.SetUserNameHandler(event, person.id)} />
                })}
            </div>
        }
        return (ans);
    }
}

export default Persons;