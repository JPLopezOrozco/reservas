import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; 
import { Navigation } from "swiper/modules";
import ford from '../assets/ford.jpg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import { red } from '@mui/material/colors';


function ProductDetail() {
  const imgs = ['imagen1', 'imagen2', 'imagen3']
  return (
    <Box sx={{
      paddingTop:6,
      mx:0,
      height:'100%',
      minHeight:'94vh',
      width:'100%'
    }}>
        <Typography variant='h2' sx={{          
          marginTop:6,
          marginLeft:10
          }}>
            Titulo Producto
            </Typography>
        <Box sx={{
          display:'flex',
          justifyContent: 'space-evenly'
          }}>
          <Box>

          <Swiper 
          navigation={true}
          modules={[Navigation]}
          className='mySwipper'
          style={{
            width:'100%',
            maxWidth:'600px',
            margin:'5% 0',
          }}
          >
          {imgs.map((img, index)=>(
            <SwiperSlide key={index}>
              <img 
                src={ford}
                alt={img}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                />
            </SwiperSlide>
          ))}
          </Swiper>
                <img src={facebook} width={30} style={{marginLeft:"30px"}} />
                <img src={linkedin} width={30} style={{marginLeft:"30px"}} />
                <img src={twitter} width={30} style={{marginLeft:"30px"}} />
                <img src={instagram} width={30} style={{marginLeft:"30px"}} />
          </Box>
          <Box sx={{width:'50%'}}>
            <Typography variant='h6'>Descripcion</Typography>
            <Typography variant='text' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam cumque nobis non pariatur laudantium impedit optio earum sapiente, quibusdam delectus ullam consequuntur sunt aut? Laborum rem soluta ipsa aliquam quae?</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default ProductDetail