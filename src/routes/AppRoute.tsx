import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import { Box, Container } from '@mui/material';
import { Footer, Header, Navbar, SideMenu } from '../components';
import { ActaConstitucion, CrearEDT, DefinirAlcance, DireccionProyecto, Home, IdentificarInteresados, PlanificarAlcance, RecopilarRequisitos } from '../pages';
import { DefinirActividades, DesarrollarCronograma, EstimarActividades, PlanificarActividades, SecuenciarActividades } from '../pages/cronograma';
import { DeterminarPresupuesto, EstimarCostos, PlanificarCostos } from '../pages/costos';
import { PlanificarCalidad } from '../pages/calidad';
import { Evidencia2, Evidencia3, Implementacion } from '../pages/implementacion';
import { EstimarRecursos, PlanificarRecursos } from '../pages/recursos';
import IdentificarRiesgos from '../pages/riesgos/IdentificarRiesgos';
import PlanificarComunicacion from '../pages/comunicacion/PlanificarComunicacion';
import PlanificarRiesgos from '../pages/riesgos/PlanificarRiesgos';
import RiesgosCualitativos from '../pages/riesgos/RiesgosCualitativos';
import RiesgosCuantitativos from '../pages/riesgos/RiesgosCuantitativos';
import RespuestaRiesgos from '../pages/riesgos/RespuestaRiesgos';
import Evidencia4 from '../pages/implementacion/Evidencia4';
import ControlarCronograma from '../pages/cronograma/ControlarCronograma';
import PlanificarAdquisiciones from '../pages/adquisiciones/PlanificarAdquisiciones';
import MonitorearInteresados from '../pages/interesados/MonitorearInteresados';
import ControlarCostos from '../pages/costos/ControlarCostos';


const AppRoute = () => {

    return (
        <HashRouter>
            
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
                            {/* TODO: */}
                            <Route path="/controlar-cronograma" element={<ControlarCronograma />} /> 

                            <Route path="/planificar-costos" element={<PlanificarCostos />} />
                            <Route path="/estimar-costos" element={<EstimarCostos />} />
                            <Route path="/determinar-presupuesto" element={<DeterminarPresupuesto />} />

                            {/* TODO: */}
                            <Route path="/controlar-costos" element={<ControlarCostos />} /> 

                            <Route path="/planificar-calidad" element={<PlanificarCalidad />} />
                            <Route path="/planificar-recursos" element={<PlanificarRecursos />} />
                            <Route path="/estimar-recursos" element={<EstimarRecursos />} />
                            <Route path="/planificar-comunicaciones" element={<PlanificarComunicacion />} />
                            <Route path="/planificar-riesgos" element={<PlanificarRiesgos />} />
                            <Route path="/identificar-riesgos" element={<IdentificarRiesgos />} />
                            <Route path="/riesgos-cualitativos" element={<RiesgosCualitativos />} />
                            <Route path="/riesgos-cuantitativos" element={<RiesgosCuantitativos />} />
                            <Route path="/respuesta-riesgos" element={<RespuestaRiesgos />} />

                            {/* TODO */}
                            <Route path="/monitorear-interesados" element={<MonitorearInteresados />} /> 
                            <Route path="/planificar-adquisiciones" element={<PlanificarAdquisiciones />} /> 


                            <Route path="/primer-entregable" element={<Implementacion />} />
                            <Route path="/segundo-entregable" element={<Evidencia2 />} />
                            <Route path="/tercer-entregable" element={<Evidencia3 />} />
                            <Route path="/entregable-final" element={<Evidencia4 />} />




                        </Routes>
                    </Box>
                </Container>
                <Footer />
            {/* </Container> */}
        </HashRouter>
    )
}

export default AppRoute