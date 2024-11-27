import { Box, Card, CardContent, CardHeader, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ford from '../assets/ford.jpg'

function Products({product}) {
  return (
    
        <Card sx={{display:'flex', 
          boxShadow:'none',
          }}>
              <CardMedia 
              component='img'
              height="150"
              image={ford}
              alt={product}
              sx={{
                objectFit:'cover',
                width:'60%',
                height:'100%',
                minHeight: 200
              }}
               />
              <CardContent>
                <Typography variant='h6' sx={{
                  textAlign:'center',
                  fontWeigh:'bold'
                }}>{product}
                </Typography>
                <Typography variant='body2' sx={{
                  textAlign: 'center',
                  color:'text.secondary'
                }}>
                  Descripcion
                </Typography>
              </CardContent>
        </Card>
  )
}

export default Products