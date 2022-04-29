
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { CssBaseline } from '@mui/material';
import AppRoute from './routes/AppRoute';
import { lightTheme, darkTheme } from './themes';
import { UIProvider } from './context/ui';

function App() {

  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppRoute />
      </ThemeProvider>
    </UIProvider>
  )
}

export default App
