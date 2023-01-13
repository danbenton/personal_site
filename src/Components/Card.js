import React, { useState } from 'react';
import { 
  Typography,
  Box,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Scale } from '@mui/icons-material';

const PrimaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main, 
  fontWeight: "100"
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
  const [isShown, setIsShown] = useState(false);
  const theme = useTheme() 
    return (
      <Box
        sx={{
          width: "600px",
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
          <Box
            sx={{
            display: "flex", 
            flexDirection: "row",
            color: theme.palette.tertiary.main,
            }}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            > 
            <Typography>READ MORE</Typography>
            {
              isShown &&
              <ArrowForwardIosIcon 
              sx={{ 
                marginLeft: "1%",
                transform: `scale(.5)`,
                }}/>
            }
          </Box>
        </TextBox>

      </Box>
    )
  }