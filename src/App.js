import React, { Component } from 'react';
import './App.css';
import './style.css';
import Person from './Person/Person.js';
import Styled from 'styled-components'

class App extends Component {

    state =
        {
            persons: [
                { id: '1', name: "Tomer", age: 29 },
                { id: '2', name: "Chen", age: 27 },
                { id: '3', name: "Lidor", age: 23 }
            ],
            showPersons: false,
            num: 0,
            chars: [],
            charsWithoutIndex: []

        }

    SetUserNameHandler = (event, id) => {
        console.log("clicked")
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        }
        person.name = event.target.value;

        const persons1 = [...this.state.persons]
        persons1[personIndex] = person;
        this.setState({
            persons: persons1
        })
    }

    SetShowPersons = () => {
        this.setState(
            {
                showPersons: !this.state.showPersons
            }
        )
    }

    deletePerson(personIndex) {
        let persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState(
            { persons: persons }
        )
    }

    render() {
        let persons = null;
        const StyledButton = Styled.button`
        background-color: ${props => props.alt ? 'blue' : 'green'};
            &:hover {
                background-color: ${props => props.alt ? 'salmon' : 'purple'};
                color: black;
            }
        `
        let style = {
            backgroundColor: 'green',
            ':hover': {
                backgroundColor: 'purple',
                color: 'black'
            }
        };
        if (this.state.showPersons) {
            style.backgroundColor = 'blue';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'grey'
            }
            persons = (
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
            );
        }
        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }
        return (
            <div>
                <StyledButton onClick={this.SetShowPersons} alt={this.state.showPersons}>
                {this.state.showPersons ? "Hide!" : "Show!"}
                </StyledButton>
                <p className={classes.join(' ')}>This is owsome!</p>
                {persons}
            </div>
        )
    }
}

export default App;

