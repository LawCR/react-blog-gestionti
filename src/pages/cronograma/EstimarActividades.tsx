import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'

const EstimarActividades = () => {
  return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='ESTIMAR LA DURACIÓN DE LAS ACTIVIDADES' 
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
               
                <Typography variant='subtitle1' component='h1' mb='0'>ESTIMACIÓN BASADA EN TRES VALORES</Typography>
                <Typography variant='h6' component='p' mb='0'>
                  La exactitud de las estimaciones de la duración por un único valor puede mejorarse si se tienen en cuenta la incertidumbre y el riesgo. El uso de estimaciones basadas en tres valores ayuda a definir un rango aproximado de duración de una actividad:
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                  Más probable (tM). Esta estimación se basa en la duración de la actividad, en función de los recursos que probablemente le sean asignados, de su productividad, de las expectativas realistas de disponibilidad para la actividad, de las dependencias de otros participantes y de las interrupciones.
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                  Optimista (tO). Estima la duración de la actividad sobre la base del análisis del mejor escenario para esa actividad.
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                  Pesimista (tP). Estima la duración sobre la base del análisis del peor escenario para esa actividad.
                <CardMedia 
                          component="img"
                          height='auto'
                          image={'https://proyectodeingenieriadesistemas.files.wordpress.com/2018/10/51.jpg' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                          alt='ANÁLISIS DE DATOS'
                          sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                  />
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                  Se puede calcular la duración esperada, tE, en función de la distribución asumida de los valores dentro del rango de las tres estimaciones. Una de las fórmulas más utilizadas es la distribución triangular:
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                  tE = (tO + tM + tP) / 3.
                </Typography>
                <Typography variant='h6' component='p' mb='0'>
                La distribución triangular se utiliza cuando existen datos históricos insuficientes o cuando se usan datos subjetivos. Las estimaciones de duración basadas en tres valores con una distribución determinada proporcionan una duración esperada y despejan el grado de incertidumbre sobre la duración esperada.
                </Typography>
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ESTIMACIÓN DE LA DURACIÓN</Typography>
                <Typography variant='h6' component='p' mb='0'>
                TM =  Más probable, TO = Optimista, TP = Pesimista, TE = Estimación (TM + TO + TP) / 3

                </Typography>
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982481867792060447/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE LA DURACIÓN'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982481940781338714/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE LA DURACIÓN'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/783158216976629770/982482015255416892/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='ESTIMACIÓN DE LA DURACIÓN'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default EstimarActividades