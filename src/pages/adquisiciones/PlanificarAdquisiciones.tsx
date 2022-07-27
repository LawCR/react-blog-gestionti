import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';
import PlanAdquisiciones from '../../assets/PlanAdquisiciones.pdf'

const PlanificarAdquisiciones = () => {
  const navigate = useNavigate()

    return (
        <Box component='article'>
            <Box component='header'>
                <Tema 
                    title='PLANIFICAR LA GESTIÓN DE LAS ADQUISICIONES DEL PROYECTO' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
                <Tema title='Entradas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle1' component='h1' mb='0'>ACTA DE CONSTITUCIÓN DEL PROYECTO</Typography>
                    <Link onClick={() => navigate('/acta-constitucion')} sx={{cursor: 'pointer'}} >ACTA DE CONSTITUCIÓN DEL PROYECTO</Link>
                    <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                        <Link onClick={() => navigate('/planificar-alcance')} sx={{cursor: 'pointer'}} >PLAN PARA LA GESTIÓN DEL ALCANCE</Link>
                        <Link onClick={() => navigate('/planificar-calidad')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LA CALIDAD</Link>
                        <Link onClick={() => navigate('/planificar-recursos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS RECURSOS</Link>
                        <Link onClick={() => navigate('/crear-edt')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL ALCANCE</Link> 
                    <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                        <Typography variant='subtitle2' component='h1' mb='0'>LISTA DE HITOS</Typography>
                        <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/982474882656894986/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='LISTA DE HITOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                        <Link onClick={() => navigate('/estimar-costos')} sx={{cursor: 'pointer'}} >DOCUMENTACIÓN DE REQUISITOS</Link>
                        <Link onClick={() => navigate('/definir-alcance')} sx={{cursor: 'pointer'}} >MATRIZ DE TRAZABILIDAD DE REQUISITOS</Link> 
                        <Link onClick={() => navigate('/estimar-recursos')} sx={{cursor: 'pointer'}} >REQUISITOS DE RECURSOS</Link>  
                        <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE RIESGOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/1000253048616140840/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='REGISTRO DE RIESGOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
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
                    <Typography variant='subtitle1' component='h1' mb='0'>RECOPILACIÓN DE DATOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/1001740651542622298/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='RECOPILACIÓN DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                </Box>
                
                <Tema title='Salidas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle2' component='h1' mb='0'>PLAN DE GESTIÓN DE LAS ADQUISICIONES</Typography>
                    <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '70vh', width:'100%'}}>
                      <object data={PlanAdquisiciones} type='application/pdf' width="100%" height="100%"></object>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
      )
}

export default PlanificarAdquisiciones