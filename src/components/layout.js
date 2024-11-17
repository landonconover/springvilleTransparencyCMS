import * as React from "react"
import { useState } from "react"
import { Link, Script } from "gatsby"
import "../sass/main.scss"

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 288;

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div id="sidebar">
						<div className="inner">

							

							{/* <!-- Menu --> */}
								<nav id="menu">
									<header className="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="/">Homepage</a></li>
										<li><a href="#">About</a></li>
										<li><a href="#">Meeting Summaries</a></li>
										<li><a href="#">Budget Summary</a></li>
										<li><a href="#">Donate</a></li>
									</ul>
								</nav>


							{/* <!-- Section --> */}
								<section>
									<header className="major">
										<h2>Get in touch</h2>
									</header>
									<p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
									<ul className="contact">
										<li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
										<li className="icon solid fa-phone">(000) 000-0000</li>
										<li className="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
									</ul>
								</section>

							{/* <!-- Footer --> */}
								<footer id="footer">
									<p className="copyright">&copy; Landon Design Tech. All rights reserved. <br /> Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div>
  );

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

  return (
    <div id="wrapper">

			{/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          > */}
            
          

		  
		  {/* </IconButton> */}

				{/* <!-- Main --> */}
					<div id="main">
            <MenuIcon onClick={handleDrawerToggle}
             sx={{ mr: 2, mt: 2, display: { xs: 'block', md: 'block', lg: 'none' } }} 
             
             />
						<div className="inner">
						
							{/* <!-- Header --> */}
								<header id="header">
									<a href="index.html" className="logo"><strong>Springville Transparency</strong></a>
									{/* <ul className="icons">
										<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
										<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
									</ul> */}
								</header>

                {children}



						</div>
					</div>

					
				{/* <!-- Sidebar --> */}

        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', },

          }}
        >
          {drawer}
        </Drawer>
		
        {/* <Drawer
          variant="permanent"
          sx={(theme) => ({
            position: 'static',
            display: { xs: 'none', sm: 'block' }
          })}

          open
        >
          {drawer}
        </Drawer> */}

        <Box
        sx={{
            display: { xs: 'none', md: 'none', lg: 'block' },
          }}
        >
          {drawer}
        </Box>


				
					

          
          

			</div>
  )
}




// function ResponsiveDrawer(props) {
//   const { window } = props;
  

//   return (
//     <Box sx={{ display: 'flex' }}>

//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>

//         </Toolbar>
//       </AppBar>
      

//     </Box>
//   );
// }


export default Layout
