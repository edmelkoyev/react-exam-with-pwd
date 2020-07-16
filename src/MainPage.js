import React from 'react'
import Box from  '@material-ui/core/Box'
import FormDialog from './FormDialog'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

function MainPage() {
  return (
    <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Box p={4} style={{ backgroundColor: '#ddd', height: '100vh' }}>
            <Typography component="h1">
                WAS Assessment Name
            </Typography>
            {[...Array(5).keys()].map(
                key => (
                <Box key={key} py={1}>
                    <Typography component="span">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis 
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit 
                    in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis 
                    at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril 
                    delenit augue duis dolore te feugait nulla facilisi.
                    </Typography>
                </Box>)
            )}
            </Box>
            
        </Container>
        <FormDialog />
    </>
  )
}

export default MainPage