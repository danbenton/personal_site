import * as React from 'react'; 
import { 
  Typography,
  Box,
} from '@mui/material'
import { useTheme } from "@mui/material/styles"

export function Blog() { 
const theme = useTheme()
  const posts = [
    {
      title: "The Rise of AI", 
      body: ""

    }
  ]
  return (
    <Box id="Blog"
      sx={{
        // height: "100vh",
        width: "100%",
        display: "flex", 
        justifyContent: 'center',
        background: theme.palette.secondary.main,
      }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant='h3' 
          sx={{marginTop: "5%" }}>
          Blog
        </Typography>
    </Box>
)
}