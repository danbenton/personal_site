import * as React from 'react'; 
import { 
  Typography,
  Box,
  Divider,
  Link
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
// import { theme } from '../Themes/Theme';
//Todo: primary vs. secondary vs. tertiary colors



const StyledLink = styled(Link)(({theme}) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    // borderColor: theme.palette.tertiary.main,
    textDecoration: `underline ${theme.palette.tertiary.main}`
  },
}))

export function Landing() { 
  const theme = useTheme()
  const sections = ['About','Blog','Projects','Contact']
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex", 
        flexDirection: "column",
        alignItems: 'center', 
        justifyContent: 'center',
        background: theme.palette.secondary.main,
        color: theme.palette.primary.main,

      }}>
        <Box
          sx={{
              display:"flex", 
              flexDirection:"row",
          }}>
          <Typography variant='h1' 
            sx={{
              color: theme.palette.primary.main,
            }}> 
            Dan
          </Typography>
          <Typography variant='h1' 
            sx={{
              fontWeight: "700",
              color: theme.palette.primary.main,
              '&:hover': {
                color: theme.palette.tertiary.main
                }
              }}> 
              Benton
            </Typography>
        </Box>
        <Divider sx={{
          margin: "30px",
          background: theme.palette.tertiary.main,
          borderWidth: "1px"
        }}
          width="35%"
          variant="middle"/>
        <Box
          sx={{
            display: 'flex', 
            flexDirection: 'row', 
            width: "40%",
            justifyContent: "space-around",
            marginTop: "5px",

          }}> 
          {sections.map(section => (
              <StyledLink
                underline="none"
                key={section}
                variant="h5"
                href={`#${section}`}>
                  {section}
              </StyledLink>
          ))}
        </Box>
    </Box>
)
}