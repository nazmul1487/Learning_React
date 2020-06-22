import React from 'react'
import Person from './Person'
function NameList() {
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
const PersonList =  persons.map(person => <Person person= {person}  /> )
    return (
        <div>
            {
              PersonList
            }
        </div>
    )
}
 
export default NameList
