import * as React from 'react'; 
import { 
  Typography,
  Box,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';
import { Card } from "../Components/Card"
import headshot from "../Assets/Blog/headshot.png"
import silus from "../Assets/Blog/silus-full.png"

const PrimaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main, 
    })
)

const TertiaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.tertiary.main,
    })
)



export function Blog() { 
const theme = useTheme()
  const posts = [
    {
      title: "The Rise of AI", 
      des: "Tell them to run and they'll run. But they don't run for you, they run at you.  They are your doom.",
      image: headshot
    }, 
    {
      title: "A Shitstorm Apocolypse", 
      des: "Its a rising game of uncomfortable Jello.  A long ods good chance of never finding the unknown.  The unconscious teathered to the anchor of stability by a loose bond.",
      image: silus
    }, 
  ]
  console.log(posts)
  return (
    <Box id="Blog"
      sx={{
        width: "100%",
        background: theme.palette.secondary.main,

      }}>
      <Box>
        <Box
          sx={{
            marginTop: "10%",
            display: "flex", 
            alignItems: 'center',
            flexDirection: "column",
          }}>
            <Box id="blogrationale"
              sx={{
                textAlign: "left",
                width: "70%", 
                justifyContent: "center", 
              }}>
              <TertiaryType variant="h6"
                >BLOG RATIONALE</TertiaryType>        
              <PrimaryType variant="h4">
                I like to reflect on learnings, both to relearn and to offer advice.
              </PrimaryType>
            </Box>
          </Box>
          {/* {/* <Grid container spacing={1}> */}
          <Box id="blogentries"
            sx={{
              display: "flex",
              flexWrap: "wrap", 
              flexDirection: "row",
              justifyContent: "center" 

            }}>
            {
              posts.map((post, index) => (
                <Card
                  des={post.des}
                  image={post.image}
                  title={post.title}
                  key={index}
                />
              ))
            }
        </Box>
      </Box>
    </Box>
)
}