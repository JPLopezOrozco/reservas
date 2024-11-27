import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const button = {
        my:2,
        mx:1,
        color:'primary.contrastText',
        borderColor: 'primary.contrastText',
        '&:hover':{
            bgcolor:'primary.contrastText',
            color:'#007BB5',
        }
    }
  return (
    <>
        <Box sx={{display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          height:'60px',
          position:'fixed',
          bgcolor:"primary.main",
          width:"100%",
          zIndex:100
          }}>
            <Link style={{textDecoration:'none'}} to="/"><Typography variant='h6' sx={{my:4, px:2, textAlign:'center', color:'primary.contrastText'}}>GoReserve</Typography></Link>
            <Box>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" sx={button}>
                    Login
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button variant="outlined" sx={button}>
                    Register
                  </Button>
                </Link>
            </Box>
        </Box>
    </>
  )
}

export default Navbar