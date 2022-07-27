import React, {useState} from 'react';
import User from './User'

export const UserContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      local: 0,
      bucket: 'im a bucket',
      toggleLocal: (props) => {
        this.setState(({local, bucket}) => ({
          local: props === 'Add' ? local + 1 : local -1,
          bucket: props === 'Add' ? 'now im a CHUM bucket' : 'im a bucket'
        })); 
      }
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <User />
        </UserContext.Provider>
      </div>
    )
  }
}
export default App