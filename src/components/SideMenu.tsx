import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { SearchOutlined, ArticleOutlined } from "@mui/icons-material"
import { useContext } from "react"
import { UIContext } from "../context/ui"
import { menuData } from "../routes/listRoutes"
import { useNavigate } from "react-router-dom"


const SideMenu = () => {

    const navigate = useNavigate()
    const {isMenuOpen, toogleSideMenu} = useContext(UIContext)

    const navigateTo = ( url: string) => {
        toogleSideMenu()
        navigate(url)
    }

    return (
        <Drawer
            open={ isMenuOpen }
            onClose={toogleSideMenu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out', display: { xs: '', md: 'none' } }}
        >
            <Box sx={{ width: 275, paddingTop: 5 }}>
                <List>
                    <ListItem sx={{display: 'flex', justifyContent: 'center'}}>
                        <Input
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>
                    {
                        menuData.map(({menuName, menuItem}) => (
                            <Box>
                                <ListSubheader>{menuName}</ListSubheader>
                                {
                                    menuItem.map(({MenuItemName, to}) => (
                                        <ListItem button onClick={() => navigateTo(to)}>
                                                <ListItemIcon sx={{minWidth: 35}}>
                                                    <ArticleOutlined />
                                                </ListItemIcon>
                                                <ListItemText primary={MenuItemName} />
                                        </ListItem>
                                    ))
                                }
                                <Divider />
                            </Box>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
}

export default SideMenu