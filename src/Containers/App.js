import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons.js'
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

    SetUserNameHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex( p => {
          return p.id === id;
        } );
    
        const person = {
          ...this.state.persons[personIndex]
        };
    
        // const person = Object.assign({}, this.state.persons[personIndex]);
    
        person.name = event.target.value;
    
        const persons = [...this.state.persons];
        persons[personIndex] = person;
    
        this.setState( { persons: persons } );
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
    
        let btClass = [classes.Red]
        if (this.state.showPersons) {
            btClass.push(classes.red)
            persons = (
                <Persons
                    delete={this.deletePerson}
                    persons={this.state.persons}
                    change={this.SetUserNameHandler}
                ></Persons>
            );
        }
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        return (
            <div className={classes.App}> 
                <button className={btClass.join(' ')} onClick={this.SetShowPersons}>
                {this.state.showPersons ? "Hide!" : "Show!"}
                </button>
                <p className={assignedClasses.join(' ')}>This is owsome!</p>
                {persons}
            </div>
        )
    }
}

export default App;

