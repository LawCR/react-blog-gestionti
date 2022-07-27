import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';


const ControlarCostos = () => {
    const navigate = useNavigate()
    return (
      <Box component='article'>
          <Box component='header'>
              <Tema 
                  title='CONTROLAR LOS COSTOS' 
              />
          </Box>
          <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
              <Tema title='Entradas' />
              <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                  <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                    <Link onClick={() => navigate('/planificar-costos')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DE LOS COSTOS</Link>
                    <Link onClick={() => navigate('/determinar-presupuesto')} sx={{cursor: 'pointer'}} >LÍNEA BASE DE COSTOS</Link>
                  <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                      <Link onClick={() => navigate('/estimar-costos')} sx={{cursor: 'pointer'}} >DOCUMENTACIÓN DE REQUISITOS</Link>
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
                      <Link onClick={() => navigate('/desarrollar-cronograma')} sx={{cursor: 'pointer'}} >CRONOGRAMA DEL PROYECTO</Link> 
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
                  <Typography variant='subtitle1' component='h1' mb='0'>ANALISIS DE DATOS</Typography>
                      <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/1001738054723194952/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='OPTIMIZACIÓN DE RECURSOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                      />
                  <Typography variant='subtitle1' component='h1' mb='0'>INDICE DE DESEMPEÑO DEL TRABAJO POR COMPLETAR</Typography>
                      <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/1001738091532402798/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='OPTIMIZACIÓN DE RECURSOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                      />
              </Box>
              
              <Tema title='Salidas' />
              <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                  <Typography variant='subtitle1' component='h1' mb='0'>INFORMACIÓN DE DESEMPEÑO DEL TRABAJO</Typography>
                  
                  <CardMedia 
                      component="img"
                      height='auto'
                      image={'https://cdn.discordapp.com/attachments/783158216976629770/1001738451193958400/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                      alt='OPTIMIZACIÓN DE RECURSOS'
                      sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                  />
              </Box>
          </Box>
      </Box>
    )
}

export default ControlarCostos