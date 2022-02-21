import React from 'react';
import { Toolbar, Box, Typography, Button, MenuItem, Menu, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MyAppBar, MyIconButton, MyTextField } from '../style/Muistyled';

const Appbar = () => {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <MyAppBar position="fixed">
          <Toolbar>
            <img src='https://i.imgur.com/t3F7umk.png' alt='nofound' href='#' />
            <Typography component="div" sx={{ flexGrow: 1 }}></Typography>
            <div>
              <Button>
                Todas
              </Button>
              <Button>
                Mas Valoradas
              </Button>
              <Button>
                Menos Valoradas
              </Button>

            </div>
            <div>
              <MyIconButton> Buscar
                <SearchOutlinedIcon />
              </MyIconButton>
              <MyTextField
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{ maxWidth: 345 }}
              />
            </div>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                  <MenuItem onClick={handleClose}>Registar Pelicula</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </MyAppBar>
      </Box>
    </div>
  )
}

export default Appbar