import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';
import HabilidadesComunicacion from '../../assets/MonitoreoI_HabilidadesComunicacion.pdf'
import HabilidadesInterpersonales from '../../assets/MonitoreoI_HabilidadesInterpersonales.pdf'
import DesempeñoTrabajo from '../../assets/MonitoreoI_Desempeño.pdf'

const MonitorearInteresados = () => {
  const navigate = useNavigate()

    return (
        <Box component='article'>
            <Box component='header'>
                <Tema 
                    title='MONITOREAR EL INVOLUCRAMIENTO DE LOS INTERESADOS' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
                <Tema title='Entradas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                        <Link onClick={() => navigate('/planificar-recursos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS RECURSOS</Link>
                        <Link onClick={() => navigate('/planificar-comunicaciones')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LAS COMUNICACIONES</Link>
                    
                    <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                       
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
                    <Typography variant='subtitle1' component='h1' mb='0'>ANALISIS DE DATOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/717931775472566272/1001740881998659674/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='ANALISIS DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/717931775472566272/1001741018762334238/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='ANALISIS DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                    <Typography variant='subtitle1' component='h1' mb='0'>TOMA DE DECISIONES</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/717931775472566272/1001741297394143302/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='ANALISIS DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/717931775472566272/1001741399672229948/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='ANALISIS DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                    <Typography variant='subtitle1' component='h1' mb='0'>REPRESENTACION DE DATOS</Typography>
                        <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://cdn.discordapp.com/attachments/717931775472566272/1001741875553783828/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='ANALISIS DE DATOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                        />
                    <Typography variant='subtitle1' component='h1' mb='0'>HABILIDADES DE COMUNICACIÓN</Typography>
                    <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '70vh', width:'100%'}}>
                      <object data={HabilidadesComunicacion} type='application/pdf' width="100%" height="100%"></object>
                    </Box>
                    <Typography variant='subtitle1' component='h1' mb='0'>HABILIDADES INTERPERSONALES Y DE EQUIPO</Typography>
                    <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '70vh', width:'100%'}}>
                      <object data={HabilidadesInterpersonales} type='application/pdf' width="100%" height="100%"></object>
                    </Box>
                </Box>
                
                <Tema title='Salidas' />
                <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                    <Typography variant='subtitle1' component='h1' mb='0'>INFORMACIÓN DE DESEMPEÑO DEL TRABAJO</Typography>
                    <Box sx={{objectFit: 'contain', display: 'flex', justifyContent:'center', height: '70vh', width:'100%'}}>
                      <object data={DesempeñoTrabajo} type='application/pdf' width="100%" height="100%"></object>
                    </Box>
                    
                </Box>
            </Box>
        </Box>
      )
}

export default MonitorearInteresados