import { Box, CardMedia, Paper, Typography, ImageList, ImageListItem } from '@mui/material';
import { Tema } from '../../components';


const Evidencia2 = () => {

    const imagesGraficas: string[] = [
        'https://cdn.discordapp.com/attachments/717931775472566272/990295795385376818/unknown.png',
        'https://cdn.discordapp.com/attachments/717931775472566272/990295823696924723/unknown.png', 
        'https://cdn.discordapp.com/attachments/924718186530766948/972278323898122250/unknown.png',
        'https://cdn.discordapp.com/attachments/924718186530766948/972278449303593010/unknown.png',
        'https://cdn.discordapp.com/attachments/924718186530766948/972278505276596284/unknown.png',
        'https://cdn.discordapp.com/attachments/924718186530766948/972278586595745832/unknown.png',
        'https://cdn.discordapp.com/attachments/924718186530766948/972278642057043968/unknown.png'
    ]

  return (
    <Box component='article'>
            <Box component='header'>
                <Tema 
                  title='SEGUNDO ENTREGABLE' 
                />
            </Box>
            <Box component='section' display='flex' flexDirection='column' alignItems='center' rowGap={4} paddingY={4}>
                <Tema 
                  title='Descripción del Proyecto' 
                  subtitle='Establecer una infraestructura de última generación para laboratorios e instalaciones de computación, proporcionar equipos informáticos de  PC a los usuarios cuyos equipos tengan más de o 5 años  o sean ineficientes para optimizar y crear Beneficio de los procesos dados más el rendimiento del equipo conduce a mayor velocidad en todo tipo de procesos, por ejemplo (contabilidad, pedagogía, recursos humanos, etc.).' 
                  isTitle={false}
                />
                {/* <ImageList sx={{ width: {xs: '100%', md: '900px'}, height: 700 }} cols={1} rowHeight={500}>
                    {imagesGraficas.map((item) => (
                        <ImageListItem key={item}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList> */}
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990295795385376818/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990295823696924723/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990295868039135242/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990295892470939698/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296004198805574/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296053167304744/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296076357632010/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296097006178414/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296125535813642/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296153960624128/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
                <CardMedia 
                    component="img"
                    height='auto'
                    image={'https://cdn.discordapp.com/attachments/717931775472566272/990296203772166174/unknown.png' || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                    alt='DISEÑO Y LEVANTAMIENTO DE PLANOS'
                    sx={{objectFit: 'contain', maxWidth: {xs: '100%', sm: '52vw'}}}
                />
            </Box>
        </Box>
  )
}

export default Evidencia2