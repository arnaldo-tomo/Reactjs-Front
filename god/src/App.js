import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Welcome from './pages/Welcome';
import Delete from './pages/components/Delete';
import Show from './pages/Show';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About/:id' element={<About />} />
        <Route path='/Delete/:id' element={<Delete />} />
        <Route path='/Show/:id' element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
