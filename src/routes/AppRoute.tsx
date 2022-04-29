import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import Home from '../pages/Home';
import Inicio from '../pages/Inicio';
import { Footer, Header, Navbar, SideMenu } from '../components';


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
                            <Route path="/inicio" element={<Inicio />} />
                        </Routes>
                    </Box>
                </Container>
                <Footer />
            {/* </Container> */}
        </BrowserRouter>
    )
}

export default AppRoute