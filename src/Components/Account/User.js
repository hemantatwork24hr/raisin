import React from 'react'

function User() {
    const items = [{id: 1, firstName: 'Hemant', lastName: 'Gajbe'}]
    console.log(items);
    return (

        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key= {item.id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
        
    )
}

export default User
