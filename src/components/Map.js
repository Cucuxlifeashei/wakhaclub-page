import React from 'react';
import Mapcss from '../styles/Map.css'

const Map = () => {
    return (
        <div className='container-map'>
           <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.6232018330843!2d-58.51999588255615!3d-34.63896109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc84857b17d3d%3A0x8f4273f8e18cde92!2sAv.%20Rivadavia%2010919%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1676949129890!5m2!1ses!2sar" 
                width="600" 
                height="350" 
                style={{border: "0"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        </div>
    );
};

export default Map;