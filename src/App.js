import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element= {<Details/>}/>
      </Routes>
    </div>
   
  );
}

export default App;
