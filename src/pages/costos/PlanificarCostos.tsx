import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const PlanificarCostos = () => {
  const navigate = useNavigate()

  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='PLANIFICAR LA GESTIÓN DE LOS COSTOS' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
            <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ACTA DE CONSTITUCIÓN DEL PROYECTO</Typography>
                  <Link onClick={() => navigate('/acta-constitucion')} sx={{cursor: 'pointer'}} >ACTA DE CONSTITUCIÓN DEL PROYECTO</Link>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                  <Link onClick={() => navigate('/planificar-actividades')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DEL CRONOGRAMA</Link>   
                <Typography variant='subtitle1' component='h1' mb='0'>FACTORES AMBIENTALES DE LA EMPRESA</Typography>
                <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://media.discordapp.net/attachments/783158216976629770/974865692132261898/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='FACTORES AMBIENTALES DE LA EMPRESA'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>ACTIVOS DE LOS PROCESOS DE LA ORGANIZACIÓN</Typography>
                <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/974866508356419654/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ACTIVOS DE LOS PROCESOS DE LA ORGANIZACIÓN'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
            
            <Tema title='Herramientas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>JUICIO DE EXPERTOS</Typography>
                <Box display='flex' height='240px'>
                    <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/977378021256347778/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='JUICIO DE EXPERTOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/977378077590057030/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='JUICIO DE EXPERTOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                </Box>
                <Typography variant='subtitle1' component='h1' mb='0'>REUNIÓN</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987566740185706536/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ANÁLISIS DE DATOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN DE GESTIÓN DE COSTOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987566325176094740/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987566388514287706/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default PlanificarCostos