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
                to: '/acta-constitucion',
                MenuItemName: 'Acta de la Constitución del Proyecto'
            },
            {
                to: '/',
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
                to: '/',
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
                to: '/',
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
                to: '/',
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
                to: '/',
                MenuItemName: 'Próximamente'
            },
        ]
    },
]