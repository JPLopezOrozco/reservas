import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
    <Container sx={{paddingTop:6}}>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        minHeight:'100vh'
    }}>
        <Typography variant='h1' color='text.primary'>404-Page not founded</Typography>
        <Typography variant='body1' color='text.secondary'>The page you are looking for does not exist</Typography>
    </Box>
    </Container>
  )
}

export default NotFound