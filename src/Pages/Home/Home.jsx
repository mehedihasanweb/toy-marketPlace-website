import React, { useEffect } from 'react';
import banner1 from '../../assets/banner1.jpeg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.jpg'
import Gallery from '../Gallery';
import TabsCategory from '../../components/TabsCategory';
import Latest from '../../components/Latest';
import SomeInfo from '../../components/SomeInfo';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
      }, [])
    return (
        <div>
            <div className="carousel w-full" data-aos="zoom-in">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-ghost">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-ghost">❯</a>
                    </div>
                </div>
            </div>
            <Latest />
            <Gallery />
            <TabsCategory />
            <SomeInfo />
            
        </div>

    );
};

export default Home;