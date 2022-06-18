import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { Footer, Header, Navbar, SideMenu } from '../components';
import { ActaConstitucion, CrearEDT, DefinirAlcance, DireccionProyecto, Home, IdentificarInteresados, PlanificarAlcance, RecopilarRequisitos } from '../pages';
import { DefinirActividades, DesarrollarCronograma, EstimarActividades, PlanificarActividades, SecuenciarActividades } from '../pages/cronograma';
import { DeterminarPresupuesto, EstimarCostos, PlanificarCostos } from '../pages/costos';


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
                            <Route path="/crear-edt" element={<CrearEDT />} />
                            
                            <Route path="/planificar-actividades" element={<PlanificarActividades />} />
                            <Route path="/definir-actividades" element={<DefinirActividades />} />
                            <Route path="/secuenciar-actividades" element={<SecuenciarActividades />} />
                            <Route path="/estimar-actividades" element={<EstimarActividades />} />
                            <Route path="/desarrollar-cronograma" element={<DesarrollarCronograma />} />

                            <Route path="/planificar-costos" element={<PlanificarCostos />} />
                            <Route path="/estimar-costos" element={<EstimarCostos />} />
                            <Route path="/determinar-presupuesto" element={<DeterminarPresupuesto />} />



                        </Routes>
                    </Box>
                </Container>
                <Footer />
            {/* </Container> */}
        </BrowserRouter>
    )
}

export default AppRoute