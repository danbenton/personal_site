import * as React from 'react'; 
import { 
  Typography,
  Box,
} from '@mui/material'

export function Project() { 
  return (
    <Box id="Projects"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex", 
        justifyContent: 'center',
        background: 'green',
      }}>
        <Typography variant='h3'> 
          Projects
        </Typography>
    </Box>
)
}