import { Paper, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
    title: string,
    subtitle?: string,
}

const Tema: FC<Props> = ({title, subtitle = ''}) => {
  return (
    <Paper elevation={4} sx={{paddingY: '1.5rem', paddingX: '1rem'}}>
        <Typography textAlign='center' variant='subtitle1' component='h1'> {title} </Typography>
        <Typography textAlign='center' variant='subtitle2' marginBottom={0} fontWeight='bold' fontStyle='oblique' component='h1'> {subtitle} </Typography>
    </Paper>
  )
}

export default Tema