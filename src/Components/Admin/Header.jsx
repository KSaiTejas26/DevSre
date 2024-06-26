// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import Image from "../../../public/rp-logo.svg";
// import { Link } from 'react-router-dom';
// import MediaQuery from "react-responsive";
// const pages = [
//   { name: 'Requests', path: '/requests' },
//   { name: 'Vendors', path: '/vendors' },
//   { name: 'Products', path: '/products' },
// ];
// const settings = [
//   { name: 'Profile', path: '/AdminProfile' },
//   { name: 'LogOut', path: '/login' },
// ];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static" style={{ background: 'white',width:'100%' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: 'flex',
//               alignItems: 'center',
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'black',
//               textDecoration: 'none',
//             }}
//           >
//             <img src={Image} alt="" style={{ height: '40px', marginRight: '10px' }} />
//             Your Logo
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="black"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
//                   <Link to={page.path} style={{ textDecoration: 'none', color: 'black' }}>
//                     <Typography textAlign="center">{page.name}</Typography>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

//           <Box sx={{ flexGrow: 1, display: 'flex' }}>
//             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page.name}
//                   component={Link}
//                   to={page.path}
//                   onClick={handleCloseNavMenu}
//                   sx={{ mx: 1, color: 'black' }}
//                 >
//                   {page.name}
//                 </Button>
//               ))}
//             </Box>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px', width: '100%' /* Added media query styles */
//         }}
//         id="menu-appbar"
//         anchorEl={anchorElUser}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         keepMountedtransformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         open={Boolean(anchorElUser)}
//         onClose={handleCloseUserMenu}
//       >
//         {settings.map((page) => (
//           <MenuItem key={page.name} onClick={handleCloseUserMenu}>
//             <Link to={page.path} style={{ textDecoration: 'none', color: 'black' }}>
//               <Typography textAlign="center">{page.name}</Typography>
//             </Link>
//           </MenuItem>
//         ))}
//       </Menu>
//     </Box>
//   </Toolbar>
// </Container>
// <MediaQuery maxWidth={600}>
  
// </MediaQuery>
// </AppBar>
// );
// }

// export default ResponsiveAppBar;




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Image from "../../../public/rp-logo.svg";
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";

const pages = [
  { name: 'Requests', path: '/requests' },
  { name: 'Vendors', path: '/vendors' },
  { name: 'Products', path: '/products' },
  { name: 'Vendor Specific Products', path: '/VendorProduct' },
];
const settings = [
  { name: 'Profile', path: '/AdminProfile' },
  { name: 'LogOut', path: '/login' },
];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{background:'white',color:'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src={Image} alt="" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'black',fontWeight:'bold' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            <img src={Image} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'black',fontWeight:'bold' }}>
                    <Typography textAlign="center" variant='h6'>{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseUserMenu}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'black',fontWeight:'bold' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;