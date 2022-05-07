import { Paper, Typography } from '@mui/material'
import { FC } from 'react'

interface Props {
    title: string,
    subtitle?: string,
    isTitle?: boolean,
}

const Tema: FC<Props> = ({title, subtitle = '', isTitle = true}) => {
  const existSubtitle = subtitle.length > 0
  return (
    <Paper elevation={4} sx={{paddingY: '1.5rem', paddingX: {xs: '1.3rem', sm: '2.5rem'}}}>
        <Typography marginBottom={existSubtitle ? '' : '0'} textAlign='center' variant='subtitle1' component='h1'> {title} </Typography>
        {
          existSubtitle
          ? <Typography 
              textAlign={isTitle ? 'center' : 'justify'} 
              variant='subtitle2' 
              mb={0} 
              fontWeight={isTitle ? 'bold' : ''}  
              fontStyle={isTitle ? 'oblique' : 'normal'} 
              component='h1'
            > 
              {subtitle} 
            </Typography>
          : null
        }
    </Paper>
  )
}

export default Tema