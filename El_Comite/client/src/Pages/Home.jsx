import React from 'react';
import '../Pages/styles/home.css';
import { Link, useNavigate } from 'react-router-dom';

const ElComite = () => {
  return (
    <div className="comite-container">
      <header className="comite-header">
        <h1>El Comit<span>é</span></h1>
      </header>
      
      <main className="comite-main">
        <div className="comite-buttons">
          <button className="comite-button register">Registrarse como Voluntario</button>
          <Link to="/iniciar-sesion" className="comite-button login">Iniciar Sesión</Link>
        </div>
      </main>
      
      <footer className="comite-footer">
        <p>© Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default ElComite;