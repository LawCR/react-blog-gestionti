import { Box, CardMedia, Paper, Typography } from '@mui/material';
import { Tema } from '../../components';


const Implementacion = () => {
  return (
    <Box component='article'>
            <Box component='header'>
                <Tema 
                  title='DISEÑO Y LEVANTAMIENTO DE PLANOS' 
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
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987573361603391528/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/987575142454558761/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/987575179834175548/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/987575307483615283/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/987575456637276180/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/987576221233737778/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987756227842949190/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
  )
}

export default Implementacion