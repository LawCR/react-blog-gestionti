import { Button, Menu, MenuItem, Typography } from '@mui/material';
import React, { FC, useState } from 'react'
import { Link } from "react-router-dom";
import { MenuType } from '../routes/listRoutes';

interface Props {
    anchorEl?: HTMLElement | null,
    setAnchorEl?: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
    menu: MenuType
}

const MenuList: FC<Props> = ({ menu}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const {menuItem, menuName} = menu
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={isOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
                color='primary'
                variant='text'
            >
                {menuName}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
            >
                {
                    menuItem.map(({MenuItemName, to}) => (
                        <MenuItem onClick={handleClose} key={'menuItem-' + to} >
                                <Link to={`${to}`} style={{textDecoration: 'none'}} >
                                    <Typography variant="body1" width={'200px'} component="h6" color='primary' noWrap>
                                        {MenuItemName}
                                    </Typography>
                                </Link>
                        </MenuItem>
                    ))
                }
            </Menu>
      </div>
    )
}

export default MenuList