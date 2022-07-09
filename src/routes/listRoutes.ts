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
        menuName: 'Gestión de los Costos',
        menuItem: [
            {
                to: '/planificar-costos',
                MenuItemName: 'Planificar la gestión de los Costos'
            },
            {
                to: '/estimar-costos',
                MenuItemName: 'Estimar los Costos'
            },
            {
                to: '/determinar-presupuesto',
                MenuItemName: 'Determinar el Presupuesto'
            },
        ]
    },
    {
        menuName: 'Gestión',
        menuItem: [
            {
                to: '/planificar-calidad',
                MenuItemName: 'Planificar la Gestión de la Calidad'
            },
            {
                to: '/planificar-recursos',
                MenuItemName: 'Planificar la Gestión de Recursos'
            },
            {
                to: '/estimar-recursos',
                MenuItemName: 'Estimar los Recursos'
            },
        ]
    },
    {
        menuName: 'Implementación',
        menuItem: [
            {
                to: '/primer-entregable',
                MenuItemName: 'Entregables 1'
            },
            {
                to: '/segundo-entregable',
                MenuItemName: 'Entregables 2'
            },
            {
                to: '/tercer-entregable',
                MenuItemName: 'Entregables 3'
            },
        ]
    },
]