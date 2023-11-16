import React from 'react'
import "../styleComponents/Competences.scss";
import gitHub from '../assets/gitHub.png';
import icones from '../assets/icones.jpg';
import redux from '../assets/redux.png';
import node from '../assets/node.jpg';
import sass from '../assets/sass.png';
import figma from '../assets/figma.png';
import seo from '../assets/seo.png';


function Competences() {
  return (
    <div>
    <h1 id='competences' >Mes compétences</h1>
    <div className='all-icones'>
    <img src={gitHub} alt="icone hml-css-js" className="gitHub" /> 
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