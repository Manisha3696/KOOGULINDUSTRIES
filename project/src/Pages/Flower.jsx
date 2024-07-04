import React, { useState } from 'react'
import '../css/Flower.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import flower1 from '../images/Flower-banner.jpg'
import icon from '../images/icon.png'
import Carnation1 from '../images/White-carnation.jpg'
import Carnation2 from '../images/Soft-pink-carnation-heads.jpg'
import Carnation3 from '../images/Red-carnation.jpg'
import Carnation4 from '../images/Peach-carnation.jpg'
import Carnation5 from '../images/Orange-carnation.jpg'
import Carnation6 from '../images/Yellow-carnation.jpg'
import Carnation7 from '../images/Soft-purple-carnation.jpg'
import Carnation8 from '../images/Carnation-bacarat-purple.jpg'
import Carnation9 from '../images/Purple-carnation.jpg'
import Carnation10 from '../images/Pink-carnation.jpg'
import Tuberose1 from '../images/Tuberose.jpg'
import Yellow from '../images/Yellow-Marigold.jpg'
import Orange from '../images/Orange-Marigold.webp'
import Mixed from '../images/Mixed-Pooja-Flower.jpg'
import PoojaFlower from '../images/Pooja-Flower.webp'
import RedRose from '../images/Red-button-rose.jpg'
import YellowRose from '../images/Yellow-rose.jpg'
import OrangeRose from '../images/Orange-rose.jpg'
import initial1 from '../images/Carnation-Garland.png'
import initial2 from '../images/Rose-garland.png'
import initial3 from '../images/Wedding-Garland.png'
import initial4 from '../images/Tuberose-Garland.png'
import hover1 from '../images/Carnation-Garland-Hover.png'
import hover2 from '../images/Rose-garland-Hover.png'
import hover3 from '../images/Wedding-Garland-Hover.png'
import hover4 from '../images/Tuberose-garland-Hover.png'
import Petal1 from '../images/Red-Rose-petels.jpg'
import Petal2 from '../images/Yellow-petals.avif'
import Petal3 from '../images/Orange-Petals.jpg'
import Petal4 from '../images/Mixed-Petals.avif'
import String1 from '../images/Jasmine-string.png'
import String2 from '../images/Mixed-carnation-string.jpg'
import String3 from '../images/Baby-breath.png'
import String4 from '../images/Marigold-string.webp'


function Flower() {
  const images = [
    { initial: initial1, hover: hover1, name: 'Carnation Garland' },
    { initial: initial2, hover: hover2, name: 'Rose Garland' },
    { initial: initial3, hover: hover3, name: 'Wedding Garland' },
    { initial: initial4, hover: hover4, name: 'Tuberose Garland' },
  ];

  const [hovered, setHovered] = useState(Array(images.length).fill(true));

  const handleMouseLeave = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = !newHovered[index];
    setHovered(newHovered);
  };

  return (
    <div className='container'>
      <section className="flowers">
        <div className="flower-banner">
          <img src={flower1} alt="" />
          <div class="content">
            <h1>Flowers</h1>
            <ul className='menu'>
              <li><Link to="/">HOME</Link></li>
              <li style={{ fontSize: "17px" }}> / FLOWER</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flower-content">
        <img src={icon} alt="" />
        <h5>Experience the enchanting fragrance and vibrant beauty of flowers from <span>Koogul Industries</span>. Discover the superb quality of our blooms, carefully cultivated and brought to you by <span>Koogul Industries</span>, your trusted partner in floriculture exports.</h5>
        <h1>_______</h1>
        <p>Floriculture in India primarily means the cultivation of flowers or flower farming. Known for its rich diversity, India's floriculture sector thrives with a wide variety of flowers, making it a prominent player in the global flower market. At Koogul Industries, we take pride in being one of the leading exporters of exquisite flowers from India, ensuring that the beauty of Indian floriculture reaches every corner of the world.</p>
      </section>
      <section className='flower-product'>
        <h3>FLOWER HEADS</h3>
        <div className="flower-img">
          <Swiper slidesPerView={4} spaceBetween={10} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
            delay: 2500, disableOnInteraction: false,
          }} modules={[FreeMode, Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation1} alt="" />
                <h3 className='link1-name' id='link-name'><Link to='/White-carnation'>White Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation2} alt="" />
                <h3 className='link2-name' id="link-name"><Link to='/Soft-pink-carnation'>Soft Pink Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation3} alt="" />
                <h3 className='link3-name' id="link-name"><Link to='/Red-carnation'>Red Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation4} alt="" />
                <h3 className='link4-name' id="link-name"><Link to='/Peach-carnation'>Peach Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation5} alt="" />
                <h3 className='link5-name' id="link-name"><Link to='/Orange-carnation'>Orange Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation6} alt="" />
                <h3 className='link6-name' id="link-name"><Link to='/Yellow-carnation'>Yellow Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation7} alt="" />
                <h3 className='link7-name' id="link-name"><Link to='/Soft-purple-carnation'>Soft Purple Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation8} alt="" />
                <h3 className='link8-name' id="link-name"><Link to='/Bacarrat-carnation'>Bacarrat Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation9} alt="" />
                <h3 className='link9-name' id="link-name"><Link to='/Purple-carnation'>Purple Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Carnation10} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Pink-carnation'>Pink Carnation</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Tuberose1} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Tube-rose'>Tube Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Yellow} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Yellow-mari-gold'>Yellow Marigold</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Orange} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Orange-mari-gold'>Orange Marigold</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={Mixed} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Mixed-mari-gold'>Mixed Mari Gold</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={PoojaFlower} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Assorted-pooja-flower'>Assorted Pooja Flower</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={RedRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Red-rose'>Red Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={YellowRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Yellow-rose'>Yellow Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='card'>
                <img className='slide-img' src={OrangeRose} alt="" />
                <h3 className='link10-name' id="link-name"><Link to='/Orange-rose'>Orange Button Rose</Link> </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <h3 id='first-heading'>FLOWER GARLANDS</h3>
        <div className="image-row">
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <img
                src={hovered[index] ? image.initial : image.hover}
                alt={`image-${index}`}
                onMouseLeave={() => handleMouseLeave(index)}
              />
              <div className="image-name"><Link to={`/image/${image.name}`}>{image.name}</Link></div>
            </div>
          ))}
        </div>
        <div className="flower-petals">
          <h3>FLOWER PETALS</h3>
          <div className="petals-img">
            <div className='card'>
              <img src={Petal1} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Red-rose-petals'>Red Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal2} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Yellow-rose-petals'>Yellow Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal3} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Orange-rose-petals'>Orange Rose Petals</Link> </h3>
            </div>
            <div className='card'>
              <img src={Petal4} className='petals-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Mixed-rose-petals'>Mixed Rose Petals</Link> </h3>
            </div>
          </div>
        </div>
        <div className="flower-string">
          <h3>FLOWER STRING</h3>
          <div className="string-img">
            <div className='card'>
              <img src={String1} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Jasmine-string'>Jasmine String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String2} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Carnation-string'>Carnation String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String3} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Baby-breath-string'>Baby Breath String</Link> </h3>
            </div>
            <div className='card'>
              <img src={String4} className='string-pic'></img>
              <h3 className='link1-name' id='link-name'><Link to='/Mixed-marigold-string'>Mixed Marigold String</Link> </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Flower
