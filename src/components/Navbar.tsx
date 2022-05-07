import { useNavigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Slide, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { menuData } from '../routes/listRoutes';
import { MenuList } from '../components';
import { useContext } from 'react';
import { UIContext } from '../context/ui';


interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const Navbar = () => {

    const navigate = useNavigate()

    const {toogleSideMenu} = useContext(UIContext)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography sx={{cursor: 'pointer'}} variant="h5" fontWeight='light' component="h6" color='primary' onClick={() => navigate('/')}>
                            Blog
                        </Typography>
                        <Box display='flex' justifyContent='space-around' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                            {
                                menuData.map((menu, index) => (
                                        <MenuList menu={menu} key={'menu-' + index} />
                                ))
                            }
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: '', md: 'none' }}} />
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2, display: { xs: '', md: 'none' } }}
                            color='primary'
                            onClick={toogleSideMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </Box>
    )
}

export default Navbar