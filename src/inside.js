import React, { useState } from 'react';
import { UserContext } from './App'

export default function User() {
    const [butt, setButt] = useState('Add');

    function handleChange() {
        setButt(butt === 'Add' ? 'Remove' : 'Add')
    }

    return (
        <div>
            <UserContext.Consumer>
                {({local, toggleLocal}) => (
                    <button onClick={() => { toggleLocal(butt); handleChange(); }}>{butt}</button>
                )}
            </UserContext.Consumer>
        </div>
    )
}