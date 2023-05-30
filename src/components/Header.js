import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Header({title, about, image="https://static.miraheze.org/greatcharacterswiki/thumb/5/5c/Mouse.png/600px-Mouse.png"}) {

const boxDefault = {
    height: 200,
    border: "none",
    padding: 1, 
    width: 500,
    m: 1,
    justifyContent: "center",
    marginLeft: "auto",
    marginTop: "-300px",
    marginRight: "300px"
}
    return (
   <header>
  <h1>{title}</h1>
  <p>{about}</p>
  <img src={image} alt="mickeymouse"/>
  <Box   m={1}
 //margin
  display="flex"
  alignItems="center"
  sx={boxDefault}>
<Button variant="contained" color="error" sx={{ height: 50 }}>Create a Wishlist</Button>
</Box>
   </header>
    )
}

export default Header