import React from 'react';
import ReactDOM from 'react-dom';
import App from './header.jsx';
import './indexx.css'
import Footer from './footer.jsx';

import event_poster1 from '../assets/poster1.svg';
import event_poster2 from '../assets/poster2.svg';
import event_poster3 from '../assets/poster3.svg';
import picture1 from '../assets/picture1.jpeg';
import picture2 from '../assets/picture2.webp';
import ImageSlider from './Carousel'
import image1 from '../assets/gallery1.svg';
import image2 from '../assets/poster2.svg';
import image3 from '../assets/poster3.svg';
import image4 from '../assets/poster1.svg';
import Filter_ from './Filter_.jsx';
import Pict from './pict.jsx';
import filter2 from './Filter_.jsx'
import Card from './Card.jsx';
import FooterCreateEvent from './FooterCreateEvent.jsx'
import Gallerym from './Gallerym.jsx';
import EventFilter from './Filter_.jsx';
import Filternew_ from './org_filter1.jsx';



const slides = [
    { src: event_poster1 },
    { src: event_poster2 },
    { src: event_poster3 },
    { src: picture1},
    { src : picture2}
 
];
const images = [
    { src: image1, alt: "A colorful painting" },
    { src: image2, alt: "A colorful painting" },
    { src: image3, alt: "A colorful painting" },
    { src: image4, alt: "A colorful painting" },
];





function Org_home1() {
    return (
        <>
        
        
        
        <ImageSlider slides={slides}/>
        <Filternew_/>
        
        <Pict/>
        <FooterCreateEvent/>
         <Gallerym/>
       <Footer/>
        
        </>
    )
}

export default Org_home1