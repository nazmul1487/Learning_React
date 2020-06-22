import React from 'react'
function Person({person}) {
    return (
        <div>
            <h2>i am {person.name}, 
                    my id is {person.id}, my age is {person.age} and i'm {person.gender}</h2>
        </div>
    )
}

export default Person
