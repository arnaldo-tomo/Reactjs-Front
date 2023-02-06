import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About';
import Welcome from './pages/Welcome';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About/:id' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
