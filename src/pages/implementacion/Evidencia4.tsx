import { Box, CardMedia, Paper, Typography, ImageList, ImageListItem } from '@mui/material';
import { Tema } from '../../components';

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
            </Box>
        </Box>
      )
}

export default Evidencia4