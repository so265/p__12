import React from 'react'
import "../styleComponents/Realisations.scss";
import booki from '../assets/booki.webp';
import gitHub from '../assets/gitHub.webp';
import ohmyfood from '../assets/ohmyfood.webp';
import link from '../assets/lien.png';
import sophiebluel from '../assets/sophiebluel.webp';
import kasa from '../assets/kasa.webp';
import nina from '../assets/nina.webp';
import argentbank from '../assets/argentbank.webp';

function Realisations() {
  return (
    <div id='realisations' >
      <h1 className='marge-title'>Mes réalisations</h1>
    <div className='cards-projects'>
      <div className='background-booki'><h2>Projet 3 Booki</h2>
        <img src={booki} alt="projet booki" className='img-projects'/>
        <p className='p-center'>Développement d'un site qui permet<br/> aux usagers de trouver des<br/> hébergements et des activités<br/> dans la ville de leur choix. </p>
        <ul className='language'><li>HTML</li>
        <li>CSS</li>
        </ul>
        <a href="https://github.com/so265/projet3.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
        <a href="https://so265.github.io/projet3/" title="Lien site">
          <img src={link} alt="lien site" className='icon-lien-site'/>
        </a>
      </div>
      <div className='background-booki'><h2>Projet 4 Ohmyfood</h2>
        <img src={ohmyfood} alt="projet booki" className='img-projects'/>
        <p className='p-center'>Projet conçu avec l'approche mobile-first<br/>qui répertorie les menus<br/>des restaurants.</p>
        <ul className='language'><li>HTML</li>
       <li>CSS</li>
        </ul>
        <a href="https://github.com/so265/P4.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
        <a href="https://so265.github.io/P4/" title="Lien site">
          <img src={link} alt="lien site" className='icon-lien-site'/>
        </a>
      </div>
      <div className='background-booki'><h2>Projet 6 Sophie Bluel</h2>
        <img src={sophiebluel} alt="projet booki" className='img-projects'/>
        <p className='p-center'>Conception du portfolio<br/>de l'architecte<br/>Sophie Bluel.</p>
        <ul className='language'><li>HTML</li>
        <li>CSS</li>
       <li>javaScript</li>
        </ul>
        <a href="https://github.com/so265/p_6.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
       </div>
       <div className='background-booki'><h2>Projet 8 Kasa</h2>
        <img src={kasa} alt="projet kasa" className='img-projects'/>
        <p className='p-center'>Dévellopement de l'application<br/>qui propose des logements<br/>entre particuliers.</p>
        <ul className='language'><li>SCSS</li>
        <li>javaScript</li>
       <li>React</li>
        </ul>
        <a href="https://github.com/so265/p_8.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
       </div>
       <div className='background-booki'><h2>Projet 9 Nina Carducci</h2>
        <img src={nina} alt="projet seo" className='img-projects'/>
        <p className='p-center'>Amélioration du site de Nina Carducci<br/>pour améliorer son référencement.</p>
        <ul className='language'><li>HTML</li>
        <li>CSS</li>
        <li>SEO</li>
        </ul>
        <a href="https://github.com/so265/p_9.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
        <a href="https://so265.github.io/p_9/" title="Lien site">
          <img src={link} alt="lien site" className='icon-lien-site'/>
        </a>
       </div>
      <div className='background-booki'><h2>Projet 11 ArgentBank</h2>
        <img src={argentbank} alt="projet argentbank" className='img-projects'/>
        <p className='p-center'>Mise en place du tableau<br/>de bord des utilisateurs<br/>de la banque en ligne ArgentBank.</p>
        <ul className='language'><li>SCSS</li>
        <li>javaScript</li>
        <li>Redux toolkit</li>
        <li>MongoDB</li>
        </ul>
        <a href="https://github.com/so265/p_11.git" title="Lien GitHub">
          <img src={gitHub} alt="icon gitHub" className='icon-gitHub'/>
        </a>
       </div>
      </div>
    </div>
  )
}

export default Realisations