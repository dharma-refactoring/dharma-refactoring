import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar
} from '@mui/material'
import { useState } from 'react'
import { Header } from './components/Header'
import { Headline } from './components/Headline'
import { Menu } from './components/Menu'
import { Pricing } from './components/Pricing'
import { Service } from './components/Service'

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#b71c1c',
      light: '#f05545',
      dark: '#7f0000',
      contrastText: '#ffffff'
    }
  }
})

function App(): JSX.Element {
  const [open, setOpen] = useState(true)
  const toggleDrawer = (): void => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header open={open} toggleMenu={toggleDrawer} />
        <Menu open={open} toggleMenu={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Headline />
            <Service />
            <Pricing />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
