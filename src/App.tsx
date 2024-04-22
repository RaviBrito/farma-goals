import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioTema';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
        <Home/>
          <Routes>

            
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategorias" element={<FormularioCategorias />} />
            <Route path="/editarCategorias/:id" element={<FormularioCategorias />} />
            <Route path="/deletarCategorias/:id" element={<ListaCategorias />} />
         

          </Routes>
        </div>
       
        <Footer />
      </BrowserRouter>

    </>
  );
}
export default App;
