import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'
import { integrantesList } from '../db/dataIntegrantes'

const Integrantes = () => {
    return (
        <Box>
            <Typography textAlign='center' variant='subtitle1' fontWeight='bold' component='h1'>INTEGRANTES DEL EQUIPO:</Typography>
            <Grid container spacing={{xs: 1, md: 2}} >
                {
                    integrantesList.map(({name,lastName, imagen, frase, email}, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={name + index}>
                            <Card>
                                <CardMedia 
                                component="img"
                                height="220px"
                                image={imagen || 'https://www.teckelsdegolage.com/wp-content/uploads/2019/05/No_image.jpg'}
                                alt={name}
                                sx={{objectFit: 'contain'}}
                                />
                                <CardContent>
                                    <Typography gutterBottom textAlign='center' variant="h6" component="p" noWrap>
                                    {name} {lastName}
                                    </Typography>
                                    <Typography variant="body2" color="gray" component="p" >
                                    <strong>Frase:</strong> {frase}
                                    </Typography>

                                    <Typography variant="body2" color="gray" component="p" >
                                    <strong>Correo:</strong> {email}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Integrantes