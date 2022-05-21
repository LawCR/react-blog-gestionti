import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { Footer, Header, Navbar, SideMenu } from '../components';
import { ActaConstitucion, DefinirAlcance, DireccionProyecto, Home, IdentificarInteresados, PlanificarAlcance, RecopilarRequisitos } from '../pages';


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
                            <Route path="/direccion-proyecto" element={<DireccionProyecto />} />
                            <Route path="/identificar-interesados" element={<IdentificarInteresados />} />
                            <Route path="/planificar-alcance" element={<PlanificarAlcance />} />
                            <Route path="/recopilar-requisitos" element={<RecopilarRequisitos />} />
                            <Route path="/definir-alcance" element={<DefinirAlcance />} />
                        </Routes>
                    </Box>
                </Container>
                <Footer />
            {/* </Container> */}
        </BrowserRouter>
    )
}

export default AppRoute