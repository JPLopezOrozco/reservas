import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

function Admin() {
    const desktop = useMediaQuery("(min-width: 769px)")
    const products = ["Hotel", "Auto", "Departamentos", "Auto2", "Auto3", "Auto4", "Auto5", "Auto6", "Auto7", "Auto8", "Auto9", "Auto10"]
  return (
    <Box sx={{
        paddingTop:10,
        height:'100%',
        minHeight:'94vh',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {desktop ? (
            <Box sx={{
                bgcolor:'grey.100',
                width: 1000,
                marginBottom:5,
                zIndex: 1,
                px: 10,
                py: 5
            }}>
                <Typography variant='h2' sx={{color:"text.primary"}}>Admin panel</Typography>
                <Box>
                    <Accordion sx={{
                        bgcolor:'grey.200',
                        marginTop:3
                    }}>
                        <AccordionSummary 
                            expandIcon={<ExpandMore />}
                            id="panel"
                        >
                            <Typography variant='h5'>Products</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {products.map((product, index)=>(
                                <Box key={index} sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: 2,
                                    

                                }}>
                                    <Typography variant='h6'>{product}</Typography>
                                    <Box>
                                        <Button sx={{color:'#00A9E0'}}>
                                            Add product
                                        </Button>
                                        <Button sx={{color:'#00A9E0'}}>
                                            Delete product
                                        </Button>
                                    </Box>
                                </Box>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{
                        bgcolor:'grey.200',
                        marginTop:3
                    }}>
                        <AccordionSummary 
                        expandIcon={<ExpandMore />}
                        id="panel"
                        >
                            <Typography variant='h5'>Users</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Users
                        </AccordionDetails>
                    </Accordion>
                </Box>

            </Box>
        ):(
            <Typography variant='h2' sx={{color:"error.main"}}>This page cannot be accessed on mobile devices.</Typography>
        )}
        
    </Box>
  )
}

export default Admin