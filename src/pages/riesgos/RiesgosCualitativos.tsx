import { Box, Typography, CardMedia, Link } from '@mui/material'
import { Tema } from '../../components'
import { useNavigate } from 'react-router-dom';

const RiesgosCualitativos = () => {
    const navigate = useNavigate()

    return (
    <Box component='article'>
        <Box component='header'>
            <Tema 
                title='REALIZAR EL ANÁLISIS CUALITATIVO DE RIESGOS' 
            />
        </Box>
        <Box component='section' display='flex' flexDirection='column' rowGap={4} paddingY={4}>
        <Tema title='Entradas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>PLAN PARA LA DIRECCIÓN DEL PROYECTO</Typography>
                <Link onClick={() => navigate('/planificar-riesgos')} sx={{cursor: 'pointer'}} >PLAN DE LA GESTIÖN DE LOS RIESGOS</Link>
                <Typography variant='subtitle1' component='h1' mb='0'>DOCUMENTOS DEL PROYECTO</Typography>  
                    <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/977415496502751282/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REGISTRO DE SUPUESTOS'
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
                <Typography variant='subtitle1' component='h1' mb='0'>ANALISIS DE DATOS</Typography>
                    <Typography variant='h6' component='h1' mb='0'>Matriz de impacto sobre los objetivos del proyecto</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>Se establecen 3 niveles de impacto sobre el proyecto de acuerdo al alcance definido, duración y financiamiento de toda la vida del proyecto.</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000252268836307016/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ANALISIS DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <Typography variant='h6' component='h1' mb='0'>Matriz de probabilidad de ocurrencia del riesgo</Typography>
                    <Typography variant='subtitle2' component='h1' mb='0'>Se establecieron por acuerdo los niveles de probabilidad de ocurrencia de los riesgos, según se indica en la tabla.</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000252304223645736/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='ANALISIS DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '40vw'}}}
                    />
                <Typography variant='subtitle1' component='h1' mb='0'>CATEGORIZACIÓN DE RIESGOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000251386358943764/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='CATEGORIZACIÓN DE RIESGOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                <Typography variant='subtitle1' component='h1' mb='0'>REPRESENTACIÓN DE DATOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000251180485726258/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REPRESENTACIÓN DE DATOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
            </Box>
            
            <Tema title='Salidas' />
            <Box display='flex' flexDirection='column' rowGap={4} alignItems='center' width='100%'>
                <Typography variant='subtitle1' component='h1' mb='0'>ACTUALIZACIONES A LOS DOCUMENTOS DEL PROYECTO</Typography>
                <Typography variant='subtitle2' component='h1' mb='0'>REGISTRO DE SUPUESTOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000252976700596304/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='REGISTRO DE SUPUESTOS'
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
                <Typography variant='subtitle2' component='h1' mb='0'>INFORME DE RIESGOS</Typography>
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000253230422429706/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='INFORME DE RIESGOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
                    <CardMedia 
                        component="img"
                        height='auto'
                        image={'https://cdn.discordapp.com/attachments/783158216976629770/1000253316535701576/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                        alt='INFORME DE RIESGOS'
                        sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                    />
            </Box>
        </Box>
    </Box>
  )
}

export default RiesgosCualitativos