import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { JSX } from 'react'

export const drawerWidth = 200

export interface MenuProps {
  open: boolean
  toggleMenu: () => void
}

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(open !== true && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  }
}))

export const Menu = ({ open, toggleMenu }: MenuProps): JSX.Element => (
  <CustomDrawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1]
      }}
    >
      <IconButton onClick={toggleMenu}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav">
      <ListItemButton href="#service">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="サービス内容" />
      </ListItemButton>
      <ListItemButton href="#pricing">
        <ListItemIcon>
          <CurrencyYenIcon />
        </ListItemIcon>
        <ListItemText primary="費用" />
      </ListItemButton>
      <ListItemButton href="#history">
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="開発実績" />
      </ListItemButton>
      <ListItemButton href="#profile">
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="プロフィール" />
      </ListItemButton>
    </List>
  </CustomDrawer>
)
