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
          {/* <Box id='mystory'
            sx={{
              display: "flex",
              flexDirection: "column",
            }}> */}
        <Box id='openingSalvo'
          sx={{
            display: "flex", 
            flexDirection: "row",
          }}>
          <Grid container spacing={2}
            sx={{
              display: "flex", 
              flexDirection: "row",
              flexWrap: "wrap", 
              margin: "10%",
            }}>
            <Grid item={true} xs={6}
              sx={{
                display:"flex",
                justifyContent: "center",
              }}>
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
                        height: "auto",
                        width: "100%", 
                        maxWidth: "600px", 
                        objectFit: "cover",
                         borderRadius: "20px",
                      }}/>
                  </Box>
                ))
              }
            </Grid>
            <Grid item={true}xs={6}
              sx={{
                textAlign: "left",
                display: "flex",
              }}>
              <Box 
                id="mystory-text"
                sx={{
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "center",
                  marginLeft: "10%",
                  marginRight: "10%",
                }}>
                <TertiaryType variant="h6">INTRO.</TertiaryType>   
                <Typography variant="h2"
                  sx={{
                    color: theme.palette.primary.main,
                    '&:hover': {
                      textDecoration: `underline ${theme.palette.tertiary.main} 2px`
                    }
                  }}>How We Got Here.</Typography>
                <Box id='storytextbox'
                  sx={{ 
                    display: 'flex',
                    flexWrap: "wrap",            
                  }}>
                  <Box id='storytext'>
                    <PrimaryType
                      sx={{
                        lineHeight: "30px",
                        marginBottom: "10px"
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. 
                      Fames ac turpis egestas sed. Aenean euismod elementum nisi quis eleifend. 
                      {/* Lobortis feugiat vivamus at augue eget arcu dictum varius. Eros donec ac odio tempor. 
                      Scelerisque fermentum dui faucibus in ornare quam viverra.  */}
                    </PrimaryType>
                    <PrimaryType
                      sx={{
                        lineHeight: "30px",
                        marginBottom: "10px"
                      }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. 
                      Fames ac turpis egestas sed. Aenean euismod elementum nisi quis eleifend. 
                      {/* Lobortis feugiat vivamus at augue eget arcu dictum varius. Eros donec ac odio tempor. 
                      Scelerisque fermentum dui faucibus in ornare quam viverra.  */}
                    </PrimaryType>
                    <PrimaryType
                      sx={{
                        lineHeight: "30px",
                        marginBottom: "10px"
                      }}>   
                      At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Lobortis mattis aliquam faucibus purus. 
                      Sit amet mauris commodo quis imperdiet massa. 
                      Ac tortor dignissim convallis aenean et tortor at. 
                      Sit amet consectetur adipiscing elit. Tristique sollicitudin nibh sit amet. 
                      {/* Dui nunc mattis enim ut tellus. Lacus sed viverra tellus in hac. 
                      Nisl nunc mi ipsum faucibus vitae aliquet. Nunc non blandit massa enim nec dui nunc mattis enim.  */}
                    </PrimaryType>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
          {/* </Box> */}
          <Box id="nutshell"
            sx={{
              display: "flex", 
              flexDirection: "rows", 
              // margin: "100px", 
              justifyContent: "center",
            }}>
            <Box
              sx={{
                display:"flex", 
                alignItems: "flex-start",
                flexDirection: "column",
                // marginTop: "60px", 
                width:"70%",
                padding: "5%",
                marginLeft: "15%",
                marginRight:"15%",
              }}>
              <TertiaryType variant="h6">WHO I'VE BECOME</TertiaryType>
              <PrimaryType 
                sx={{
                  fontSize: "50px",
                  textAlign: "left",
                }}>
                Husband, Father, Metaphysical Traveler, Drummer, Creative Thinker, Loyal
              </PrimaryType>
          </Box>
          </Box>
          <Box id='Packages'
            sx={{
              margin: "5%",
              paddingTop: "3%" 
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
                  Frameworks, Software and Languages
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
                     The Basics
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
                {/* Beginning of heavy use section */}
                {/* <Box
                  sx={{
                    margin: "10px", 
                  }}>
                  <PrimaryType variant="h3"
                    sx={{
                      marginTop: "5%"

                    }}>
                     Current, Heavy Use
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
                </Box> */}
              </Box>
          </Box>
        </Box>
    </Box>
  )
}