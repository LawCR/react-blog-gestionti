import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import Cronograma  from '../../assets/cronograma.pdf'

const DesarrollarCronograma = () => {
  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='DESARROLLAR EL CRONOGRAMA' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
            <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
            <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/974105041453604884/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN PARA LA DIRECCIÓN DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/974107594325118998/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN PARA LA DIRECCIÓN DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN DE GESTIÓN DEL CRONOGRAMA</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/982489495465259068/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DEL CRONOGRAMA'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/982489554864988180/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='PLAN DE GESTIÓN DEL CRONOGRAMA'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>
                  <Typography variant='subtitle2' component='h1' mb='0'>ATRIBUTOS DE LA ACTIVIDAD</Typography>
                  <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475399286120458/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475452692181032/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475499408338964/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475559739215932/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475617423470612/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475654870204476/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ATRIBUTOS DE LA ACTIVIDAD'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle2' component='h1' mb='0'>LISTA DE HITOS</Typography>
                <CardMedia 
                  component="img"
                  height='auto'
                  image={'https://cdn.discordapp.com/attachments/783158216976629770/982474882656894986/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                  alt='LISTA DE HITOS'
                  sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>DIAGRAMA DE RED DEL CRONOGRAMA DEL PROYECTO</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/810977202068783149/982511645404328026/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DIAGRAMA DE RED DEL CRONOGRAMA DEL PROYECTO'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
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
            {/* <Typography variant='subtitle1' component='h1' mb='0'>JUICIO DE EXPERTOS</Typography> */}
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
            <Typography variant='h6' component='p' mb='0'>
            El método de la ruta crítica es una técnica que te permite identificar las tareas necesarias para finalizar un proyecto y determinar cierta flexibilidad en el cronograma. Una ruta crítica en la gestión de proyectos es la secuencia más larga de actividades que deben finalizarse a tiempo para completar todo el proyecto. Cualquier retraso en las tareas críticas provocará el retraso del resto del proyecto.
            El método de la ruta crítica tiene como fin identificar las tareas más importantes del cronograma del proyecto, detectar las dependencias de las tareas y calcular la duración de las tareas.
            </Typography>
                
            <Typography variant='subtitle1' component='h1' mb='0'>MÉTODO DE LA RUTA CRÍTICA</Typography>
            <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/810977202068783149/982662159593009162/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='MÉTODO DE LA RUTA CRÍTICA'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
            />
           
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                {/* <Typography variant='subtitle1' component='h1' mb='0'>LINEA BASE DEL CRONOGRAMA</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/924718186530766948/977067490456772628/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DOCUMENTACIÓN DE REQUISITOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                /> */}
                <Typography variant='subtitle1' component='h1' mb='0'>CRONOGRAMA DEL PROYECTO</Typography>
                <Box sx={{objectFit: 'contain', height: '70vh', width:'100%' , maxWidth: {xs: '100%', sm: '52vw',}}}>
                    <object data={Cronograma} type='application/pdf' width="100%" height="100%"></object>
                </Box>
                {/* <Typography variant='subtitle1' component='h1' mb='0'>DATOS DEL CRONOGRAMA</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/977375458876338207/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='Matriz de Trazabilidad de Requisitos'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>CALENDARIO DEL PROYECTO</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/977375458876338207/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='Matriz de Trazabilidad de Requisitos'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                /> */}
            </Box>
        </Box>
    </Box>
  )
}

export default DesarrollarCronograma