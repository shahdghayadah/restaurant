import logo from './logo.svg';
import './App.css';
import NavBar from './componants/NavBar';
import Home from './Page/Home';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'; 
import MealHome from './Page/mealHome';
import MealDet from './Page/mealdet';
import About from './Page/About';
import NotFound from './Page/NotFound';
function App() {
  return (
    <BrowserRouter>
     <div className="App">

         <NavBar/>
         <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/categoty/:strCategory' element={<div> <MealHome/></div>} />
    <Route path='/meal/:strMeal' element={<div> <MealDet/></div>} />

    <Route path="/Hungry" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route  path="*" element={<NotFound/>} />



    </Routes>

    </div>
    </BrowserRouter>
   
  );
}

export default App;
