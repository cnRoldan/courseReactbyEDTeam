import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop autoPlay showStatus={false} showIndicators={false} showThumbs={false} height={300} axis={"vertical"}>
                <div>
                    <img src="https://i.imgur.com/REM4kQU.jpg" alt='Imagen no encontrada' className="imagen-carousel"/>
                    <p className="legend">Atardecer en Venecia</p>
                </div>
                <div>
                    <img src="https://images2.alphacoders.com/692/thumb-1920-692059.jpg" alt='Imagen no encontrada' className="imagen-carousel"/>
                    <p className="legend">La Alhambra, Granada, Spain</p>
                </div>
                <div>
                    <img src="https://pontosturisticos.net/wp-content/uploads/2017/11/pontos-turisticos-inglaterra-833x474.jpg" alt='Imagen no encontrada' className="imagen-carousel"/>
                    <p className="legend">Panorámica de Londres</p>
                </div>
                <div>
                    <img src="https://images.wallpaperscraft.com/image/zurich_switzerland_roofs_buildings_sky_97247_3840x2160.jpg" alt='Imagen no encontrada' className="imagen-carousel"/>
                    <p className="legend">Zürich, 2008</p>
                </div>
            </Carousel>
        );
    }
};
