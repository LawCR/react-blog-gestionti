import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const IdentificarRiesgos = () => {
    const navigate = useNavigate()

    return (
        <Box component='article'>
            <Box component='header'>
                <Tema 
                    title='Identificar los Riesgos' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
                <Tema title='Entradas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                        <Link onClick={() => navigate('/planificar-alcance')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS REQUISITOS</Link>
                        <Link onClick={() => navigate('/planificar-actividades')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DEL CRONOGRAMA</Link>
                        <Link onClick={() => navigate('/planificar-costos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS COSTOS</Link>
                        <Link onClick={() => navigate('/planificar-calidad')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LA CALIDAD</Link>
                        <Link onClick={() => navigate('/planificar-recursos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS RECURSOS</Link>
                        <Link onClick={() => navigate('/planificar-riesgos')} sx={{cursor: 'pointer'}} >PLAN DE LA GESTIÖN DE LOS RIESGOS</Link>
                        <Link onClick={() => navigate('/crear-edt')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL ALCANCE</Link> 
                        {/* <Link onClick={() => navigate('/desarrollar-cronograma')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL CRONOGRAMA</Link>  */}
                        <Link onClick={() => navigate('/determinar-presupuesto')} sx={{cursor: 'pointer'}} >LÍNEA BASE DE COSTOS</Link> 
                    
                    <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                        {/* <Link onClick={() => navigate('/definir-actividades')} sx={{cursor: 'pointer'}} >ATRIBUTOS DE LA CALIDAD</Link>  */}
                        {/* <Link onClick={() => navigate('/recopilar-requisitos')} sx={{cursor: 'pointer'}} >LISTA DE ACTIVIDADES</Link>   */}
                        <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/977415496502751282/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='REGISTRO DE SUPUESTOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        /> 
                        <Link onClick={() => navigate('/estimar-costos')} sx={{cursor: 'pointer'}} >ESTIMACIONES DE COSTOS</Link>  
                        <Link onClick={() => navigate('/estimar-actividades')} sx={{cursor: 'pointer'}} >ESTIMACIÓN DE LA DURACIÓN</Link>  
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
                        <Link onClick={() => navigate('/estimar-costos')} sx={{cursor: 'pointer'}} >DOCUMENTACIÓN DE REQUISITOS</Link>
                        <Link onClick={() => navigate('/definir-alcance')} sx={{cursor: 'pointer'}} >REGISTRO DE INTERESADOS</Link>
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
                    <Typography variant='subtitle1' component='h1' mb='0'>DIAGRAMA DE ISHIKAWA</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/1000243398076280893/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='DIAGRAMA DE ISHIKAWA'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                </Box>
                
                <Tema title='Salidas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle2' component='h1' mb='0'>INFORME DE RIESGOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/1000243625092984862/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='INFORME DE RIESGOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                    
                </Box>
            </Box>
        </Box>
      )
}

export default IdentificarRiesgos