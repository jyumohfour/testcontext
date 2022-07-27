import React from 'react';
import User from './User'

export const UserContext = React.createContext();

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      local: 0,
      toggleLocal: (props) => {
        this.setState(({local}) => ({
          local: props === 'Add' ? local + 1 : local -1
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