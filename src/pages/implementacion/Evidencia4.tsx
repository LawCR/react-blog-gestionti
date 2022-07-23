import { Box, CardMedia, Link, Typography, ImageList, ImageListItem } from '@mui/material';
import { Tema } from '../../components';

import ConstanciaConformidad from '../../assets/ConstanciaConformidad.pdf'

const Evidencia4 = () => {
    return (
        <Box component='article'>
            <Box component='header'>
                <Tema 
                    title='ENTREGABLES' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' alignItems='center' rowGap={4} paddingY={4}>
                <Tema 
                    title='Descripción del Proyecto' 
                    subtitle='Establecer una infraestructura de última generación para laboratorios e instalaciones de computación, proporcionar equipos informáticos de  PC a los usuarios cuyos equipos tengan más de o 5 años  o sean ineficientes para optimizar y crear Beneficio de los procesos dados más el rendimiento del equipo conduce a mayor velocidad en todo tipo de procesos, por ejemplo (contabilidad, pedagogía, recursos humanos, etc.).' 
                    isTitle={false}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/1000394915001421864/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/1000395041723928576/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/1000395227997163672/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/1000395616096108695/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://media.discordapp.net/attachments/783158216976629770/1000404043526574110/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '5vh', width:'100%'}}>
                    {/* <object data={PlanComunicaciones} type='application/pdf' width="100%" height="100%"></object> */}
                    
                    <Typography variant='subtitle2' component='h1' mb='0'>
                        <Link href="https://cdn.discordapp.com/attachments/924718186530766948/1000395861685186620/CUADRO_DE_CARGAS.xlsx" download="Cuadro de Cargas.xlsx" >Cuadro de Cargas</Link>
                    </Typography>
                </Box>
                <Typography variant='subtitle2' component='h1' mb='0'>CONSTANCIA DE CONFORMIDAD</Typography>
                <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '70vh', width:'100%'}}>
                    <object data={ConstanciaConformidad} type='application/pdf' width="100%" height="100%"></object>
                    
                </Box>
            </Box>
        </Box>
      )
}

export default Evidencia4