import React from 'react'
import '../css/Aboutus.css';
import { Link } from 'react-router-dom'
import KG from '../images/KG.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import verified from '../images/Verified.jpg'
import fresh from '../images/Fresh.jpg'
import organic from '../images/Organic.jpg'
import innovation from '../images/Innovation.jpg'
import Sustainability from '../images/Sustainability.jpg'
import customer from '../images/Customer.jpg'
import packaging from '../images/Packaging.jpg'
import Quality from '../images/Quality.jpg'
import icon from '../images/icon.png'
import SpaIcon from '@mui/icons-material/Spa';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import RecyclingIcon from '@mui/icons-material/Recycling';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import banner from '../images/About-banner.png'
function Aboutus() {
  return (
    <>
      <div className="main-container">
        <section class="About-banner">
          <img src={banner} alt="" />
          <div class="content">
            <h1>About Us</h1>
            <ul className='menu'>
              <li><Link to="/">HOME</Link></li>
              <li> / ABOUT US</li>
            </ul>
          </div>
        </section>
        <div className="body-container">
          <img src={KG} alt="Rice-image" />
          <div className="text-container">
            <div className="heading">
              <h1>Welcome to Koogul Industries</h1>
            </div>
            <div className="para">
              <p>Koogul began in 2013 as a family owned import/export business. It has now established itself as one of the top importers in Melbourne, Australia. Operating from a large network of warehouses alongside an expert staff, Koogul caters for consumer and commercial customers.
                <br /><br />With a vision to become a globally recognised import company, we strive to prioritise our customers and the excellence of our service.</p>
            </div>
          </div>
        </div>
        <div className="container-slider">
          <h1>SERVICES WE PROVIDE</h1>
          <Swiper slidesPerView={3} spaceBetween={20} freeMode={true} loop={true} pagination={{ clickable: true, }} autoplay={{
            delay: 2500, disableOnInteraction: false,
          }} modules={[FreeMode, Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <div class="card mb-4">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={Quality} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Quality</h5>
                      <p class="card-text"> Commitment to providing the best and freshest groceries.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={Sustainability} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Sustainability</h5>
                      <p class="card-text"> Promoting eco-friendly practices in sourcing and packaging.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={customer} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Customer Satisfaction</h5>
                      <p class="card-text">Ensuring a seamless and satisfying shopping experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={innovation} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Innovation</h5>
                      <p class="card-text">Continuously improving and expanding our product range and services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={organic} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Organic and Natural</h5>
                      <p class="card-text">Enjoy the finest selection of organic and natural products for a healthier lifestyle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={packaging} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Proper Packaging</h5>
                      <p class="card-text">Our proper packaging ensures your products arrive fresh and intact every time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={verified} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Verified</h5>
                      <p class="card-text">Trust in verified excellence: products guaranteed for quality and authenticity</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img class="img-fluid rounded-start" src={fresh} alt="" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Fresh Produce</h5>
                      <p class="card-text">We guarantee fresh products every day, straight from farm to your table.</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="final-container">
          <img src={icon} alt="" />
          <h1>Why Shop with us?</h1>
          <h1 style={{ color: `red` }}>_______</h1>
          <p>We are a dynamic creative agency based in  <span>Melbourne, Australia,</span> specializing in multilingual localization and top-notch translation solutions. With our extensive experience, we deliver high-quality, precise translations tailored to meet your global communication needs.</p>
          <div className="wrapper">
            <div className="container1">
              <div className='sub-container'>
                <h5><SpaIcon fontSize="large"/>Freshness Guaranteed</h5>
                <p>We source the freshest produce and groceries daily to ensure that you receive only the best quality items. Our commitment to freshness means your food stays delicious and nutritious.</p>
              </div>
              <div className='sub-container'>
                <h5><ShoppingCartIcon fontSize="large"/>Wide Selection</h5>
                <p>Our extensive range of products ensures that you can find everything you need in one place. From organic fruits and vegetables to specialty items and everyday essentials, we have it all.</p>
              </div>
            </div>
            <div className="container2">
              <div className="sub-container">
                <h5><SmartphoneIcon fontSize='large'/>Convenience at Your Fingertips</h5>
                <p>With our easy-to-use online platform, you can shop for groceries anytime, anywhere. Enjoy the convenience of home delivery or opt for in-store pickup—whichever suits your lifestyle best.</p>
              </div>
              <div className="sub-container">
                <h5><RecyclingIcon fontSize='large'/>Sustainable Practices</h5>
                <p>We are dedicated to sustainability and work with local farmers and suppliers who share our values. By choosing us, you support environmentally-friendly practices and reduce your carbon footprint.</p>
              </div>
            </div>
            <div className="container3">
              <h5><VolunteerActivismIcon fontSize='large'/>Exceptional Customer Service</h5>
              <p>Our friendly and knowledgeable customer service team is here to assist you with any questions or concerns. We strive to make your shopping experience as smooth and enjoyable as possible.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Aboutus
