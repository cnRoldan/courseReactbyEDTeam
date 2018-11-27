import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop height="300" autoPlay dynamicHeight>
                <div>
                    <img src="https://i.imgur.com/REM4kQU.jpg" alt=''/>
                    <p className="legend">Atardecer en Venecia</p>
                </div>
                <div>
                    <img src="https://images2.alphacoders.com/692/thumb-1920-692059.jpg" alt=''/>
                    <p className="legend">La Alhambra, Granada, Spain</p>
                </div>
                <div>
                    <img src="https://es.best-wallpaper.net/wallpaper/3840x2160/1702/London-night-view-Tower-Bridge-Thames-River-city-lights-UK_3840x2160.jpg" alt='' />
                    <p className="legend">Panorámica de Londres</p>
                </div>
                <div>
                    <img src="https://wallpapertag.com/wallpaper/full/1/1/6/234815-popular-apple-wallpapers-1920x1080.jpg" alt='' />
                    <p className="legend">Wallpaper de la marca Apple Inc.</p>
                </div>
            </Carousel>
        );
    }
};
