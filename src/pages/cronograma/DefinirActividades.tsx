import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'

const DefinirActividades = () => {
  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='DEFINIR LAS ACTIVIDADES' 
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
                <Typography variant='h6' component='p' mb='0'>
                La descomposición del proyecto es el proceso de dividir los componentes de un gran proyecto en partes más pequeñas y manejables, a menudo denominadas entregables. Este proceso ayuda a los gestores a asignar las tareas con mayor facilidad y contribuye a la gestión del tiempo y el flujo de trabajo. </Typography>
                <CardMedia 
                            component="img"
                            height='auto'
                            image={'https://2.bp.blogspot.com/-S60nFtCv-Fc/W4AvG55q80I/AAAAAAAAFsY/MKaEvPg_Mg0OWMOjKQFLOOJAnQnTPjxOACLcBGAs/s1600/tecnicas%2Bde%2Bestimaci%25C3%25B3n%2Bde%2Bsoftware%2B-%2BDescomposicion.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                            alt='JUICIO DE EXPERTOS'
                            sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>LISTA DE ACTIVIDADES</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475016727826452/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='LISTA DE ACTIVIDADES'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475065620848660/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='LISTA DE ACTIVIDADES'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982475116858441728/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='LISTA DE ACTIVIDADES'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <Typography variant='subtitle1' component='h1' mb='0'>ATRIBUTOS DE LA ACTIVIDAD</Typography>
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
                <Typography variant='subtitle1' component='h1' mb='0'>LISTA DE HITOS</Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982474882656894986/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='LISTA DE HITOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default DefinirActividades