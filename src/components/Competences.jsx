import React from 'react'
import "../styleComponents/Competences.scss";
import gitHub from '../assets/gitHubLink.webp';
import icones from '../assets/icones.webp';
import redux from '../assets/redux.webp';
import node from '../assets/node.webp';
import sass from '../assets/sass.webp';
import figma from '../assets/figma.webp';
import seo from '../assets/seo.webp';


function Competences() {
  return (
    <div>
    <h1 id='competences' >Mes compétences</h1>
    <div className='all-icones'>
    <img src={gitHub} alt="icone gitHub" className="gitHub" /> 
     <img src={icones} alt="icone hml-css-js" className="icones" /> 
     <img src={redux} alt="icone React" className="React-icone" /> 
     <img src={node} alt="icone nodeJs" className="node" /> 
     <img src={sass} alt="icone sass" className="sass" /> 
     <img src={figma} alt="icone figma" className="figma" /> 
     <img src={seo} alt="icone seo" className="seo" /> 

     </div>
    </div>
   
  )
}

export default Competences