import React from 'react'
import { Box, Typography } from '@mui/material'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'


function Footer() {
  return (
    <Box sx={{
        bgcolor:'primary.main',
        height:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
        }}>
            <Box>
                <Typography variant='text' color='primary.contrastText' sx={{px:4}}>©2024 GoReserve</Typography>
            </Box>
            <Box sx={{marginRight:5}}>
                <img src={facebook} width={30} style={{marginLeft:"30px"}} />
                <img src={linkedin} width={30} style={{marginLeft:"30px"}} />
                <img src={twitter} width={30} style={{marginLeft:"30px"}} />
                <img src={instagram} width={30} style={{marginLeft:"30px"}} />
            </Box>
        

    </Box>
  )
}

export default Footer