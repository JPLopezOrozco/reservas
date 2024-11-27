import { Box, Grid2, Pagination, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { Link } from 'react-router-dom'

function Body() {
    const [products, setProducts] = useState([])
    const [currentePage, setCurrentPage] = useState(1)
    const originalProducts = ["Hotel", "Auto", "Departamentos", "Auto2", "Auto3", "Auto4", "Auto5", "Auto6", "Auto7", "Auto8", "Auto9", "Auto10"]

    useEffect(()=>{
        const shuffleProducts = [...originalProducts].sort(()=>Math.random() - 0.5)
        setProducts(shuffleProducts)
    },[])
    const getPaginatedProducts = ()=>{
        const startIndex = (currentePage - 1) * 10;
        const endIndex = startIndex + 10;
        return products.slice(startIndex, endIndex)
    }

    const handleChange =(event, value)=>{
        setCurrentPage(value)
    }
   let i = 0

  return (
    <Box sx={{paddingTop:6,
    display: 'flex',
    justifyContent:'center',
    alignContent:'center',
    height:'100%',
    minHeight:'100vh'}}>  
        <Box sx={{
            marginTop:6,
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            width:'90%',
            }}>
            <Grid2 
            container 
            spacing={4} 
            rowGap={12}
            sx={{
                justifyContent: 'center',
                maxWidth: "100%",
                minWidth:"300px",
                marginBottom:4
                }}>
                {getPaginatedProducts().map((product, index)=>(
                <Grid2 key={index} size={{
                        xs:12,
                        md:6
                    }}
                     sx={{
                        height:200,
                        borderRadius:6,
                        '&:hover':{boxShadow:6}
                        }}>
                <Link to={`/product/${product}`} style={{
                    textDecoration:'none',
                    }}>
                        <Products product={product} />
                    </Link>
                </Grid2>
                ))}
            </Grid2>
            <Typography sx={{
                marginTop:6
            }} variant='body1' color='text.primary'>Page {currentePage}</Typography>
            <Pagination count={Math.ceil(products.length/10)} page={currentePage} onChange={handleChange} />
        </Box>
    </Box>
  )
}

export default Body