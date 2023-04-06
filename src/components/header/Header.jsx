import React, { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded'
import DrawerComp from './Drawer'
import './css/header.css'

function Header () {
  const [value, setValue] = useState()
  const theme = useTheme()
  console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  console.log(isMatch)

  return (
    <>
      <AppBar className='app-bar'>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: 'scale(2)' }} />
          <Typography className='logo'>
            Logo
          </Typography>
          {isMatch
            ? (
              <>
                <DrawerComp />
              </>
              )
            : (
              <>
                <Tabs
                  className='nav'
                  textColor='#FFFFFF'
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label='Inicio' />
                  <Tab label='Productos' />
                  <Tab label='Sobre Nosotros' />
                  <Tab label='Contacto' />
                </Tabs>
                <Button variant='outline' size='small' className='btn-login'>
                  Iniciar Sesión
                </Button>
                <Button variant='outline' size='small' className='btn-account'>
                  Crear Cuenta
                </Button>
              </>
              )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
