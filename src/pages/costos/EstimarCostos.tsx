import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const EstimarCostos = () => {
  const navigate = useNavigate()

  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='ESTIMAR LOS COSTOS' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
            <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                  <Link onClick={() => navigate('/planificar-costos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE COSTOS</Link>   
                  <Link onClick={() => navigate('/direccion-proyecto')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL PROYECTO</Link> 
                <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                <Link onClick={() => navigate('/desarrollar-cronograma')} sx={{cursor: 'pointer'}} >CRONOGRAMA DEL PROYECTO</Link> 
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
                <Typography variant='subtitle1' component='h1' mb='0'>ESTIMACIÓN POR 3 VALORES</Typography>
                <Typography variant='subtitle2' component='h1' mb='0'>ESTIMACIÓN DE COSTOS DE MATERIALES</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987585427785515078/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE COSTOS DE MATERIALES'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle2' component='h1' mb='0'>ESTIMACIÓN DE COSTOS DE SERVICIOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987585751833264178/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE COSTOS DE SERVICIOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle2' component='h1' mb='0'>ESTIMACIÓN DE COSTOS DE MANO DE OBRA</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987585857886248991/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE COSTOS DE MANO DE OBRA'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ESTIMACIONES DE COSTOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987588395855409182/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987588670401949756/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987588713041264690/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/987588746352402462/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO</Typography>
                <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/987595125867814952/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE LECCIONES</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/987595193047977984/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/987595407251079198/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE RIESGOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/987596444808654898/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE COSTOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default EstimarCostos