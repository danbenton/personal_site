import * as React from 'react'; 
import { 
  Typography,
  Box,
} from '@mui/material'

export function Section() {
  console.log('here')
  // const section = props.section

  return (
    <Box 
      // id={section.item}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex", 
        justifyContent: 'center',
        background: '#FF7300',
        paddingTop: "200px",
      }}>
        <Typography variant='h3'> 
          {/* {section.item} */}
          Wow Cool Man
        </Typography>
        {/* {section.children} */}
    </Box>
)};


// {
//   sections.map((item) => (
//     <Box 
//       key={item}
//       id={item}
//       sx={{
//         height: "100vh",
//         width: "100%",
//         display: "flex", 
//         justifyContent: 'center',
//         background: '#FF7300',
//       }}>
//       <Typography variant='h3'> 
//         {item}
//       </Typography>
//       {/* {section.children} */}
//   </Box>
//       // id={item}
//       // item={item}
//   ))