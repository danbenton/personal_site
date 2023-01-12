import * as React from 'react';
import {  
  Toolbar, 
  Typography, 
  Container, 
  Box,
  Button,
  Link,
 } from '@mui/material'
import {styled, useTheme} from '@mui/material/styles'

const StyledButton = styled(Button)(({theme})=>({
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    boxShadow: "1px",
  },
}))

const StyledLink = styled(Link)(({theme}) => ({
  marginLeft: "5px", 
  marginRight: "5px",
  background: theme.secondary,
  color: theme.primary,
  '&:hover': {
    textDecoration: `underline ${theme.palette.tertiary.main} 2px`
  }
}))

export function Header() {
  const theme = useTheme()
  const sections = ['About','Blog','Projects','Contact']
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
              flexGrow: 1, 
              display: { 
                md: 'flex', 
                justifyContent: 'flex-end' },
              }}>
          {
              sections.map(section => (
                <StyledLink
                  underline="none"
                  key={section}
                  variant="h6"
                  href={`#${section}`}>
                    {section}
                </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
      </Box>
  )

}