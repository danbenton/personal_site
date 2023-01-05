import * as React from 'react';
import {  
  Toolbar, 
  Typography, 
  Container, 
  Box,
  Button,
 } from '@mui/material'
import {styled, useTheme} from '@mui/material/styles'

const StyledButton = styled(Button)(({theme})=>({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderColor: 'white',
    color: theme.palette.secondary.main,
    boxShadow: "1px",
  },
}))

export function Header() {
  const theme = useTheme()
  const navItems = ['About','Blog','Projects','Contact']
    return ( 
    <Box 
    position='fixed'
    sx={{
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      width: "100%"
    }}
      > 
      <Container maxWidth='xl'>
        <Toolbar disableGutters> 
        <Typography variant='h6'>
            Dan<strong>Benton</strong>
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },

              }}>
            {navItems.map((page) => (
                <StyledButton
                  key={page}
                  // color='black'
                  sx={{my: 2, color: 'black', display: 'flex' }}
                  href={`#${page}`}
                >
                  {page}
                </StyledButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
      </Box>
  )

}