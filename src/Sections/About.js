import * as React from 'react'; 
import { 
  Typography,
  Box,
  Paper,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

export function About() { 
  const theme = useTheme()
  return (
    <Box id="About"
      sx={{
        height: "100vh",
        display: "flex", 
        justifyContent: 'center',
        background: theme.palette.primary.main,
      }}>
        <Typography 
          color={theme.palette.secondary.main} 
          variant='h3' 
          sx={{marginTop: "5%" }}>
          About
        </Typography>
    </Box>
  )
}