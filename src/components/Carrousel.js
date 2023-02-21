/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useState } from 'react';
import Fiesta1 from "../assets/WAKHA-WALLPAPER.jpg";
import Fiesta2 from "../assets/photo2.jpg";
import Fiesta3 from "../assets/photo3.jpg";
import {AiOutlineArrowRight} from "react-icons/ai";
import CarrouselStyle from "../styles/Carrousel.css"

const data_image = [
  {
    id : 1 , 
    url : Fiesta1,
  },
  {
    id : 2 , 
    url : Fiesta2,
  },
  {
    id : 3 , 
    url : Fiesta3,
  },
]


const Carrousel = () => {

  const [index, setindex] = useState(0)

  const next = () =>{
    if (index < data_image.length -1){
      setindex( index + 1)
    } else {
      setindex(0)
    }
  }

  const back = () =>{
    if ( index > 0){
      setindex( index - 1)
    } else {
      setindex(data_image.length -1 )
    }
  }
  return (
    <div className='container-carrousel'>
      <AiOutlineArrowRight className='Arrow-left' onClick={back}/>
      <div className='container-images'>
      <img src={data_image[index].url}/>
      </div>
      <AiOutlineArrowRight className='Arrow-rigth' onClick={next}/>
    </div>
  );
};

export default Carrousel;

