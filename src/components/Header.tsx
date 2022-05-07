import { Box, Paper, Typography } from "@mui/material"

const Header = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 320,
            '& > :not(style)': {
                // width: '100%',
                height: 180,
            },
            paddingY: 6,
            paddingX: 2,
            backgroundImage: "url('https://concepto.de/wp-content/uploads/2019/05/servidor-e1557165670831.jpg')"
        }}
        >
        <Paper elevation={4} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: {xs: '100%', md: '90%'}, paddingY: '1.5rem', paddingX: '1rem'}}>
            
            <Typography textAlign='center' variant="h4" fontSize={{xs: '1.7rem', md: '2rem'}} component="h6" color='primary' paddingX={{xs: 0, md: 5}} >
                IMPLEMENTACIÓN DE LABORATORIOS DE CÓMPUTO PARA EL COLEGIO IE 6045 DOLORES CAVERO DE GRAU
            </Typography>
        </Paper>
    </Box>
  )
}

export default Header