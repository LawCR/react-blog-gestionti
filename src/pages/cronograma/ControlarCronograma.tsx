import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const ControlarCronograma = () => {
    const navigate = useNavigate()
    return (
      <Box component='article'>
          <Box component='header'>
              <Tema 
                  title='CONTROLAR EL CRONOGRAMA' 
              />
          </Box>
          <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
              <Tema title='Entradas' />
              <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                  <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                     <Link onClick={() => navigate('/planificar-actividades')} sx={{cursor: 'pointer'}} >PLAN DE GESTIÓN DEL CRONOGRAMA</Link>
                      <Link onClick={() => navigate('/crear-edt')} sx={{cursor: 'pointer'}} >LÍNEA BASE DEL ALCANCE</Link> 
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
                  <Typography variant='subtitle1' component='h1' mb='0'>OPTIMIZACIÓN DE RECURSOS</Typography>
                      <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/1001727325412532345/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='OPTIMIZACIÓN DE RECURSOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                      />
                      <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/1001727533852667914/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='OPTIMIZACIÓN DE RECURSOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                      />
                  <Typography variant='subtitle1' component='h1' mb='0'>SISTEMA DE INFORMACIÓN PARA LA DIRECCIÓN DE PROYECTOS</Typography>
                      <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://cdn.discordapp.com/attachments/783158216976629770/1001727749804793996/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='OPTIMIZACIÓN DE RECURSOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                      />
              </Box>
              
              <Tema title='Salidas' />
              <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                  <Typography variant='subtitle1' component='h1' mb='0'>ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO</Typography>
                  <Typography variant='subtitle2' component='h1' mb='0'>LINEA BASE DE COSTOS</Typography>
                  <CardMedia 
                      component="img"
                      height='auto'
                      image={'https://cdn.discordapp.com/attachments/783158216976629770/1001734489145344140/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                      alt='OPTIMIZACIÓN DE RECURSOS'
                      sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                  />
                  <Typography variant='subtitle2' component='h1' mb='0'>REGISTROS DE RIESGOS</Typography>
                  <CardMedia 
                      component="img"
                      height='auto'
                      image={'https://cdn.discordapp.com/attachments/783158216976629770/1001735337468498021/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                      alt='OPTIMIZACIÓN DE RECURSOS'
                      sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                  />
                  <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                  <CardMedia 
                      component="img"
                      height='auto'
                      image={'https://cdn.discordapp.com/attachments/783158216976629770/1001735436613455872/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                      alt='OPTIMIZACIÓN DE RECURSOS'
                      sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                  />
              </Box>
          </Box>
      </Box>
    )
}

export default ControlarCronograma