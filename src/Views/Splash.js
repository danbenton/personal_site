import * as React from 'react'; 
import { 
  Box, 
} from '@mui/material'
import { Header } from '../Components/Header'
import { Landing } from '../Sections/Landing'
import { About } from "../Sections/About"
import { Blog } from '../Sections/Blog';
import { Project } from '../Sections/Project';
import { Contact } from "../Sections/Contact"

export function SinglePage() { 
  return ( 
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column'
        }}>
      <Header />
      <Landing />
      <About />
      <Blog />
      <Project />
      <Contact />
    </Box>
  )  
}

