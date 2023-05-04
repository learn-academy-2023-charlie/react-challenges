import './App.css';
import Color from './componets/colors.js'

const App = () => {

  return (<>
  <h1> Our Color Boxes</h1>
<Color/>
{/* Something that holds data. Which holds the add */}
  <div> 
    <button onClick = {Color} >Add a Box</button>
    <button>Remove a Box</button>
  </div> 
  </> 
  );

}

// return (
//   <button onClick={handleClick}>Click me</button>
// );
// }
export default App;
