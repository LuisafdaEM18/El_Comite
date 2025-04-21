import React from 'react';
import '../Pages/styles/home.css'

const ElComite = () => {
  return (
    <div className="comite-container">
      <header className="comite-header">
        <h1>El Comit<span>é</span></h1>
      </header>
      
      <main className="comite-main">
        <div className="comite-buttons">
          <button className="comite-button register">Registrarse como Voluntario</button>
          <button className="comite-button login">Iniciar Sesión</button>
        </div>
      </main>
      
      <footer className="comite-footer">
        <p>© Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default ElComite;