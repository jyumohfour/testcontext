import React, {useState, useEffect} from 'react';
import User from './User'

export const UserContext = React.createContext();

// using class means using state => can't use hooks (specifically usestate)
function App()  {
  const [arr, setArr] = useState([]);



  function funkyThing (props) {
    setArr(props.butt === 'Add' ? prev => [...prev, props.title] : prev => prev.filter(x => x !== props.title));
  }

  useEffect(() => {
    console.log(arr);
  }, [arr])

  // const handleAllergies = e => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     // push selected value in list
  //     setAllergies(prev => [...prev, value]);
  //   } else {
  //     // remove unchecked value from the list
  //     setAllergies(prev => prev.filter(x => x !== value));
  //   }

  // acts as replacement for class state
  let props = {
    arr: arr,
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