import React from 'react'
import "../styleComponents/Header.scss";
import logo from '../assets/logo-portofolio.png';
import banniere from '../assets/banniere6.png';
import ApparitionLetters from './MyLetters.jsx';
import Presentation from './Presentation.jsx';

function Header() {
  return (
    <div id='accueil'>
    <header className="header" >
      <img src={logo} alt="Portfolio Logo" className="logo" /> 
      <nav className="nav">
        <a href="#accueil">Accueil</a>
        <a href="#presentation">Présentation</a>
        <a href="#realisation">Réalisation</a>
        <a href="#activites">Activités</a>
        <a href="#competences">Compétences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <div className='banner-container'>
      <ApparitionLetters />
    <img src={banniere} alt="banniere header" className="banniere" />
    </div>
    <Presentation />
    </div>
  );
}

export default Header;
