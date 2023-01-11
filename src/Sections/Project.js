import * as React from 'react'; 
import { 
  Typography,
  Box,
  Paper,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
import aipng from "../Assets/ai.png"


const StyledPaper = styled(Paper)(({theme}) => ({
  background: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    // borderColor: '#FF7300',
    // background: theme.palette.primary.main, 
    // color: theme.palette.secondary.main,
    opacity: 0.75,
  },
}))


function ProjectCards(props) { 
  const theme = useTheme()
  console.log(props)
  return (
    <StyledPaper 
      sx={{
        background: theme.palette.secondary.main, 
        padding: "10px",
        maxWidth: "300px", 
        margin: "20px", 
        borderRadius: "10px"
      }}
      elevation={5}>
      <img src={props.icon} alt={props.title} width="100%" height="auto" />
      <Typography 
        variant="h4"
        sx={{
          color: theme.palette.primary.main

        }}>{props.title}</Typography>
        <Typography>{props.des}</Typography>

    </StyledPaper>
  )
}

export function Project() { 
  const theme = useTheme()
  const projects = [
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    }, 
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    },     
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    }, 
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    }, 
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    }, 
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    },
    {
      icon: aipng, 
      title: "The Rise of AI", 
      des: "The new age of capitalism is forcing AI adoption at an ever increasing pace.  Developmental efforts in the AI space now exceed..."
    }, 
  ]
  return (
    <Box id="Projects"
      sx={{
        // height: "100vh",
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
          Projects
        </Typography>
        <Box
          sx={{
            display: "flex", 
            flexDirection: 'row',
            flexWrap: "wrap", 
            justifyContent: "center",

            color: theme.palette.primary.main
          }}>
          {
            projects.map((entry)=> (
              <ProjectCards 
                title={entry.title}
                icon={entry.icon}
                des={entry.des}
                />
                ))
          }
          </Box>
        </Box>
    </Box>
  )
}