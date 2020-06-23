import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Namul', 'milon', 'fakrul']
    const persons = [
        {
            id :1,
            name: 'nazmul',
            age: 23,
            gender: 'Male'
        },
        {
            id :2,
            name: 'milon',
            age: 22,
            gender: 'Male'
        },
        {
            id :3,
            name: 'fakrul',
            age: 24,
            gender: 'Male'
        }

    ]
// const PersonList =  persons.map(person => <Person key={person.id} person= {person}  /> )
const nameList =  names.map((name, index) => <h2 key = {index}>{index} {name}</h2>)
    return (
        <div>
            {
              nameList
            }
        </div>
    )
}
 
export default NameList
