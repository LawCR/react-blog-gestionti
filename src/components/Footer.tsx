import { Box, Grid, Paper, Typography } from '@mui/material';


const Footer = () => {
  return (
      <Box component='footer' sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: 90,
      }}>
        <Paper elevation={4}  sx={{width: '100%',}}>
          <Grid container paddingY={2} paddingX={4}>
              <Grid xs={12} md={6} item>
                  <Typography textAlign='center' variant="h6" component="p" >Lima, Perú 2022</Typography>
              </Grid>
              <Grid xs={12} md={6} item>
                  <Typography textAlign='center' variant="h6" component="p" >Universidad Nacional Tecnológica de Lima Sur.</Typography>
              </Grid>
              <Grid xs={12} textAlign='center' item>
                  <Typography textAlign='center' variant='subtitle2' marginBottom={0} fontWeight='light' fontStyle='oblique' component='h1'>
                      Blog desarrollado con React.js, Material UI y desplegado en Vercel.
                  </Typography>
              </Grid>
          </Grid>
        </Paper>
      </Box>
  )
}

export default Footer