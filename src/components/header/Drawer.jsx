import React, { useState } from 'react'
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import InfoIcon from '@mui/icons-material/Info'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import './css/drawer.css'

const pages = { Inicio: <HomeIcon />, Productos: <ShoppingCartIcon />, Nosotros: <InfoIcon />, Contacto: <ContactSupportIcon /> }
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className='drawer-list'>
          {Object.keys(pages).map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {pages[page]}
              </ListItemIcon>
              <ListItemText className='pages'>
                {page}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        className='icon-btn'
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color='white' />
      </IconButton>
    </>
  )
}

export default DrawerComp
