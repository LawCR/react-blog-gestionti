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
                to: '/identificar-interesados',
                MenuItemName: 'Identificar a los Interesados'
            },
        ]
    },
    {
        menuName: 'Procesos de Planificación',
        menuItem: [
            
            {
                to: '/direccion-proyecto',
                MenuItemName: 'Dirección de Proyecto'
            },
            {
                to: '/planificar-alcance',
                MenuItemName: 'Planificar la Gestión del Alcance'
            },
            {
                to: '/recopilar-requisitos',
                MenuItemName: 'Recopilar Requisitos'
            },
            {
                to: '/definir-alcance',
                MenuItemName: 'Definir el Alcance'
            },
            {
                to: '/crear-edt',
                MenuItemName: 'Crear la EDT/WBS'
            },
        ]
    },
    {
        menuName: 'Cronograma del Proyecto',
        menuItem: [
            {
                to: '/planificar-actividades',
                MenuItemName: 'Planificación la Gestión de Cronograma'
            },
            {
                to: '/definir-actividades',
                MenuItemName: 'Definir las Actividades'
            },
            {
                to: '/secuenciar-actividades',
                MenuItemName: 'Secuenciar las Actividades'
            },
            {
                to: '/estimar-actividades',
                MenuItemName: 'Estimar las Actividades'
            },
            {
                to: '/desarrollar-cronograma',
                MenuItemName: 'Desarrollar el Cronograma'
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