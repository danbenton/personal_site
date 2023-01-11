import * as React from 'react'; 
import { 
  Typography,
  Box,
  TextField,
  TextareaAutosize,
  Paper,
} from '@mui/material'
import { useTheme } from '@mui/material/styles';

export function Contact() { 
  const theme = useTheme()
  return (
    <Box id="Contact"
      sx={{
        // height: "100vh",
        width: "100%",
        display: "flex", 
        justifyContent: 'center',
        background: theme.palette.secondary.main,
      }}>
        <Box
          sx={{
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center", 
          }}> 
        <Typography 
          color={theme.palette.primary.main}
          variant='h3'
          sx={{marginTop:"5%"}}> 
          Contact Me
        </Typography>
      <Box
        sx={{
          minHeight: "500px"
    

        }}>
      <Paper
        sx={{
          margin:"20px", padding:"20px", 
          background: theme.palette.primary.main}}>
        <Box>
          <TextField
              id="name"
              label="Name"
              type="name"
              variant="standard" 
              sx={{
                color:theme.palette.primary.main
                }}/>        
          <TextField
              id="email"
              label="Email"
              type="email"
              variant="standard" />
          <TextField
              id="subject"
              label="Subject"
              type="subject"
              variant="standard" />
          </Box>
          <Box>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Write Msg. Here"
            style={{ width: 200 }}/>
          </Box>
        </Paper>
      </Box>
      </Box>
    </Box>
)
}