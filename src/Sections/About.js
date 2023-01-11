import * as React from 'react'; 
import { 
  Typography,
  Box,
  Divider,
  Grid,
  Item,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles';

const PrimaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main, 
    })
)

const TertiaryType = styled(Typography)(({theme}) => ({
  color: theme.palette.tertiary.main, 
    })
)



export function About() { 
  const techImages = importAll(require.context('../Assets/Tech', false, /\.(png)$/));
  const meImages = importAll(require.context('../Assets/Me', false, /\.(png)$/));
  const theme = useTheme()

  function importAll(r) {
    return r.keys().map(r);
  }

  return (
    <Box id="About"
      sx={{
        display: "flex", 
        justifyContent: 'center',
        background: theme.palette.secondary.main,
      }}>
        <Box>
          <Box id='mystory'
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "100px",
            }}>
            <Box
              sx={{
                display: "flex", 
                flexDirection: "row",
              }}>
              <Grid container spacing={2}
                sx={{
                  display: "flex", 
                  flexDirection: "column",
                  flexWrap: "wrap", 
                }}>
                <Grid xs={8}>
                  {
                  meImages.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        margin: "10px",
                        display: "flex", 
                        justifyContent: "center", 
                      }}>
                      <Box 
                        component="img" 
                        key={item}
                        src={item} alt={item}
                        sx={{ 
                          height: "100%", width: "100%", 
                          objectFit: "cover", borderRadius: "20px",
                        }}/>
                    </Box>
                  ))
                }
              </Grid>
              </Grid>
              <Box 
              id="mystory-text"
              sx={{
                display: "flex", 
                flexDirection: "column"
              }}>
              <PrimaryType variant="h2">The Journey Here.</PrimaryType>
            <Box
              sx={{ 
                  display: 'flex',
                  flexWrap: "wrap",            
                }}>
              <Box>
                <PrimaryType
                  sx={{
                    lineHeight: "30px",
                    marginBottom: "10px"
                  }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. 
                Fames ac turpis egestas sed. Aenean euismod elementum nisi quis eleifend. Lobortis feugiat vivamus at augue eget arcu dictum varius. Eros donec ac odio tempor. Scelerisque fermentum dui faucibus in ornare quam viverra. 
                </PrimaryType>
                <PrimaryType
                  sx={{
                    lineHeight: "30px",
                    marginBottom: "10px"
                  }}>   
                  At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Lobortis mattis aliquam faucibus purus. Sit amet mauris commodo quis imperdiet massa. Ac tortor dignissim convallis aenean et tortor at. Sit amet consectetur adipiscing elit. Tristique sollicitudin nibh sit amet. Dui nunc mattis enim ut tellus. Lacus sed viverra tellus in hac. Nisl nunc mi ipsum faucibus vitae aliquet. Nunc non blandit massa enim nec dui nunc mattis enim. 
                </PrimaryType>
              </Box>
            </Box>
            </Box>

            </Box>
          </Box>
          <Box id="nutshell"
            sx={{
              display: "flex", 
              flexDirection: "rows", 
              margin: "100px"
            }}>
            <Box
              sx={{
                marginLeft: "5%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "80%"
              }}>
              <TertiaryType variant="h6">ME IN TWENTY WORDS</TertiaryType>
              <PrimaryType 
                sx={{
                  fontSize: "50px",
                }}>
                Husband, Father, Metaphysical Traveler, Drummer, Creative Thinker, Loyal
              </PrimaryType>
          </Box>
          </Box>
          <Box
            id='Packages'
            sx={{
              marginBottom: "100px", 
            }}>
            <Box
              sx={{
                display:"flex", 
                alignItems: "center",
                flexDirection: "column",
                marginTop: "60px", 

              }}>
                <Box>
                  <TertiaryType variant="h5">
                  Packages & Tech
                  </TertiaryType>
                </Box>
                <Box
                  sx={{
                    margin: "10px", 
                  }}>
                  <PrimaryType variant="h3"
                    sx={{
                      marginBottom: "20px"
                    }}>
                    Frameworks, Software and Languages I Most Often Use
                  </PrimaryType> 
                </Box>
                <Box 
                  sx={{
                    display:"flex", 
                    flexDirection:"row", 
                    marginLeft: "15%",
                    marginRight: "15%",
                    flexWrap: "wrap",
                    justifyContent:"space-around",
                  }}>
                  {
                    techImages &&
                    techImages.map((item) => (
                      <Box
                        key={item}
                        sx={{
                          margin: "10px"
                        }}>
                        <img src={item} alt={item} height="75px" width="auto" />
                      </Box>
                      ))
                    }
                </Box>
              </Box>
          </Box>


        </Box>
    </Box>
  )
}