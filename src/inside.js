import React, { useState } from 'react';
import { UserContext } from './App'

export default function User() {
    const [butt, setButt] = useState('Add');

    function handleChange(props) {
        setButt(butt === 'Add' ? 'Remove' : 'Add');
        console.log("we handled SHIT");
    }

    return (
        <div>
            <UserContext.Consumer>
                {(props) => (
                    <button onClick ={() => {props.toggleLocal(butt); handleChange()}}>{butt}</button>
                )}
            </UserContext.Consumer>
        </div>
    )
}