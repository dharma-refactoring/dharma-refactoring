import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar
} from '@mui/material'
import { JSX, useState } from 'react'
import { Header } from './components/Header'
import { Menu } from './components/Menu'
import { Headline } from './cards/Headline'
import { Pricing } from './cards/Pricing'
import { Service } from './cards/Service'
import { History } from './cards/History'
import { Profile } from './cards/Profile'

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
  const [open, setOpen] = useState(false)
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
            <History />
            <Profile />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
