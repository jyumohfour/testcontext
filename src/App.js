import React, {useState} from 'react';
import User from './User'

export const UserContext = React.createContext();

// using class means using state => can't use hooks (specifically usestate)
function App()  {
  const [local, setLocal] = useState(0);

  function funkyThing (props) {
    setLocal(props === 'Add' ? local + 1 : local -1);
  }

  // acts as replacement for class state
  let props = {
    local : local,
    toggleLocal: funkyThing
  }


  return (
    <div>
      <UserContext.Provider value={props}>
        <User />
      </UserContext.Provider>
    </div>
  )
}
export default App