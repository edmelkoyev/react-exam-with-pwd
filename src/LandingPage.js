import React from 'react'
import Box from  '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Button } from '@material-ui/core'

function MainPage() {
    const handleOpenMain = () => {
        window.open('index.html#/main', 'main')
    }

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box p={4} style={{ backgroundColor: '#ddd', height: '100vh' }}>
                    <Typography component="h1">
                        WAS Assessment Landing Page 
                    </Typography>
                    <Box p={4} display="flex" justifyContent="center">
                        <Button onClick={handleOpenMain} variant="contained" color="primary">
                            Open
                        </Button>
                    </Box>
                </Box>
                
            </Container>
        </>
    )
}

export default MainPage