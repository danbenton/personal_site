import * as React from 'react'; 
import { 
  Typography,
  Box,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
import { render } from '@testing-library/react';

const PrimaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main, 
    })
)

const TertiaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.tertiary.main, 
    })
)


const TextBox = styled(Box)({
  textAlign: "left",
})

export function Card(props) { 
  const theme = useTheme() 
    return (
      <Box
        sx={{
          width:"600px", 
          margin: "2%"
        }}>
        <Box
          component="img"
          src={props.image}
          alt={props.image}
          sx={{
            objectFit: "cover",
            width:"100%", 
            overflow: 'hidden' ,
            maxHeight: "400px",
            '&:hover': {
              opacity: ".75"
            }
          }}
          // width="800px"
          />
        <TextBox id="title">
          <PrimaryType variant="h3">{props.title}</PrimaryType>
        </TextBox>
        <TextBox id="des">
          <PrimaryType>{props.des}</PrimaryType>
        </TextBox>
        <TextBox id="readmore">
          <TertiaryType>READ MORE</TertiaryType>
        </TextBox>
      </Box>
    )
  }