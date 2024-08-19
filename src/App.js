import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/fichelogement" element={<FicheLogement />} />
          <Route path="/error404" element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
