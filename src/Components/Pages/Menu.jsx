import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { MenuList } from '../Data/Data'

export default function Menu() {
  return (
    <>
      <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
         {
          MenuList.map((menu)=>(
            <Card key={menu.id}  sx={{maxWidth: 390, maxHeight:400,margin: "10px", padding:"10px"}}>
                <CardActionArea>

                  <CardMedia sx={{height: "300px", maxWidth: "400px", borderRadius: "10px"}} component={'img'} src={menu.image} alt={menu.name} />
                
                <CardContent>
                   <Typography variant='h5' gutterBottom component={"div"}>    
                      {menu.name} 
                   </Typography>
                   <Typography variant='body2'  >    
                      {menu.description} 
                   </Typography>

                </CardContent>
                </CardActionArea>
            </Card>
          ))
         }
      </Box>
    </>
  )
}
