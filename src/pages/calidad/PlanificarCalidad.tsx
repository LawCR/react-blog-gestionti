import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const PlanificarCalidad = () => {

  const navigate = useNavigate()

  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='PLANIFICAR LA GESTIÓN DE CALIDAD' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
            <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ACTA DE CONSTITUCIÓN DEL PROYECTO</Typography>
                  <Link onClick={() => navigate('/acta-constitucion')} sx={{cursor: 'pointer'}} >ACTA DE CONSTITUCIÓN DEL PROYECTO</Link>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>PLAN DE GESTIÓN DE LOS RIESGOS</Typography>
                    <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/987743544921960528/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='PLAN DE GESTIÓN DE LOS RIESGOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/987743593487818753/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='PLAN DE GESTIÓN DE LOS RIESGOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/783158216976629770/987743646172463114/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='PLAN DE GESTIÓN DE LOS RIESGOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                  <Link onClick={() => navigate('/crear-edt')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL ALCANCE</Link> 
                <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/977415496502751282/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REGISTRO DE SUPUESTOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <Link onClick={() => navigate('/recopilar-requisitos')} sx={{cursor: 'pointer'}} >DOCUMENTACIÓN DE REQUISITOS</Link>   
                    <Link onClick={() => navigate('/definir-alcance')} sx={{cursor: 'pointer'}} >MATRIZ DE TRAZABILIDAD DE REQUISITOS</Link> 
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
               
                <Typography variant='subtitle1' component='h1' mb='0'>RECOPILACIÓN DE DATOS</Typography>
                    <Typography variant='h6' component='p' mb='0'>
                    Las entrevistas se realizan a los participantes experimentados del proyecto, a los interesados y a los expertos en la materia.
                    Se realizó la entrevista a la auxiliar de laboratorio Rosa Escalante para evaluar los puntos de calidad que se definen en la planificación.
                    </Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/990269868001611816/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ANÁLISIS DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                <Typography variant='subtitle1' component='h1' mb='0'>ANÁLISIS DE DATOS</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>COSTO DE CALIDAD</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/924718186530766948/990074026519056465/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ANÁLISIS DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN DE GESTIÓN DE LA CALIDAD</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/990099126551187466/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DE LA CALIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>METRICAS DE LA CALIDAD</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990090725075079238/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='METRICAS DE LA CALIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990085879206932510/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990086085344387092/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990086152574877726/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default PlanificarCalidad