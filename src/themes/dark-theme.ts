import { createTheme, AppBar } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // secondary: {
        //     main: '#19857b'
        // },
        info: {
            main: '#000'
        },
        error: {
            main: red.A400
        },
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    // backgroundColor: '#4a148c'
                    // height: '30px',
                }
            }
        },
        MuiListSubheader: {
          defaultProps: {
              
          },
          styleOverrides: {
              root: {
                  backgroundColor: 'inherit',
                  color: 'white',
                  fontSize: '1.15rem',
                  fontWeight: '400',
                  padding: '5px 12px',
                  marginTop: '4px',
                  lineHeight: '20px'
              }
          }
      },
        MuiTypography: {
            styleOverrides: {
              h1: {
                fontSize: 30,
                fontWeight: 600
              },
              h2: {
                fontSize: 20,
                fontWeight: 400
              },
              subtitle1: {
                fontSize: '1.875rem',
                fontWeight: 600,
                lineHeight: '2.25rem',
                marginBottom: '1.2rem',
                textAlign: 'center',
              },
              subtitle2: {
                marginBottom: '1.5rem',
                fontSize: '1.125rem',
                fontWeight: 400,
                lineHeight: '1.75rem'
              },
            }
          },
    }
});