import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

export default function LoginPage() {
    const theme = useTheme();
    const smallDisplay = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            { smallDisplay ? <SmallScreenLoginPage/> : <LargeScreenLoginPage/> }
        </>
    );

    /////////////////////////////
    // Large Screen Login Page //
    /////////////////////////////
    function LargeScreenLoginPage() {
        return <Grid
            container
            spacing={0}
            sx={{
                width: '100vw',
                height: '100vw',
                overflow: 'hidden',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        >
            <Grid size={8}>
                <Box sx={{ backgroundColor: 'lightcoral', width: '100%', height: '100%' }}>
                    <p>Left Side</p>
                </Box>
            </Grid>
            <Grid size={4}>
                <Box sx={{ backgroundColor: 'lightblue', width: '100%', height: '100%' }}>
                    <p>Right Side</p>
                </Box>
            </Grid>
        </Grid>
    }

    function SmallScreenLoginPage() {
        return (
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    bgcolor: 'lightgreen',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <p>Small Screen</p>
            </Container>
        );
    }

};

