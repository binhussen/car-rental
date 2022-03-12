import React from "react";
import { Carousel } from 'antd';

const carouselDisplay = () => {
    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        display:'flex', 
        justifyContent:"center", 
        alignItems:"end",
        background: '#364d79',
    };
    return <>

        <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    </>
}

export default carouselDisplay;