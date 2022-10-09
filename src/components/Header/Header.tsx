import React, { useEffect, useState } from 'react'
import { AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Tooltip, Avatar } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Search, SearchIconWrapper, StyledInputBase } from '../../styles/Search';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppDispatch } from '../../hooks/useTypedReduxHooks';
import { fetchMovies, searchMovies } from '../../store/reducers/ActionCreators';

const settings = ['Profile', 'Logout'];

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const debounced = useDebounce(searchValue);
  const dispatch = useAppDispatch();
  
  
  useEffect(() => {
    if (searchValue.length && debounced.length > 1) {
      dispatch(searchMovies({limit: 20, page: 1, searchValue: debounced}));
    }
  }, [debounced])
  

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length > 0) {
      setSearchValue(event.target.value);
    } else {
      dispatch(fetchMovies({limit: 20, page: 1}));
    }
  };

  return (
    <AppBar position="sticky" color="secondary">
      <Container>
        <Toolbar disableGutters>
          <RocketLaunchIcon sx={{ display: { md: 'flex' }, mr: 3 }} color="primary" fontSize="large"/>
          <Box flexGrow={1}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                flexGrow: 1,
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Space Movies
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }} >
            <Search sx={{ mr: '24px', minWidth: '100px' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search movie…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => handleSearch(e)}
              />
            </Search>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                  alt="Test User" 
                  src="https://avatars.githubusercontent.com/u/55154028?v=4"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ width: '120px' }}>
                  <Typography textAlign="center" color="primary.dark">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header