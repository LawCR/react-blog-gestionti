import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { Footer, Header, Navbar, SideMenu } from '../components';
import { ActaConstitucion, Home, IdentificarInteresados } from '../pages';


const AppRoute = () => {

    return (
        <BrowserRouter>
            
            <Navbar />
            {/* <Container> */}
                <SideMenu />
                <Header />
                <Container maxWidth='xl'>
                    <Box marginTop={2}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/acta-constitucion" element={<ActaConstitucion />} />
                            <Route path="/identificar-interesados" element={<IdentificarInteresados />} />
                        </Routes>
                    </Box>
                </Container>
                <Footer />
            {/* </Container> */}
        </BrowserRouter>
    )
}

export default AppRoute