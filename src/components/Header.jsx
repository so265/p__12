import React from 'react'
import "../styleComponents/Header.scss";
import logo from '../assets/logo-portofolio.webp';
import banniere from '../assets/banniere62.webp';
import ApparitionLetters from './MyLetters.jsx';


function Header() {
  return (
    <div id='accueil'>
    <header className="header" >
      <img src={logo} alt="Portfolio Logo" className="logo" /> 
      <nav className="nav">
        <a href="#accueil">Accueil</a>
        <a href="#presentation">Présentation</a>
        <a href="#competences">Compétences</a>
        <a href="#realisations">Réalisations</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <div className='banner-container'>
      <ApparitionLetters />
    <img src={banniere} alt="banniere header" className="banniere" />
    </div>
    
    </div>
  );
}

export default Header;