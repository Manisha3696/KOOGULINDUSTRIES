import React from 'react'
import'../css/Home.css';
import 'react-slideshow-image/dist/styles.css'
import {Fade,zoom, Slide} from 'react-slideshow-image'
const slideimages=[
  {
    url:'./images/spices2.jpg'
  },
  {
    url:'./images/betel.jpg'
  },
  {
    url:'./two.jpeg'
  },
];
const divstyle={
  display:'flex',
  alignItems:"center",
  justifycontent:'center',
  height:"400px",
   backgroundsize:"cover",
   backgroundrepeat:"no-repeat",
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
    </div>
   
  )
}

export default Home