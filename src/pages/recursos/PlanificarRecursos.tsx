import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';
import RecursosRaci  from '../../assets/RecursosRaci.pdf'
import PlanRecursos  from '../../assets/PlanRecursos.pdf'


const PlanificarRecursos = () => {

    const navigate = useNavigate()

  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='PLANIFICAR LA GESTIÓN DE RECURSOS' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
            <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ACTA DE CONSTITUCIÓN DEL PROYECTO</Typography>
                  <Link onClick={() => navigate('/acta-constitucion')} sx={{cursor: 'pointer'}} >ACTA DE CONSTITUCIÓN DEL PROYECTO</Link>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                    <Link onClick={() => navigate('/planificar-calidad')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LA CALIDAD</Link>
                    <Link onClick={() => navigate('/crear-edt')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL ALCANCE</Link> 
                <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                    <Link onClick={() => navigate('/desarrollar-cronograma')} sx={{cursor: 'pointer'}} >CRONOGRAMA DEL PROYECTO</Link> 
                    <Link onClick={() => navigate('/recopilar-requisitos')} sx={{cursor: 'pointer'}} >DOCUMENTACIÓN DE REQUISITOS</Link>   
                    <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE RIESGOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/717931775472566272/987596444808654898/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='PLAN DE GESTIÓN DE COSTOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <Link onClick={() => navigate('/identificar-interesados')} sx={{cursor: 'pointer'}} >REGISTRO DE INTERESADOS</Link> 
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
               
                <Typography variant='subtitle1' component='h1' mb='0'>REPRESENTACIÓN DE DATOS</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>Estructura de Desglose de Trabajo</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/992591703863205948/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REPRESENTACIÓN DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <Typography variant='subtitle2' component='h1' mb='0'>Estructura de Desglose de Recursos</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/924718186530766948/992592058135089222/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REPRESENTACIÓN DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <Typography variant='subtitle2' component='h1' mb='0'>Formatos tipo texto</Typography>
                    <Box sx={{objectFit: 'contain', height: '70vh', width:'100%' , maxWidth: {xs: '100%', sm: '52vw',}}}>
                        <object data={RecursosRaci} type='application/pdf' width="100%" height="100%"></object>
                    </Box>
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN DE GESTIÓN DE RECURSOS</Typography>
                <Box sx={{objectFit: 'contain', height: '70vh', width:'100%' , maxWidth: {xs: '100%', sm: '52vw',}}}>
                    <object data={PlanRecursos} type='application/pdf' width="100%" height="100%"></object>
                </Box>
                <Typography variant='subtitle1' component='h1' mb='0'>ACTA DE CONSTITUCIÓN DEL EQUIPO</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/992586433707659304/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ACTA DE CONSTITUCIÓN DEL EQUIPO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE RIESGOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/992594394073014352/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/992594490500067368/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/992594568409264209/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
            </Box>
        </Box>
    </Box>
  )
}

export default PlanificarRecursos