import * as React from 'react'; 
import { 
  Typography,
  Box,
  TextField,
  TextareaAutosize,
} from '@mui/material'

export function Contact() { 
  return (
    <Box id="Contact"
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex", 
        justifyContent: 'center',
        background: 'green',
      }}>
        <Typography variant='h3'> 
          Contact Me
        </Typography>
      <Box>
        <Box>
          <TextField
            id="name"
            label="Name"
            type="name"
            variant="standard" 
            color="primary"/>        
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
          style={{ width: 200 }}
/>
        </Box>
      </Box>
    </Box>
)
}