import React from 'react'
import'../css/Home.css';
import 'react-slideshow-image/dist/styles.css'
import {Fade,zoom, Slide} from 'react-slideshow-image'
const slideimages=[
  {
    url:'./images/slider-2.jpg'
  },
  {
    url:'./images/spices1.jpg'
  },
  {
    url:'./images/slider-1.jpg'
  },
];
const divstyle={
  display:'flex',
  alignItems:"center",
  justifycontent:'center',
  height:"540px",
   backgroundsize:"cover",
   backgroundrepeat:"no-repeat",
  //  position:"absolute",
}
function Home() {
  return (
    <div >
    {/* <Fade> */}
      <Slide>
      {slideimages.map((image,index)=>(
        <div key={index}>
          <div style={{...divstyle, backgroundImage :`url(${image.url})`}}>
          </div>
        </div>

      ))

      }
      </Slide>
    {/* </Fade> */}
   <section >
    <div className='container1'>
      <div className='logo1'>
        <img src='./logo1.png'></img>
      </div>
      <div className='content'>
       <h1> Koogul Industries Importers & Exporters</h1>
       <h2>__________</h2>
       <p>"As the ‘land of spices’, India exports tons of various kinds of food. In fact, food export from India is a major source of revenue. To help your products reach to even the farthest corners of the world, Pisum Foods offers you various types of food export as well as spices export from India. Being among the leading food export companies in India, we ensure our services conform to international quality standards.”</p>
      </div>
      </div>
      </section>
      <div className='container2'>
      <div className='product'>
         <img src='./images/shape.png'></img>
         <div className='pic'>
<img src='./logo.png'></img>
<h1>Popular product</h1>
         </div>
      </div>
      </div>
    


    </div>
   
  )
}

export default Home