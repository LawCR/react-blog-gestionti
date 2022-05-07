import { Box, Paper, Typography } from '@mui/material';
import { Integrantes, Tema } from '../components';





const Home = () => {
    return (
        <Box component='article'>
            <Box component='header'>
                <Tema 
                  title='PROYECTO DEL CURSO DE GESTIÓN DE PROYECTOS DE TI' 
                  subtitle='Elaborado por estudiantes de IX ciclo de la carrera profesional de Ing. de Sistemas de la Universidad Nacional Tecnológica de Lima Sur.' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
                <Integrantes />
                <Tema 
                  title='Descripción del Proyecto' 
                  subtitle='Establecer una infraestructura de última generación para laboratorios e instalaciones de computación, proporcionar equipos informáticos de  PC a los usuarios cuyos equipos tengan más de o 5 años  o sean ineficientes para optimizar y crear Beneficio de los procesos dados más el rendimiento del equipo conduce a mayor velocidad en todo tipo de procesos, por ejemplo (contabilidad, pedagogía, recursos humanos, etc.).' 
                  isTitle={false}
                />
            </Box>
        </Box>
    )
}

export default Home