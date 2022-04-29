interface MenuItemType {
    to: string,
    MenuItemName: string
}

export interface MenuType {
    menuName: string,
    menuItem: MenuItemType[]
}

export const menuData: MenuType[] = [
    {
        menuName: 'Fase Inicial',
        menuItem: [
            {
                to: '/',
                MenuItemName: 'Home'
            },
            {
                to: '/inicio',
                MenuItemName: 'Inicio'
            },
        ]
    },
    {
        menuName: 'Próximamente',
        menuItem: [
            {
                to: '/',
                MenuItemName: 'Próximamente'
            },
            {
                to: '/inicio',
                MenuItemName: 'Próximamente'
            },
        ]
    },
    {
        menuName: 'Próximamente',
        menuItem: [
            {
                to: '/',
                MenuItemName: 'Próximamente'
            },
            {
                to: '/inicio',
                MenuItemName: 'Próximamente'
            },
        ]
    },
    {
        menuName: 'Próximamente',
        menuItem: [
            {
                to: '/',
                MenuItemName: 'Próximamente'
            },
            {
                to: '/inicio',
                MenuItemName: 'Próximamente'
            },
        ]
    },
    {
        menuName: 'Próximamente',
        menuItem: [
            {
                to: '/',
                MenuItemName: 'Próximamente'
            },
            {
                to: '/inicio',
                MenuItemName: 'Próximamente'
            },
        ]
    },
]