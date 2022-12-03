import About from "./view/About";
import Cv from "./view/Cv.jsx"
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/cv' element={<Cv/>}/>
     </Routes>
    </div>
  );
}

export default App;
