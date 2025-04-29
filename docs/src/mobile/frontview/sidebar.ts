// .vitepress/sidebars/week1.ts
import { DefaultTheme } from 'vitepress'

export const mobileFrontviewSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'Описание',
        link: '/src/mobile/frontview'
    },
    {
        text: 'Ключи',
        items: [
            { text: 'Состояния', link: '/src/mobile/frontview/keys/state' },
            { text: 'Значения', link: '/src/mobile/frontview/keys/value' },
        ]
    },
    {
        text: 'Конфиги',
        items: [
            { text: 'Конфиг', link: '/src/mobile/frontview/config' },
        ]
    },
]
