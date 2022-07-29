import React from 'react';
import Inside from './inside';
import {UserContext} from './App'

export default function User() {

    return (
        <div>
            <UserContext.Consumer>
                {({arr}) => <h1>{arr.length}</h1>}
            </UserContext.Consumer>
            <Inside />
            <Inside />
            <Inside />
        </div>
    )
}