import {
  AppBar,
  AppBarProps,
  IconButton,
  styled,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { drawerWidth } from './Menu'
import { JSX } from 'react'

interface CustomAppBarProps extends AppBarProps {
  open: boolean
}

export const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})<CustomAppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export interface HeaderProps {
  open: boolean
  toggleMenu: () => void
}

export const Header = ({ open, toggleMenu }: HeaderProps): JSX.Element => (
  <CustomAppBar position="absolute" open={open}>
    <Toolbar sx={{ pr: '24px' }}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleMenu}
        sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        だるまRefactoring
      </Typography>
    </Toolbar>
  </CustomAppBar>
)
