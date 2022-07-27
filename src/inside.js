import React, { useState } from 'react';
import { UserContext } from './App'

export default function User() {
    const [butt, setButt] = useState('Add');

    async function handleChange(props) {
        setButt(butt === 'Add' ? 'Remove' : 'Add');
        console.log(props);
    }

    return (
        <div>
            <UserContext.Consumer>
                {({local, toggleLocal, bucket}) => (
                    <button onClick={() => {toggleLocal(butt); handleChange(bucket)}}>{butt}</button>
                )}
            </UserContext.Consumer>
        </div>
    )
}