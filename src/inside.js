import React, { useState } from 'react';
import { UserContext } from './App'

export default function User() {
    const [butt, setButt] = useState('Add');
    const [title, setTitle] = useState(Math.floor(Math.random()*100));

    function handleChange(props) {
        setButt(butt === 'Add' ? 'Remove' : 'Add');
        console.log("we handled SHIT");
    }

    let boys = {
        butt: butt,
        title: title
    }

    return (
        <div>
            <UserContext.Consumer>
                {(props) => (
                    <button onClick ={() => {props.toggleLocal(boys); handleChange()}}>{butt}</button>
                )}
            </UserContext.Consumer>
        </div>
    )
}