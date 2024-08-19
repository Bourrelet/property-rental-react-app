import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement" element={<FicheLogement />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="/apropos" element={<APropos/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
