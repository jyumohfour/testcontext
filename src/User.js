import React from 'react';
import Inside from './inside';
import {UserContext} from './App'

export default function User() {

    return (
        <div>
            <UserContext.Consumer>
                {({local}) => <h1>{local}</h1>}
            </UserContext.Consumer>
            <Inside />
            <Inside />
            <Inside />
        </div>
    )
}