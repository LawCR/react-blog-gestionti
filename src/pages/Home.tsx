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
                  subtitle='El proyecto de un Data Center en un colegio ofrece la posibilidad de ser adaptados a una gran gama de industrias. En el caso específico, del rubro de la educación, es aplicado un proceso el cual beneficia tanto a Universidades como a Institutos.
                  Parte del proceso que se llevará a cabo para implementar este proyecto incluirá; el análisis de la situación actual de la institución educativa, la toma de requerimientos, estudio de la factibilidad, desarrollo de un diseño conceptual  y esquemático, para poder establecer la construcción del proyecto. Para finalmente llegar su respectiva puesta en marcha.
                  También, es importante considerar que este proyecto debe estar sometido a una mantención constante en el tiempo.' 
                  isTitle={false}
                />
            </Box>
        </Box>
    )
}

export default Home