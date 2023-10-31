import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Viewdetails } from './Components/Viewdetails';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Dashboard/>]}/>
      <Route path='/view' element={[<Viewdetails/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
